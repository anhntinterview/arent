import * as React from 'react';
import LineChart from './LineChart';

const data = [
    { label: '6月', x1: 0, y1: 450, x2: 0, y2: 450 },
    { label: '7月', x1: 1, y1: 300, x2: 1, y2: 400 },
    { label: '8月', x1: 2, y1: 350, x2: 2, y2: 350 },
    { label: '9月', x1: 3, y1: 400, x2: 3, y2: 420 },
    { label: '10月', x1: 4, y1: 280, x2: 4, y2: 300 },
    { label: '11月', x1: 5, y1: 250, x2: 5, y2: 280 },
    { label: '12月', x1: 6, y1: 230, x2: 6, y2: 350 },
    { label: '1月', x1: 7, y1: 200, x2: 7, y2: 290 },
    { label: '2月', x1: 8, y1: 250, x2: 8, y2: 410 },
    { label: '3月', x1: 9, y1: 180, x2: 9, y2: 250 },
    { label: '4月', x1: 10, y1: 200, x2: 10, y2: 150 },
    { label: '5月', x1: 11, y1: 100, x2: 11, y2: 300 },
];
const styles = {
    chartWrapper: { width: '100%' },
};

interface ICharTemplateProps {
    offsetWidth?: number;
    offsetHeight?: number;
}

const CharSVGTemplate: React.FunctionComponent<ICharTemplateProps> = (
    props
) => {
    const { offsetWidth, offsetHeight } = props;

    return (
        <div>
            <div style={styles.chartWrapper}>
                <LineChart
                    width={offsetWidth ? window.innerWidth - offsetWidth : 500}
                    height={offsetHeight || 200}
                    data={data}
                    horizontalGuides={0}
                    precision={2}
                    verticalGuides={12}
                />
            </div>
        </div>
    );
};

export default CharSVGTemplate;
