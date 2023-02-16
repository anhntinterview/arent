import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, MenuType } from 'shared/entity/menu';
import { useOutsideLayout } from 'template/util/hooks/handleOutsideLayout';

import { IMenuTemplateProps } from './type';

export function renderMenuItem(itemData: Array<MenuItem>, itemlevel: number) {
    return (
        <ul className={`lv-${itemlevel}`}>
            {itemData.map((item: MenuItem, index) => {
                return (
                    <li key={`${index}-${item}`}>
                        <img
                            src={item.icon}
                            height={16}
                            width={16}
                            alt="_order-menu-icon"
                        />
                        <Link to={`/${item.path}`}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

export function callbackMenuItem(
    style: string,
    menuData: { name: string; data: Array<any> } | MenuType,
    itemLevel?: number
) {
    if (Array.isArray(menuData)) {
        return menuData.map((item: any, index) => {
            return (
                <li className="w-full cursor-pointer" key={`${index}-${item.name}`}>
                    <Link to={item.path || ''}>
                        {item.icon && (
                            <img
                                src={item.icon}
                                height={16}
                                width={16}
                                alt="_order-menu-icon"
                            />
                        )}
                        <label htmlFor={`_${item.name}`} className={style}>
                            {item.name}
                        </label>
                        {item.data &&
                            (item.data.filter((item: any) => item.data)
                                .length === 0
                                ? renderMenuItem(item.data, item.level)
                                : callbackMenuItem(item, item.level))}
                    </Link>
                </li>
            );
        });
    } else {
        return menuData.data.map((item: any, index) => {
            return (
                <ul className={`lv-${itemLevel} w-full`}>
                    <li className="w-full cursor-pointer" key={`${index}-${item.name}`}>
                        <Link to={item.path || ''}>
                            {item.icon && (
                                <img
                                    src={item.icon}
                                    height={16}
                                    width={16}
                                    alt="_order-menu-icon"
                                />
                            )}
                            <label htmlFor={`_${item.name}`} className={style}>
                                {item.name}
                            </label>
                            {item.data &&
                                (item.data.filter((item: any) => item.data)
                                    .length === 0
                                    ? renderMenuItem(item.data, item.level)
                                    : callbackMenuItem(item, item.level))}
                        </Link>
                    </li>
                </ul>
            );
        });
    }
}

export default function MenuTemplate(props: IMenuTemplateProps) {
    const { data, isToggle, show, style, setDisplay, hamburgerButtonRef } =
        props;
    const menuRef = React.useRef(null);
    useOutsideLayout(menuRef, hamburgerButtonRef, setDisplay);

    if (isToggle) {
        return show ? (
            <div ref={menuRef} className="absolute top-64 right-0 w-280 z-10">
                <ul className="lv-root w-full">
                    {callbackMenuItem(style, data)}
                </ul>
            </div>
        ) : null;
    } else {
        return (
            <div className="absolute top-64 right-0 w-280 z-10">
                <ul className="lv-root w-full">
                    {callbackMenuItem(style, data)}
                </ul>
            </div>
        );
    }
}
