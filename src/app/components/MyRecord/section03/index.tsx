import { typo } from 'app/constant/typo';
import * as React from 'react';
import { myRecordData } from 'shared/constant/myRecordData';
import TootipTemplate from 'template/component/tooltip.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

const title = myRecordData.titleList3;
const list3 = myRecordData.list3;

interface ISection01ComponentProps {}

const Section03Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    return (
        <div className="w-1008 mt-64-1280 bg-dark-500 m-auto p-16-1280 h-264 overflow-scroll">
            <div className="text-light flex">
                <h3 className="w-96 text-15-custom">{title.title}</h3>
                <p className="w-146 text-22-custom">{title.createDate}</p>
            </div>
            <TootipTemplate data={list3} childrenType={TooltipItemType.LIST} />
        </div>
    );
};

export default Section03Component;
