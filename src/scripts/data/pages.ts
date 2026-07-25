export const PAGES_SIDEBAR = {
    catalog: {
        title: "Каталог",
        href: "/catalog",
        children: {
            products: {
                title: "Товары",
                href: "/catalog/products"
            },
            categories: {
                title: "Категории",
                href: "/catalog/categories"
            }
        }
    },
    people: {
        title: "Люди",
        href: "/people",
        children: {
            users: {
                title: "Пользователи",
                href: "/people/users"
            },
            employees: {    
                title: "Сотрудники",
                href: "/people/employees"
            }
        }
    }
}