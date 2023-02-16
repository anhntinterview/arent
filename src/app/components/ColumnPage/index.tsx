import * as React from 'react';
import Section01Component from 'app/components/ColumnPage/section01';
import Section02Component from 'app/components/ColumnPage/section02';

interface IColumnPageComponentProps {}

const ColumnPageComponent: React.FunctionComponent<IColumnPageComponentProps> = (
    props
) => {
    return (
        <div className="">
            <Section01Component />
            <Section02Component />
        </div>
    );
};

export default ColumnPageComponent;
