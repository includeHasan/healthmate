'use client'
// hooks/useAuth.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/user/getUser'); // Adjust the API route as needed
                if (res.success) {
                  setUser(res.data.user);
                }
                else{
                  setError("Some Thing went wrong !!");
                }
            } catch (err) {
                console.error(err);
                setError(err.response?.data?.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const logout = async () => {
        try {
            await axios.get('/user/logout');
            setUser(null);
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    return { user, loading, error, logout };
};

export default useAuth;
