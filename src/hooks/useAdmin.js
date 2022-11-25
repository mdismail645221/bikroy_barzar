import { useState, useEffect } from 'react'


export const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdmainLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_WEB_LINK}/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("email", data)
                    setIsAdmin(data.role)
                })
        }
    }, [email])

    return { isAdmin,isAdminLoading}
}