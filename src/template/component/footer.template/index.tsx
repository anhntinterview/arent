import * as React from 'react';
import TootipTemplate from '../tooltip.template';
import {
    TooltipDirection,
    tooltipFooterData,
} from 'template/constant/tooltip';
import WrapperTemplate from '../wrapper.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

interface IFooterTemplateProps {}

const FooterTemplate: React.FunctionComponent<IFooterTemplateProps> = (
    props
) => {
    return (
        <div className="w-full bg-dark-500 h-128 flex items-center">
            <WrapperTemplate widthSize="960px">
                <TootipTemplate
                    direction={TooltipDirection.TOP}
                    data={tooltipFooterData}
                    childrenType={TooltipItemType.NORMAL}
                />
            </WrapperTemplate>
        </div>
    );
};

export default FooterTemplate;
