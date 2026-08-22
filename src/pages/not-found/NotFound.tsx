import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { SearchX } from "lucide-react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <SearchX />
                </EmptyMedia>
                <EmptyTitle>404</EmptyTitle>
                <EmptyDescription>
                    Такой страницы нe существует. <br/>
                    Одно из двух: или она в разработке, или в ссылке опечатка.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center gap-2">
                <Button size="sm">
                    <Link to="/">Главная</Link>
                </Button>
            </EmptyContent>
        </Empty>
    )
}

export default NotFound