import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import { Home } from '../pages/index'

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])
