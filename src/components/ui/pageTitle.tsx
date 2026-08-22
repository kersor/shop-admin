import React from 'react'

interface Props {
    title: string
}

const PageTitle = ({
    title
}: Props) => {
  return (
    <h1 className='text-xl font-bold'>{title}</h1>
  )
}

export default PageTitle