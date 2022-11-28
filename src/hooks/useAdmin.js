import { useState, useEffect } from 'react'


export const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdmainLoading] = useState(false);

    useEffect(() => {
        setIsAdmainLoading(true)
        if (email) {
            fetch(`${process.env.REACT_APP_WEB_LINK}/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("email", data)
                    setIsAdmin(data.role)
                    setIsAdmainLoading(false)
                })
        }
    }, [email])

    return { isAdmin,isAdminLoading}
}