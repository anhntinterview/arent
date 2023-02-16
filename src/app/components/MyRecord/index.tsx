import * as React from 'react';
import Section01Component from 'app/components/MyRecord/section01';
import Section02Component from 'app/components/MyRecord/section02';
import Section03Component from 'app/components/MyRecord/section03';
import Section04Component from 'app/components/MyRecord/section04';

interface ITopPageComponentProps {}

const MyRecordComponent: React.FunctionComponent<ITopPageComponentProps> = (
    props
) => {
    return (
        <div className="">
            <Section01Component />
            <Section02Component />
            <Section03Component />
            <Section04Component />
        </div>
    );
};

export default MyRecordComponent;
