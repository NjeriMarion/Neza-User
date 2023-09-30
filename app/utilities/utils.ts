
export const getUserDetails= async()=>{
    const url ='api/profile'
    try{
        const response = await fetch(url)
        const result = await response.json();
        return result;
    }
    catch(error:any){
        return error.message
    }
}