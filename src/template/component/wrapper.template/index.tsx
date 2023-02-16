import * as React from 'react';

interface IWrapperTemplateProps {
    widthSize: string;
    children: React.ReactNode;
}

const WrapperTemplate: React.FunctionComponent<IWrapperTemplateProps> = (props) => {
    const { widthSize, children } = props;
    return <div className={`relative flex justify-between m-auto w-${widthSize} `}>{children}</div>;
};

export default WrapperTemplate;
