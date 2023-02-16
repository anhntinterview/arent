import { Location } from 'react-router-dom';
import { TooltipDirection } from 'template/constant/tooltip';

export enum TooltipItemType {
    NORMAL = 'normal',
    BG = 'background',
    ARTICLE = 'article',
    ARTICLE2 = 'article2',
    NOTIFY = 'notify',
    GALLERY = 'gallery',
    LIST = 'list',
    NOTE = 'note',
    INTRO = 'intro',
}

export interface ITooltipProps {
    direction?: TooltipDirection;
    data: Array<ITooltipItem>;
    childrenType: TooltipItemType;
    styles?: string;
    location?: Location;
}

export interface ITooltipItem {
    name?: string;
    path?: string;
    icon?: string;
    imgPath?: string;
    title?: string;
    duration?: string;
    kcal?: number;
    createDate?: string;
    time?: string;
    content?: string;
    tags?: Array<string>;
}
