import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = () => {
    return (
        <div>
            <h1>AppLayout page</h1>
            <Outlet />
        </div>
    )
}

export default AppLayout
