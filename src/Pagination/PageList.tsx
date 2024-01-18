import React from 'react'
import { Pagination } from './Pagination'

export const PageList:React.FC = () => {

    const totalProduct = 5;

  return (
    <div>
        <Pagination totalPage={totalProduct} />
    </div>
  )
}
