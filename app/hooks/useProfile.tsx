import { getUserDetails } from "@/app/utilities/utils";
import { useEffect,useState } from "react";

interface UserData{
    username:string;
    email:string,
    password:string,
    org_type: string,
    phone_number: string,
    webiste:string,
}

const useGetUserDetails=()=>{
    const [details, setUserDetails]=useState<UserData[]>([]);

    useEffect(()=>{
      (async()=>{
        const details=await getUserDetails();
        setUserDetails(details);
      })();
    },[])
    return {details}
}
export default useGetUserDetails