import { typo } from 'app/constant/typo';
import * as React from 'react';
import { topPageData } from 'shared/constant/topPageData';
import TootipTemplate from 'template/component/tooltip.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

const list2 = topPageData.list2;

interface ISection01ComponentProps {}

const Section03Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    const [pagination, setPagination] = React.useState<number>(8);
    const [sliceArrRef, setSliceArrRef] = React.useState<
        Array<{
            imgPath: string;
            name: string;
            path: string;
        }>
    >(list2.slice(0, pagination));

    React.useEffect(() => {
        setSliceArrRef(() => list2.slice(0, pagination));
    }, [pagination]);

    const handleLazyClick = () => {
        setPagination((prevState) =>
            (prevState += 8) <= list2.length ? prevState : (prevState -= 8)
        );
    };
    return (
        <div className="w-960 m-auto flex flex-col items-center justify-center pt-5">
            <TootipTemplate
                data={sliceArrRef}
                childrenType={TooltipItemType.ARTICLE}
            />
            <button
                className="m-7 rounded w-296 py-4 bg-gradient-to-b from-primary-400 to-primary-300 text-light text-18-custom"
                onClick={handleLazyClick}
            >
                {typo.button.top_page}
            </button>
        </div>
    );
};

export default Section03Component;
