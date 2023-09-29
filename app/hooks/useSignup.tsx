import {useState} from 'react';

function signUp(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (url:string, method:string, data:any) => {
        setLoading(true);

        try{
            const response = await fetch(url, {
                method,
                headers:{
                    'Contect-Type' : 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok){
                throw new Error('Request failed');
            }
            setLoading(false);
            return await response.json();
        }
        catch(err:any){
            setLoading(false);
            setError(err.message);
        }
    };

    return {loading, error, sendRequest};
}

export default signUp