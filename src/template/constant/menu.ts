import { MenuType } from 'shared/entity/menu';
import { SVGIcon } from 'template/component/svg.template';
import { typo } from 'app/constant/typo';

export const menuData: MenuType = [
    {
        name: typo.menu.your_record,
        level: 0,
        path: '/myrecord',
    },
    {
        name: typo.menu.weight_graph,
        level: 0,
        path: '#',
    },
    {
        name: typo.menu.goal,
        level: 0,
        path: '#',
    },
    {
        name: typo.menu.selected_course,
        level: 0,
        path: '#',
    },
    {
        name: typo.menu.column_list,
        level: 0,
        path: '/column',
    },
    {
        name: typo.menu.settings,
        level: 0,
        path: '#',
    },
];
