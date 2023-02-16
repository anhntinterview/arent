import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuTemplate from '../menu.template';
import { SVGIcon } from '../svg.template';
import { menuData } from 'template/constant/menu';
import TootipTemplate from '../tooltip.template';
import { tooltipHeaderData, TooltipDirection } from 'template/constant/tooltip';
import WrapperTemplate from '../wrapper.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

interface IHeaderTemplateProps {}

const HeaderTemplate: React.FunctionComponent<IHeaderTemplateProps> = (
    props
) => {
    const [show, setDisplay] = React.useState(false);
    const hamburgerButtonRef = React.useRef(null);
    const handleDisplaymenu = () => {
        setDisplay((prevState) => !prevState);
    };

    const location = useLocation();
    
    return (
        <div className="w-full bg-dark-500">
            <WrapperTemplate widthSize="960">
                <Link to="/">
                    <img
                        className="w-144 h-64"
                        src={SVGIcon.LogoIcon}
                        alt="_logo"
                    />
                </Link>
                <div className="min-w-512 flex items-center">
                    <TootipTemplate
                        direction={TooltipDirection.TOP}
                        data={tooltipHeaderData}
                        childrenType={TooltipItemType.NOTIFY}
                        location={location}
                    />
                    <button
                        onClick={handleDisplaymenu}
                        ref={hamburgerButtonRef}
                    >
                        <img
                            className="w-32 h-32"
                            src={SVGIcon.MenuIcon}
                            alt="_hamburger"
                        />
                    </button>
                </div>
                <MenuTemplate
                    hamburgerButtonRef={hamburgerButtonRef}
                    data={menuData}
                    show={show}
                    setDisplay={setDisplay}
                    isToggle
                    style="block text-light text-18-custom w-full px-32-custom py-23-custom border-b border-b-gray-500 bg-gray-400 border-t border-t-gray-300"
                />
            </WrapperTemplate>
        </div>
    );
};

export default HeaderTemplate;
