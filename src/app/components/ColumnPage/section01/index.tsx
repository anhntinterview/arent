import { typo } from 'app/constant/typo';
import * as React from 'react';
import { columnPageData } from 'shared/constant/columnPageData';
import TootipTemplate from 'template/component/tooltip.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

const list1 = columnPageData.list1;

interface ISection01ComponentProps {}

const Section04Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    return (
        <div className="w-1008 m-auto flex flex-col items-center justify-center mt-64-1280">
            <TootipTemplate
                data={list1}
                childrenType={TooltipItemType.INTRO}
            />
        </div>
    );
};

export default Section04Component;
