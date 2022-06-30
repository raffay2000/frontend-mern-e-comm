import React from 'react'
import { Navigate,Outlet} from 'react-router-dom'

const PrivateComponent = () => {
    const auth = localStorage.getItem('auth');
    const user = localStorage.getItem('user');

    return auth && user?<Outlet />:<Navigate to="/signup"/>
}

export default PrivateComponent
