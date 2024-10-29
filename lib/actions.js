'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"

function isInvalideText(text) {
    return !text || text.trim() === '';
}

export default async function shareMeal(prevStatus ,formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (isInvalideText(meal.title) 
        || isInvalideText(meal.summary) 
        || isInvalideText(meal.instructions)
        || isInvalideText(meal.image)
        || isInvalideText(meal.creator)
        || isInvalideText(meal.creator_email)
        || !meal.creator_email.include('@')
        || !meal.image
        || meal.image.size === 0
    ){
        return{
            message: 'Invalid Input'
        }
    }

        await saveMeal(meal);
    redirect("/meals")
}