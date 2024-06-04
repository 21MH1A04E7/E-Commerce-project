const  ImageTobase64= async (image)=>{
    const reader=new FileReader()//FileReader object is used to read the contents of files
    reader.readAsDataURL(image)//Reading the file

    const data=await new Promise((resolve,reject)=>{
        reader.onload=()=>{
            resolve(reader.result)
        }
        reader.onerror=(error)=>{
            reject(error)
        }
    })
    return data;
}

export default ImageTobase64