import React from 'react';
import { createRoot } from 'react-dom/client';
import { 
    createBrowserRouter, 
    RouterProvider
} from 'react-router-dom';
import App from './App';
import MyBooks from './components/MyBooks';
import ToBeRead from './components/ToBeRead';
import CurrentlyReading from './components/CurrentlyReading';

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