
import type { Category, CategoryPagination } from "../types/categories"
import { api } from "./axios"

export const categoriesApi = {
    async getCatalog() {
        const { data } = await api.get<Category[]>('/categories/catalog')
        return data
    },
    
    async getAll(params?: any) {
        const { data } = await api.get<{data: Category[], pagination: CategoryPagination}>('/categories', { params })
        return data
    }
}