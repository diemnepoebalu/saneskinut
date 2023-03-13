import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routes} from "../config/routes";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                {routes.map(config =>
                    <Route
                        path={config.path}
                        element={config.element}
                        key={config.path}
                    />
                )}
            </Routes>
        </>
    );
};

export default AppRoutes;
