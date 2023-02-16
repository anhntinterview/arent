import { typo } from 'app/constant/typo';
import { SVGIcon } from 'template/component/svg.template';
import { ITooltipItem } from 'template/component/tooltip.template/type';

export enum TooltipDirection {
    TOP = 'top',
    RIGHT = 'right',
    LEFT = 'left',
    BOTTOM = 'bottom',
}

export const tooltipHeaderData: Array<ITooltipItem> = [
    {
        name: typo.navbar.memo,
        path: "/myrecord",
        icon: SVGIcon.MemoIcon,
    },
    {
        name: typo.navbar.challenge,
        path: "/#",
        icon: SVGIcon.ChallengeIcon,
    },
    {
        name: typo.navbar.info,
        path: "/#",
        icon: SVGIcon.InfoIcon,
    },
];

export const tooltipFooterData: Array<ITooltipItem> = [
    {
        name: typo.footer.member_register,
        path: "/#",
    },
    {
        name: typo.footer.operating_company,
        path: "/#",
    },
    {
        name: typo.footer.term_of_service,
        path: "/#",
    },
    {
        name: typo.footer.handling_of_personal_information,
        path: "/#",
    },
    {
        name: typo.footer['Notation_based on the Act on Specified Commercial Transactions'],
        path: "/#",
    },
    {
        name: typo.footer.inquiry,
        path: "/#",
    },
];
