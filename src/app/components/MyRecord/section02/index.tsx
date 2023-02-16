import * as React from 'react';
import { chartData } from 'shared/constant/fakeData';
import { myRecordData } from 'shared/constant/myRecordData';
import { topPageData } from 'shared/constant/topPageData';
import CharSVGTemplate from 'template/component/chartSVG.template';
import CirclePercentageLib from 'template/component/circle-percentage-lib.template';

interface ISection01ComponentProps {}

const Section01Component: React.FunctionComponent<ISection01ComponentProps> = (
    props
) => {
    const ulRef = React.useRef<HTMLUListElement>(null);
    const [active, setActive] = React.useState(3);

    const handleActive = (index: number) => {
        return () => {
            setActive(index);
        };
    };

    React.useEffect(() => {
        ulRef.current?.querySelectorAll('li').forEach((item, index) => {
            item.classList.add('hidden');
            if (index === active) {
                item.classList.remove('hidden');
            }
        });
    }, [active]);

    const InfoChart = (props: { time: string }) => {
        const { time } = props;
        return <p className="w-146 text-22-custom">{time}</p>;
    };

    return (
        <>
            <div className="w-1008 m-auto mt-64-1280 bg-dark-500 pb-16-1280">
                <div className="w-full relative">
                    <div className="text-light absolute flex top-16-1280 left-24-1280">
                        <h3 className="w-96 text-15-custom">
                            {myRecordData.list2.title}
                        </h3>
                        <ul ref={ulRef} className="">
                            <li>
                                <InfoChart time="2111.11.11" />
                            </li>
                            <li>
                                <InfoChart time="2222.22.12" />
                            </li>

                            <li>
                                <InfoChart time="2333.33.12" />
                            </li>
                            <li>
                                <InfoChart
                                    time={myRecordData.list2.createDate}
                                />
                            </li>
                        </ul>
                    </div>

                    <CharSVGTemplate
                        offsetWidth={(window.innerWidth * 960) / 1280}
                        offsetHeight={200}
                    />

                    <div className="ml-32-1280 ">
                        {myRecordData.list2.time.map((item, index) => (
                            <button
                                className={`w-56 mr-16-1280  py-1 rounded-xl ${
                                    active === index
                                        ? 'bg-primary-300 text-light'
                                        : 'bg-light text-primary-300'
                                }`}
                                onClick={handleActive(index)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section01Component;
