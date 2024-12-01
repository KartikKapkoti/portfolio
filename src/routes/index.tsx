import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import HomePage from '../pages/Home'

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/home-page',
                element: <HomePage/>,
            },
        ],
    },
])
