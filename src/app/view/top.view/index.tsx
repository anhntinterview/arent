import TopPageComponent from 'app/components/TopPage';
import TopPageModel from 'app/controller/toppage.model';
import * as React from 'react';
import MasterPageTemplate from 'template/component/masterpage.template';

export interface ITopViewProps {
    model: TopPageModel;
}

const TopView: React.FunctionComponent<ITopViewProps> = (props) => {
    return (
        <MasterPageTemplate>
            <TopPageComponent />
        </MasterPageTemplate>
    );
};

export default TopView;
