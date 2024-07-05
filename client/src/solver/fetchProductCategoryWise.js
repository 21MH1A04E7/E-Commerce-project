import Api from '../common/url.js'
export const fetchCategoryWiseProduct=async(productCategory)=>{
    try{
        const response=await fetch(Api.CategroyWiseProduct.url,{
            method:Api.CategroyWiseProduct.method,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({productCategory})
        })
        const productData=await response.json()
        return productData
    }catch(err){
        console.log('err'+err)
    }
}