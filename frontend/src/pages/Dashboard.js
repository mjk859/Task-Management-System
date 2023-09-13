import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken';

const  Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                window.location.href = '/'
            }
        }
    });

    return (
        <h1>Hello World</h1>
    )
}

export default Dashboard