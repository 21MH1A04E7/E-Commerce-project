const backendDomin="http://localhost:8000/api"

const Api={
    signUp:{
        url:`${backendDomin}/auth/signup`,
        method:"POST"
    },
    login:{
        url:`${backendDomin}/auth/login`,
        method:"POST"
    }
}

export default Api;