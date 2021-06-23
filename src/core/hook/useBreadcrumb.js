

import { Breadcrumb } from 'antd'
import { useSelector } from 'react-redux'



export default function useBreadcrumb(routerMatch) {
    let productDetail = useSelector(state => state.shop.productDetail)
    let categories = useSelector(state => state.shop.categories)
    let breadcrumb = []
    let title
    let arrBreadcrumb = routerMatch.url.split('/').map((ele, index, arrBreadcrumb) => (
        arrBreadcrumb[index] = arrBreadcrumb[index - 1] + arrBreadcrumb[index] + "/"
    ))


    let breadcrumb_url = arrBreadcrumb.map((ele) => (ele.replace("undefined", "")))

    let breadcrumb_title = routerMatch.url.split("/")
    breadcrumb_title[0] = "home"





    if (breadcrumb_title[breadcrumb_title.length - 2] === "detail") {
        breadcrumb_title[breadcrumb_title.length - 1] = productDetail.name
        let categoryID = productDetail.categories
        let indexCategories = categories.findIndex((ele) => ele.id === categoryID)
        breadcrumb_title[breadcrumb_title.length - 2] = categories[indexCategories]?.title
        breadcrumb_url[breadcrumb_title.length - 2] = `/shop/category/${categories[indexCategories]?.slug}/`

        breadcrumb_title.splice(1, 1)
        breadcrumb_url.splice(1, 1)
        breadcrumb_title.forEach((ele, index) => breadcrumb.push({ name: breadcrumb_title[index], url: breadcrumb_url[index] }))

        title = "Sản Phẩm"
    }

    if (breadcrumb_title[breadcrumb_title.length - 2] === "category") {
        const categoryID = parseInt(routerMatch.url.split('-').pop().replace("id", ""), 10);
        let indexCategories = categories.findIndex((ele) => ele.id === categoryID)
        breadcrumb_title[breadcrumb_title.length - 1] = categories[indexCategories]?.title

        //Slice
        breadcrumb_title.splice(1, 2)
        breadcrumb_url.splice(1, 2)
        breadcrumb_title.forEach((ele, index) => breadcrumb.push({ name: breadcrumb_title[index], url: breadcrumb_url[index] }))

        title = breadcrumb_title[breadcrumb_title.length - 1]
    }

    if (breadcrumb_title[1] === "cart") {
        breadcrumb_title.forEach((ele, index) => breadcrumb.push({ name: breadcrumb_title[index], url: breadcrumb_url[index] }))
        title = breadcrumb_title[1]
    }

    if (breadcrumb_title[1] === "auth") {
        breadcrumb_title.forEach((ele, index) => breadcrumb.push({ name: breadcrumb_title[index], url: breadcrumb_url[index] }))
        title = breadcrumb_title[1]
    }

    if (breadcrumb_title[1] === "check-out") {
        breadcrumb_title.forEach((ele, index) => breadcrumb.push({ name: breadcrumb_title[index], url: breadcrumb_url[index] }))
        title = breadcrumb_title[1].replace("-", " ")
    }

    if (breadcrumb_title[1] === "my-account") {
        breadcrumb_title.forEach((ele, index) => breadcrumb.push({ name: breadcrumb_title[index], url: breadcrumb_url[index] }))
        title = breadcrumb_title[1].replace("-", " ")
    }


    return { breadcrumb, title }
}