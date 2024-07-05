import React from 'react'
import CategoryListProduct from '../Components/CategoryListProduct.jsx'
import BannerProduct from '../Components/BannerProduct.jsx'
import HorizontalProductCard from '../Components/HorizontalProductCard.jsx'
import VerticalProductCard from '../Components/VerticalProductCard.jsx'
function Home() {
  return (
    <div className='mb-28'>
      <CategoryListProduct/>
      <BannerProduct/>
      <HorizontalProductCard productCategory={"airpods"} heading={"Top Airpods"}/>
      <HorizontalProductCard productCategory={"watches"} heading={"Top Wathes"}/>
      <VerticalProductCard productCategory={"mobiles"} heading={"Top Mobiles"}/>
      <VerticalProductCard productCategory={"mouse"} heading={"Top Mouse"}/>
      <VerticalProductCard productCategory={"refrigerator"} heading={"Top Refrigerator"}/>
      <VerticalProductCard productCategory={"earphones"} heading={"Top Earphones"}/>
      <VerticalProductCard productCategory={"processor"} heading={"Top Processor"}/>
    </div>
  )
}

export default Home