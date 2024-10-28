import Link from 'next/link'
import classes from '../meals/page.module.css'
import MealsGrid from '../components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

export default async function MealsPage(){
   const meals = await getMeals();
   console.log("meals:::::::::" , meals);

    return (
        <> 
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{''}
                    <span className={classes.highlight}>by You</span>
                </h1>
                <p>Choose U r favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals}/>
            </main>
        </>
    )
}