import * as React from 'react';
import { myRecordData } from 'shared/constant/myRecordData';
import TootipTemplate from 'template/component/tooltip.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

interface ISection01ComponentProps {}

const list1 = myRecordData.list1;

const Section01Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    return (
        <div className="w-960 m-auto flex items-center justify-center mt-64-1280">
            <TootipTemplate data={list1} childrenType={TooltipItemType.GALLERY} />
        </div>
    );
};

export default Section01Component;
