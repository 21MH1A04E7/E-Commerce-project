import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryProductOne() {
    const params=useParams()
  return (
    <div>{params?.categoryName}</div>
  )
}

export default CategoryProductOne