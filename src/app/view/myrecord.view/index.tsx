import MyRecordComponent from 'app/components/MyRecord';
import MyRecordModel from 'app/controller/myrecord.model';
import * as React from 'react';
import MasterPageTemplate from 'template/component/masterpage.template';

export interface ITopViewProps {
    model: MyRecordModel;
}

const MyRecordView: React.FunctionComponent<ITopViewProps> = (props) => {
    return (
        <MasterPageTemplate>
            <MyRecordComponent />
        </MasterPageTemplate>
    );
};

export default MyRecordView;