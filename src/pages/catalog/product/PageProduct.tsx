import React from 'react'
import { columns, type Payment } from './columns'
import { DataTable } from './DataTable'

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

const PageProduct = () => {
  return (
    <div>
        <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PageProduct