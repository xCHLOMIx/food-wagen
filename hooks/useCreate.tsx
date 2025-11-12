import { MealInterface } from "@/lib/types"
import { useState } from "react"

export const useCreate = ({ meal }: { meal: MealInterface }) => {
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [errors, setErrors] = useState<MealInterface>({
        name: "",
        avatar: "",
        rating: "",
        Price: "",
        id: "",
        logo: "",
        createdAt: "",
        open: false
    })

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async () => {
        const newErrors: MealInterface = { name: "", avatar: "", rating: "", Price: "", id: "", logo: "", createdAt: "", open: false }
        if (meal.name.length == 0) {
            newErrors.name = "Food name is required"
        }
        if (meal.avatar.length == 0) {
            newErrors.name = "Food avatar is required"
        }
        if (meal.rating.length == 0) {
            newErrors.name = "Food rating is required"
        }
        if (meal.Price.length == 0) {
            newErrors.name = "Food price is required"
        }
        if (meal.logo.length == 0) {
            newErrors.name = "Food logo is required"
        }

        setErrors(newErrors)

        if (!errors) {
            setLoading(true);
            try {
                const response = await fetch("https://6852821e0594059b23cdd834.mockapi.io/Food", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(meal)
                })
                
                if (response.ok) {
                    setLoading(false);
                    setSuccess(true)
                    setSuccess(false)
                }
            } catch (err: any) {
                setLoading(false);
                setError(err)
            }
        }
    }

    return {error, errors, handleSubmit, loading}
}