import ColumnPageComponent from 'app/components/ColumnPage';
import ColumnModel from 'app/controller/columnpage.model';
import * as React from 'react';
import MasterPageTemplate from 'template/component/masterpage.template';

export interface IColumnViewProps {
    model: ColumnModel;
}

const ColumnView: React.FunctionComponent<IColumnViewProps> = (props) => {
    return (
        <MasterPageTemplate>
            <ColumnPageComponent />
        </MasterPageTemplate>
    );
};

export default ColumnView;