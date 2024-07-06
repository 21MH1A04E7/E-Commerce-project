import React ,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import Api from '../common/url.js'

function SearchProduct() {
    const query = useLocation()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    console.log("query",query.search)

    const fetchProduct = async()=>{
        setLoading(true)
        const response = await fetch(Api.SearchProduct.url+query.search)
        const dataResponse = await response.json()
        setLoading(false)

        // console.log(dataResponse)
        setData(dataResponse.data)
    }

    useEffect(()=>{
        fetchProduct()
    },[query])
  return (
    <div>SearchProduct</div>
  )
}

export default SearchProduct