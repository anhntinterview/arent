import * as React from 'react';
import { BaseComponent } from 'core/component/base';
import TopView from 'app/view/top.view';
import { ITopViewProps } from 'app/view/top.view';
import TopPageModel from 'app/controller/toppage.model';

class TopPage extends BaseComponent({
    model: new TopPageModel(),
})<ITopViewProps> {
    baseElement = () => <TopView model={this.props.model} />;
}

export default TopPage;
