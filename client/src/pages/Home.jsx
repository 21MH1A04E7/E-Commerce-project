import React from 'react'
import CategoryListProduct from '../Components/CategoryListProduct.jsx'
import BannerProduct from '../Components/BannerProduct.jsx'
import HorizontalProductCard from '../Components/HorizontalProductCard.jsx'
function Home() {
  return (
    <div className='mb-28'>
      <CategoryListProduct/>
      <BannerProduct/>
      <HorizontalProductCard productCategory={"airpods"} heading={"Top Airpods"}/>
      <HorizontalProductCard productCategory={"airpods"} heading={"Top Airpods"}/>
    </div>
  )
}

export default Home