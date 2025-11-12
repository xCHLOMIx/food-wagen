import { MealInterface } from "@/lib/types"
import { useState } from "react"

export const useCreate = () => {
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    const [errors, setErrors] = useState<MealInterface>({
        name: "",
        avatar: "",
        rating: "",
        Price: "",
        id: "",
        logo: "",
        createdAt: "",
        open: ""
    })

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async ({ meal }: { meal: MealInterface }) => {
        setLoading(true);
        const newErrors: any = { name: "", avatar: "", rating: "", Price: "", id: "", logo: "", createdAt: "", open: "" }

        if (meal.name.trim().length == 0) {
            newErrors.name = "Food name is required"
        }
        if (meal.avatar.trim().length == 0) {
            newErrors.avatar = "Food avatar is required"
        }
        if (meal.rating.trim().length == 0) {
            newErrors.rating = "Food rating is required"
        }
        if (meal.Price.trim().length == 0) {
            newErrors.Price = "Food price is required"
        }
        if (meal.logo.trim().length == 0) {
            newErrors.logo = "Food logo is required"
        }
        if (meal.open == null) {
            newErrors.open = "Food status is required"
        }

        setErrors(newErrors)
        console.log(Object.values(errors).every((item) => item.length == 0))

        if (true) {
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
        } else {
            setLoading(false);
        }
    }

    return { error, errors, handleSubmit, loading }
}