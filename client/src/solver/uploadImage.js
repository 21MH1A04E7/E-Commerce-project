
const url=`https://api.cloudinary.com/v1_1/daqpg7sa5/image/upload`
const uploadImage=async(image)=>{
    const formData=new FormData()
    formData.append('file',image)
    formData.append('upload_preset','zlglvwv3')
    
    const dataResponse=await fetch(url,{
        method:"post",
        body:formData,
        // headers:{
        //     "Content-Type":"application/x-www-form-urlencoded"
        // }
    })
    return dataResponse.json();
}
export default uploadImage