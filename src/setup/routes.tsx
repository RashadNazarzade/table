import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));

export default function RoutesManager() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
        </Routes>
    );
}
