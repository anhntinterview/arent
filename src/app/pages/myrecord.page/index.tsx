import * as React from 'react';
import { BaseComponent } from 'core/component/base';
import MyRecordView from 'app/view/myrecord.view';
import { ITopViewProps } from 'app/view/top.view';
import MyrecordModel from 'app/controller/myrecord.model';

class TopPage extends BaseComponent({
    model: new MyrecordModel(),
})<ITopViewProps> {
    baseElement = () => <MyRecordView model={this.props.model} />;
}

export default TopPage;
