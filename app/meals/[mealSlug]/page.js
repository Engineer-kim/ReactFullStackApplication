import { getMeal } from '@/lib/meals'
import clasess from '../[mealSlug]/page.module.css'
import Image from 'next/image'

export default function MealsDetailPage({ params }) {
    const meal = getMeal(params.mealSlug)
    meal.instructions = meal.instructions.replace(/\n/g  ,'<br />')
    return <>
        <header className={clasess.header}>
            <div className={clasess.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>
            <div className={clasess.headerText}>
                <h1>{meal.title}</h1>
                <p className={clasess.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={clasess.summary}>
                    {meal.summary}
                </p>
            </div>
        </header>
        <main>
            <p className={clasess.instructions} dangerouslySetInnerHTML={{
                __html: meal.instructions,
            }}></p>
        </main>
    </>
}