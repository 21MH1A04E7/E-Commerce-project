import { userDetails } from "../../../backend/controllers/userDetails";
import UploadProduct from "../Components/UploadProduct";

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
    }
}

export default Api;