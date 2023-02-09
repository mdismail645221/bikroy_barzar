import { useState, useEffect } from 'react'


export const useBuyers = email => {
    const [isBuyer, setIsBuyer] = useEffect(false);
    // const [isSeller, setIsSeller] = useState(false);
    const [isAdminLoading, setIsAdmainLoading] = useState(true);


    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_HOST_LINK}/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("email", data)
                    setIsBuyer(data.role)
                    setIsAdmainLoading(false)
                    // setIsSeller(data.role)
                })
        }
    }, [email])

    return { isBuyer, isAdminLoading }
}