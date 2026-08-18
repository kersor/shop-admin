import type { Category } from '@/scripts/types/categories';
import { columns } from './columns'
import { DataTable } from './DataTable'
import { categoriesApi } from '@/scripts/api/categories'
import { useQuery } from "@tanstack/react-query";

const PageProduct = () => {
  const {data} = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const data = await categoriesApi.getAll()
      return data
    }
  })

  return (
    <div>
        <DataTable columns={columns} data={data ?? []} />
    </div>
  )
}

export default PageProduct