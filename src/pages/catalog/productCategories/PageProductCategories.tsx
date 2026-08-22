import type { Category, CategoryPagination } from '@/scripts/types/categories';
import { columns } from './columns'
import { DataTable } from './DataTable'
import { categoriesApi } from '@/scripts/api/categories'
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { debounce } from '@/lib/debounce';
import PageTitle from '@/components/ui/pageTitle';

export interface PageProductProps {
  page: number
  search: string
}

const PageProductCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const rowPageParam = Number(searchParams.get('page'))

  const pageParam = Number.isInteger(rowPageParam) && rowPageParam > 0 ? rowPageParam : 1
  const searchParam = searchParams.get("search") || ""

  const [search, setSearch] = useState('')

  const { data, isLoading } = useQuery<{data: Category[], pagination: CategoryPagination}>({
    queryKey: ['categories', { page: pageParam, search: searchParam }],
    queryFn: async () => {
      const data = await categoriesApi.getAll({ page: pageParam, search: searchParam })
      return data
    }
  })

  const handleSetSearch = (value: string) => {   
    setSearchParams((prev) => ({
      ...prev,
      search: value,
      page: 1
    }))
  }

  const debounseSearch = useMemo(() => debounce(handleSetSearch, 500), [setSearchParams])


  const handleSearch = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {   
    const value = e.target.value
    setSearch(value)
    debounseSearch(value)
  }

  return (
    <div className='h-full'>
      <PageTitle title='Категории' />
      <div className="flex items-center py-4">
        <Input
          onChange={handleSearch}
          placeholder="Поиск по названию и id родителя..."
          value={search}
        />
      </div>
      {
        !isLoading ? (
          <DataTable
            columns={columns}
            data={data?.data ?? []}
            pageParam={pageParam}
            setSearchParams={setSearchParams}
            totalPages={data?.pagination.totalPages ?? 0}
          /> 
        ) : (
          <div className='flex justify-center items-center w-full h-full'>
            <Spinner className='size-5'  />
          </div>
        )
      }      
    </div>
  )
}

export default PageProductCategories