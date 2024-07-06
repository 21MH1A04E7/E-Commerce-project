import Api from '../common/url.js'
import { toast } from 'react-toastify'

export const handleAddToCart=async(e,id)=>{
    e?.stopPropagation()
    e?.preventDefault()
    const response=await fetch(Api.AddToCartProduct.url,{
        method:Api.AddToCartProduct.method,
        credentials : 'include',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify( { productId : id })
    })
    const data=await response.json()
    if(data.success){
        toast.success(data.message)
    }else{
        toast.error('Failed to add product to cart')
        toast.info(data.message)
    }
    return data
}