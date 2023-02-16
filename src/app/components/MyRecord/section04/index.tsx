import { typo } from 'app/constant/typo';
import * as React from 'react';
import { myRecordData } from 'shared/constant/myRecordData';
import TootipTemplate from 'template/component/tooltip.template';
import { TooltipItemType } from 'template/component/tooltip.template/type';

const list4 = myRecordData.list4.data;

interface ISection01ComponentProps {}

const Section04Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    const [pagination, setPagination] = React.useState<number>(8);
    const [sliceArrRef, setSliceArrRef] = React.useState<
        Array<{
            createDate: string;
            title: string;
            content: string;
        }>
    >(list4.slice(0, pagination));

    React.useEffect(() => {
        setSliceArrRef(() => list4.slice(0, pagination));
    }, [pagination]);

    const handleLazyClick = () => {
        setPagination((prevState) =>
            (prevState += 8) <= list4.length ? prevState : (prevState -= 8)
        );
    };
    return (
        <div className="w-1008 m-auto flex flex-col items-center justify-center mt-64-1280">
            <TootipTemplate
                data={sliceArrRef}
                childrenType={TooltipItemType.NOTE}
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

export default Section04Component;
