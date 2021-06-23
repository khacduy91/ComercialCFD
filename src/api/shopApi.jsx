import Api from "../core/Api"
import { domain } from "./config"

export default {
    category: () => {
        return Api.get('categories')
    },
    productList: () => {
        return Api.get('product')
    },
    page_productList: (page, id) => {
        return Api.get(`product?page=${page}&categories=${id}&categories=${id}`)
    },
    productDetail: (slug) => {
        return Api.get(`product?slug=${slug}`)
    },
    category_productList: (id) => {
        return Api.get(`product?&categories=${id}&categories=${id}`)
    },
    productList_TopRate: () => {
        return Api.get(`product?sort=rating_average.-1&page=1`)
    }
}

