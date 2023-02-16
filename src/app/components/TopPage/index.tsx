import * as React from 'react';
import Section01Component from './section01';
import Section02Component from './section02';
import Section03Component from './section03';

interface ITopPageComponentProps {}

const TopPageComponent: React.FunctionComponent<ITopPageComponentProps> = (
    props
) => {
    return (
        <div className="">
            <Section01Component />
            <Section02Component />
            <Section03Component />
        </div>
    );
};

export default TopPageComponent;
