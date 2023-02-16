import * as React from 'react';
import { ITooltipItem, ITooltipProps, TooltipItemType } from './type';
import {
    TooltipArticle2Item,
    TooltipArticleItem,
    TooltipBgItem,
    TooltipGalleryItem,
    TooltipIntroItem,
    TooltipListItem,
    TooltipNormalItem,
    TooltipNoteItem,
    TooltipNotifyItem,
} from './TooltipItem';

import './style.css';

export interface ITooltipChildrenProps {
    item: ITooltipItem;
    isNotify: boolean,
    isLastIndex: boolean
}

const TootipTemplate: React.FunctionComponent<ITooltipProps> = (props) => {
    const { data, childrenType, location } = props;

    return (
        <nav className="bg-gray-50 dark:bg-gray-700 w-full">
            <div className="mx-auto w-full">
                <div className="flex items-center w-full">
                    <ul className={`relative flex flex-row justify-between flex-wrap w-full ${childrenType === TooltipItemType.LIST ? 'custome-list list-none' : ''}`}>
                        {data.map((item, index) => (
                            <li
                                className={`relative text-gray-900 dark:text-white hover:no-underline cursor-pointer`}
                                onClick={() => {}}
                                key={item.name}
                            >
                                {childrenType === TooltipItemType.NOTE && (
                                    <TooltipNoteItem item={item} />
                                )}
                                {childrenType === TooltipItemType.INTRO && (
                                    <TooltipIntroItem item={item} />
                                )}
                                {childrenType === TooltipItemType.BG && (
                                    <TooltipBgItem item={item} />
                                )}
                                {childrenType === TooltipItemType.NORMAL && (
                                    <TooltipNormalItem
                                        item={item}
                                    />
                                )}
                                {childrenType === TooltipItemType.NOTIFY && (
                                    <TooltipNotifyItem
                                        item={item}
                                        location={location}
                                        isLastIndex={index === data.length - 1}
                                        isNotify
                                    />
                                )}
                                {childrenType === TooltipItemType.ARTICLE && (
                                    <TooltipArticleItem item={item} />
                                )}
                                {childrenType === TooltipItemType.ARTICLE2 && (
                                    <TooltipArticle2Item item={item} />
                                )}
                                {childrenType === TooltipItemType.GALLERY && (
                                    <TooltipGalleryItem item={item} />
                                )}
                                {childrenType === TooltipItemType.LIST && (
                                    <TooltipListItem item={item} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TootipTemplate;
