import { useState } from "react"

export const useDelete = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const deleteMeal = async (id: string) => {
        setSuccess(false)
        setLoading(true)

        const response = await fetch(`https://6852821e0594059b23cdd834.mockapi.io/Food/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            setSuccess(true)
            setLoading(false)
            setSuccess(false)
        } else {
            setLoading(false)
        }
    }

    return { loading, success, deleteMeal }
}