import { useState,useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint,query) =>{
    const [data,setData ] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': YOUR API_KEY',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query},
        
      };



      const fetchJobData  = async () =>{
        setIsLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setIsLoading(false)

        } catch (error) {
             setError(error)
         }finally {
            setIsLoading(false)
        }
      }

      useEffect(() => {
         fetchJobData()
      }, [])

      const refetch = () =>{
        setIsLoading(true)
        fetchJobData()
      }
      

      return {data,isLoading,error,refetch};
}


export default useFetch
