import * as React from 'react';
import HeaderTemplate from 'template/component/header.template';
import FooterTemplate from 'template/component/footer.template';
import GotoTopTemplate from 'template/component/masterpage.template/goto-top.template';

interface IMasterPageTemplateProps {
    children: React.ReactNode;
}

const MasterPageTemplate: React.FunctionComponent<IMasterPageTemplateProps> = (
    props
) => {
    const { children } = props;
    return (
        <div className="w-full">
            <HeaderTemplate />
            {children}
            <FooterTemplate />
            {document.documentElement.scrollHeight >
                document.documentElement.offsetHeight && <GotoTopTemplate />}
        </div>
    );
};

export default MasterPageTemplate;
