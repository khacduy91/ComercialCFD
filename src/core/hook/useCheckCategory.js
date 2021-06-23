

import { useSelector } from 'react-redux'


export default function useCheckCategory(categories_Nr) {

    let categories = useSelector(state => state.shop.categories)
    let indexCategories = categories.findIndex((ele) => ele.id === categories_Nr)

    let categoriesName = categories[indexCategories]?.title
    let categoriesSlug = categories[indexCategories]?.slug
    return { categoriesName, categoriesSlug }
}