import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../App';

import { ListView, IssueView } from '../issues/views';

export const routers = createBrowserRouter([
    {
        path: '/issues',
        element: <App />,
        children: [
            { path: 'list', element: <ListView />, },
            { path: 'issue/:id', element: <IssueView /> },
            { path: '*', element: <Navigate to="list/" /> },
        ]
    },
    {
        path: '/',
        element: <Navigate to="issues/list" />
    },
    {
        path: '*',
        element: <h1>Not Found</h1>,
    }
]);