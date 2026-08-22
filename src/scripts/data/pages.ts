import type { PagesSidebar } from "./types";

export const PAGES_SIDEBAR: PagesSidebar[] = [
    {
        title: "Каталог",
        href: "/catalog",
        children: [
            {
                title: "Товары",
                href: "/products"
            },
            {
                title: "Категории",
                href: "/categories",
                params: {
                    page: 1
                }
            }
        ]
    },
    {
        title: "Люди",
        href: "/people",
        children: [
            {
                title: "Пользователи",
                href: "/users"
            },
            {    
                title: "Сотрудники",
                href: "/employees"
            }
        ]
    }
]