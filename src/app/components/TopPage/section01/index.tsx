import * as React from 'react';
import { chartData } from 'shared/constant/fakeData';
import { topPageData } from 'shared/constant/topPageData';
import CharSVGTemplate from 'template/component/chartSVG.template';
import CirclePercentageLib from 'template/component/circle-percentage-lib.template';

interface ISection01ComponentProps {}

const Section01Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    const [dimension, setDimension] = React.useState<{
        offsetWidth: number;
        offsetHeight: number;
    }>({
        offsetWidth: 0,
        offsetHeight: 0,
    });
    const leftAreaRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (leftAreaRef.current) {
            setDimension({
                offsetWidth: leftAreaRef.current.offsetWidth,
                offsetHeight: leftAreaRef.current.offsetHeight,
            });
        }
    }, []);

    return (
        <>
            <div className="flex bg-dark-600">
                <div className="w-540 relative" ref={leftAreaRef}>
                    <img
                        className="w-full"
                        src={topPageData.hero}
                        alt="_hero_img"
                    />
                    <CirclePercentageLib />
                </div>
                <div className="w-740">
                    <CharSVGTemplate
                        offsetWidth={dimension.offsetWidth}
                        offsetHeight={dimension.offsetHeight}
                    />
                </div>
            </div>
        </>
    );
};

export default Section01Component;
