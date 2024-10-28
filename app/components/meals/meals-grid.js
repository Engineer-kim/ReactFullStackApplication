
import classes from '../../components/meals/meals-grid.module.css'
import MealItem from './meal-item'

export default function MealsGrid({meals}){
    console.log("meals1222222222222" ,meals)
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    {console.log(meal)}
                    <MealItem {...meal} />
                </li>
            ))}
    </ul>
    )
}