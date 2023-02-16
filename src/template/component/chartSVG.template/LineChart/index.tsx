import * as React from 'react';

const STROKE = 2;

type ChartDataType = Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    label: string;
}>;

interface ILineChartProps {
    data: ChartDataType;
    height: number;
    width: number;
    horizontalGuides: number;
    verticalGuides: number;
    precision: number;
}

const LineChart: React.FunctionComponent<ILineChartProps> = (props) => {
    const {
        data,
        height,
        width,
        horizontalGuides: numberOfHorizontalGuides,
        verticalGuides: numberOfVerticalGuides,
        precision,
    } = props;

    const FONT_SIZE = width / 50;
    const maximumXFromData = Math.max(...data.map((e) => e.x1));
    const maximumYFromData = Math.max(...data.map((e) => e.y1));

    const digits =
        parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

    const padding = (FONT_SIZE + digits) * 3;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const points1 = data
        .map((element) => {
            const x = (element.x1 / maximumXFromData) * chartWidth + padding;
            const y =
                chartHeight -
                (element.y1 / maximumYFromData) * chartHeight +
                padding;
            return `${x},${y}`;
        })
        .join(' ');
    const points2 = data
        .map((element) => {
            const x = (element.x2 / maximumXFromData) * chartWidth + padding;
            const y =
                chartHeight -
                (element.y2 / maximumYFromData) * chartHeight +
                padding;
            return `${x},${y}`;
        })
        .join(' ');

    const Axis = ({ points }: { points: string }) => (
        <polyline
            fill="none"
            stroke="#777777"
            strokeWidth=".5"
            points={points}
        />
    );

    const XAxis = () => (
        <Axis
            points={`${padding},${height - padding} ${width - padding},${
                height - padding
            }`}
        />
    );

    const YAxis = () => (
        <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
    );

    const VerticalGuides = () => {
        const guideCount = numberOfVerticalGuides || data.length - 1;

        const startY = padding;
        const endY = height - padding;

        return new Array(guideCount).fill(0).map((_, index) => {
            const ratio = (index + 1) / guideCount;

            const xCoordinate = padding + ratio * (width - padding * 2);

            return (
                <React.Fragment key={index}>
                    <polyline
                        fill="none"
                        stroke="#777777"
                        strokeWidth=".5"
                        points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
                    />
                </React.Fragment>
            );
        });
    };

    const HorizontalGuides = () => {
        const startX = padding;
        const endX = width - padding;

        return new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
            const ratio = (index + 1) / numberOfHorizontalGuides;

            const yCoordinate = chartHeight - chartHeight * ratio + padding;

            return (
                <React.Fragment key={index}>
                    <polyline
                        fill="none"
                        stroke={'#777777'}
                        strokeWidth=".5"
                        points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
                    />
                </React.Fragment>
            );
        });
    };

    const LabelsXAxis = () => {
        const y = height - padding + FONT_SIZE * 2;

        return data.map((element, index) => {
            const x =
                (element.x1 / maximumXFromData) * chartWidth +
                padding -
                FONT_SIZE / 2;
            return (
                <text
                    key={index}
                    x={x}
                    y={y}
                    style={{
                        fill: '#777777',
                        fontSize: FONT_SIZE,
                    }}
                >
                    {element.label}
                </text>
            );
        });
    };

    const LabelsYAxis = () => {
        const PARTS = numberOfHorizontalGuides;
        return new Array(PARTS + 1).fill(0).map((_, index) => {
            const x = FONT_SIZE;
            const ratio = index / numberOfHorizontalGuides;

            const yCoordinate =
                chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
            return (
                <text
                    key={index}
                    x={x}
                    y={yCoordinate}
                    style={{
                        fill: '#808080',
                        fontSize: FONT_SIZE,
                    }}
                >
                    {(maximumYFromData * (index / PARTS)).toFixed(precision)}
                </text>
            );
        });
    };

    const Dots1 = () => {
        return data.map((item, index) => {
            const x = (item.x1 / maximumXFromData) * chartWidth + padding;
            const y =
                chartHeight -
                (item.y1 / maximumYFromData) * chartHeight +
                padding;
            return (
                <React.Fragment key={index}>
                    <circle cx={x} cy={y} r="3" fill="#FFCC21" />
                </React.Fragment>
            );
        });
    };

    const Dots2 = () => {
        return data.map((item, index) => {
            const x = (item.x2 / maximumXFromData) * chartWidth + padding;
            const y =
                chartHeight -
                (item.y2 / maximumYFromData) * chartHeight +
                padding;
            return (
                <React.Fragment key={index}>
                    <circle cx={x} cy={y} r="3" fill="#8FE9D0" />
                </React.Fragment>
            );
        });
    };

    return (
        <svg viewBox={`0 0 ${width} ${height}`}>
            <>
                <XAxis />
                {LabelsXAxis()}
                <YAxis />
                {LabelsYAxis()}
                {numberOfVerticalGuides && VerticalGuides()}
                {HorizontalGuides()}

                <polyline
                    fill="none"
                    stroke="#FFCC21"
                    strokeWidth={STROKE}
                    points={points1}
                />
                {Dots1()}

                <polyline
                    fill="none"
                    stroke="#8FE9D0"
                    strokeWidth={STROKE}
                    points={points2}
                />
                {Dots2()}
            </>
        </svg>
    );
};

export default LineChart;
