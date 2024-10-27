import React from 'react';
import { createRoot } from 'react-dom/client';
import { 
    createBrowserRouter, 
    RouterProvider
} from 'react-router-dom';
import App from './App';
import MyBooks from './views/MyBooks';
import ToBeRead from './views/ToBeRead';
import CurrentlyReading from './views/CurrentlyReading';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/my-books',
                element: <MyBooks />
            },
            {
                path: '/to-be-read',
                element: <ToBeRead />
            },
            {
                path: '/currently-reading',
                element: <CurrentlyReading />
            }
        ]
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);