import { userDetails } from "../../../backend/controllers/userDetails";
import UploadProduct from "../Components/UploadProduct";
import SearchProduct from "../pages/SearchProduct";

const backendDomin="http://localhost:8000/api"

const Api={
    signUp:{
        url:`${backendDomin}/auth/signup`,
        method:"POST"
    },
    login:{
        url:`${backendDomin}/auth/login`,
        method:"POST"
    },
    userDetails:{
        url:`${backendDomin}/auth/user-details`,
        method:"GET"
    },
    logout:{
        url:`${backendDomin}/auth/logout`,
        method:"POST"
    },
    GetAlluser:{
        url:`${backendDomin}/user/all-user`,
        method:"GET"
    },
    UpdateUserByAdmine:{
        url:`${backendDomin}/user/update-user`,
        method:"POST"
    },
    UploadProductByAdmine:{
        url:`${backendDomin}/product/upload-product`,
        method:"POST"
    },
    getAllProduct:{
        url:`${backendDomin}/product/get-product`,
        method:"GET"
    },
    UpdateProduct:{
        url:`${backendDomin}/product/update-product`,
        method:"POST"
    },
    DeleteProduct:{
        url:`${backendDomin}/product/delete-prodcut`,
        method:"POST"
    },
    CategoryProduct:{
        url:`${backendDomin}/product/get-product-by-category`,
        method:"GET"
    },
    CategroyWiseProduct:{
        url:`${backendDomin}/product/get-category-wise-product`,
        method:"POST"
    },
    GetProductDetails:{
        url:`${backendDomin}/product/get-product-details`,
        method:"POST"
    },
    AddToCartProduct:{
        url:`${backendDomin}/Card/add-tocard`,
        method:"POST"
    },
    GetProuductCount:{
        url:`${backendDomin}/Card/get-product-count`,
        method:"GET"
    },
    GetCartProductView:{
        url:`${backendDomin}/Card/view-card-product`,
        method:"GET"
    },
    UpdateAddToCartProduct:{
        url:`${backendDomin}/Card/update-card-product`,
        method:"POST"
    },
    DeleteProductFromCard:{
        url:`${backendDomin}/Card/delete-card-product`,
        method:"POST"
    },
    SearchProduct:{
        url:`${backendDomin}/product/search`,
        method:"GET"
    },
    filterProduct:{
        url:`${backendDomin}/product/filter-product`,
        method:"POST"
    }
}

export default Api;