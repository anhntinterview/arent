import * as React from 'react';
import { topPageData } from 'shared/constant/topPageData';
import TootipTemplate from 'template/component/tooltip.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

interface ISection01ComponentProps {}

const list1 = topPageData.list1;

const Section02Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    return (
        <div className="w-960 m-auto flex items-center justify-center pt-5">
            <TootipTemplate data={list1} childrenType={TooltipItemType.BG} />
        </div>
    );
};

export default Section02Component;
