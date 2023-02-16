import * as React from 'react';
import { BaseComponent } from 'core/component/base';
import ColumnView from 'app/view/column.view';
import { IColumnViewProps } from 'app/view/column.view';
import ColumnPageModel from 'app/controller/columnpage.model';

class ColumnPage extends BaseComponent({
    model: new ColumnPageModel(),
})<IColumnViewProps> {
    baseElement = () => <ColumnView model={this.props.model} />;
}

export default ColumnPage;
