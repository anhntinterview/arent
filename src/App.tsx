import React from 'react';
import { Loading } from 'template/component/loading.template';
import { Route, Routes } from 'react-router-dom';

const TopPage = React.lazy(
    () =>
        import(
            /* webpackChunkName: "StackExchangePage" */
            'app/pages/top.page'
        )
);

const MyRecord = React.lazy(
    () =>
        import(
            /* webpackChunkName: "StackExchangePage" */
            'app/pages/myrecord.page'
        )
);

const ColumnPage = React.lazy(
    () =>
        import(
            /* webpackChunkName: "StackExchangePage" */
            'app/pages/column.page'
        )
);

function App() {
    return (
        <div className="">
            <React.Suspense fallback={<Loading isLoading={true} />}>
                <Routes>
                    <Route path="" element={<TopPage />} />
                    <Route path="/myrecord" element={<MyRecord />} />
                    <Route path="/column" element={<ColumnPage />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
