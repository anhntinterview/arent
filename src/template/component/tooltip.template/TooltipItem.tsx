import { BaseComponent } from 'core/component/base';
import { Link, Location } from 'react-router-dom';
import { SVGIcon } from 'template/component/svg.template';
import { ITooltipItem } from 'template/component/tooltip.template/type';

interface ITooltipCustomItem {
    item: ITooltipItem;
}

export const TooltipIntroItem = (props: ITooltipCustomItem) => {
    const { item } = props;
    return (
        <div className="w-216 h-144 bg-[#000] flex flex-col items-center justify-center text-light text-center">
            <h3 className="text-primary-300 text-22-custom">{item.name}</h3>
            <img className="my-10-1280" src={SVGIcon.LineIcon} alt="_line" />
            <h4 className="text-18-custom">{item.title}</h4>
        </div>
    );
};

export const TooltipNoteItem = (props: ITooltipCustomItem) => {
    const { item } = props;
    return (
        <div className="w-231 h-231 mr-12-1280 mb-24-1280 border-2 border-l-gray-400 text-gray-400 p-16-1280">
            <p className="text-18-custom">
                {item.createDate}
                <br />
                {item.time}
            </p>
            <p className="text-12-custom">
                {item.title}
                <br />
                {item.content}
            </p>
        </div>
    );
};

export const TooltipListItem = (props: ITooltipCustomItem) => {
    const { item } = props;
    return (
        <div className="flex w-480 justify-between items-center border-b-gray-400 border-b p-2">
            <div className="">
                <h3 className="text-light text-22-custom">{item.title}</h3>
                <p className=" text-primary-300 text-15-custom">
                    {item.kcal}kcal
                </p>
            </div>
            <p className=" text-primary-300 text-22-custom">{item.duration}</p>
        </div>
    );
};

export const TooltipGalleryItem = (props: ITooltipCustomItem) => {
    const { item } = props;
    return (
        <div
            className={`bg-[rgba(100,100,100,1)] flex flex-col justify-center items-center w-264 h-264 outline outline-24 outline-primary-300`}
        >
            <img
                className="absolute top-0 left-0 w-full h-full mix-blend-luminosity"
                src={item.imgPath}
                alt="_image"
            />
            <div className=""></div>
            <h3 className="text-primary-300 text-24-custom">{item.name}</h3>
            <p className="w-160 text-center text-14-custom text-light bg-primary-400 p-4-custom">
                {item.title}
            </p>
        </div>
    );
};

export const TooltipArticleItem = (props: ITooltipCustomItem) => {
    const { item } = props;
    return (
        <div className="relative w-240 p-1 h-240 bg-no-repeat bg-contain flex items-center justify-center flex-col text-center bg-center">
            <img className="w-full h-full" src={item.imgPath} alt="_image" />
            <p className="absolute bottom-1 left-1 text-18-custom text-light bg-primary-300 p-4-custom">
                {item.name}
            </p>
        </div>
    );
};

export const TooltipArticle2Item = (props: ITooltipCustomItem) => {
    const { item } = props;
    return (
        <div className="relative w-240 p-1 h-240 bg-no-repeat bg-contain flex flex-col bg-center">
            <div className="w-full h-145 relative">
                <img
                    className="w-full h-full"
                    src={item.imgPath}
                    alt="_image"
                />
                <p className="absolute bottom-0 left-0 text-18-custom text-light bg-primary-300 p-4-custom">
                    {item.createDate}
                </p>
            </div>

            <h3 className="text-15-custom">{item.title}</h3>
            <div className="flex">
                {item.tags?.map((tag) => (
                    <h4 className="text-12-custom text-primary-400 mr-8-1280 block">
                        {tag}
                    </h4>
                ))}
            </div>
        </div>
    );
};

export const TooltipBgItem = (props: ITooltipCustomItem) => {
    const { item } = props;
    return (
        <div className="bg-hexagon mx-40-1280 w-136 h-136 bg-no-repeat bg-contain flex items-center justify-center flex-col text-center bg-center">
            <img className="w-53 h-45" src={item.icon} alt="_icon" />
            <p className="text-20-custom text-light">{item.name}</p>
        </div>
    );
};

export const TooltipNormalItem = (props: ITooltipCustomItem) => {
    const { item } = props;

    return (
        <div className="flex h-full items-center w-160">
            {item.icon && (
                <img className=" w-32 h-32" src={item.icon} alt="_navbar_ico" />
            )}
            <p className="text-light ml-2 text-11-custom">{item.name}</p>
        </div>
    );
};

interface ITooltipNotifyItem {
    item: ITooltipItem;
    isNotify: boolean;
    isLastIndex: boolean;
    location?: Location;
}

export const TooltipNotifyItem = (props: ITooltipNotifyItem) => {
    const { item, isLastIndex, isNotify, location } = props;

    return (
        <Link to={item.path || '/'} className="flex h-full items-center w-160">
            {item.icon && (
                <img className=" w-32 h-32" src={item.icon} alt="_navbar_ico" />
            )}
            <p
                className={` ml-2 text-16-custom ${
                    location && location.pathname === item.path
                        ? ' text-primary-400'
                        : 'text-light'
                }`}
            >
                {item.name}
            </p>
            {isNotify && isLastIndex && (
                <label className="block absolute left-22 leading-[1.75] top-0 rounded-full text-light text-10-custom w-16 h-16 bg-primary-500 text-center">
                    1
                </label>
            )}
        </Link>
    );
};
