import * as React from 'react';
import { SVGIcon } from 'template/component/svg.template';

interface IGotoTopTemplateProps {}

const GotoTopTemplate: React.FunctionComponent<IGotoTopTemplateProps> = (
    props
) => {
    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            className={`fixed flex justify-center items-center right-76-1280 top-1/2 transform -translate-y-1/2 w-48 h-48 rounded-full border border-gray-500`}
            onClick={handleClick}
        >
            <img src={SVGIcon.UpArrowIcon} alt="gotop" />
        </button>
    );
};

export default GotoTopTemplate;
