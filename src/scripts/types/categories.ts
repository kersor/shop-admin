export interface Category {
    id: string
    name: string
    slug: string
    children?: Category[]
}

export interface CategoryPagination {
    page: number
    pageSize: number
    total: number
    totalPages: number
}