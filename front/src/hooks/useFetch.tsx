import  { useState, useEffect } from "react";
import  {PartType} from "../components/Part/Props";
import axios from "axios";





  const getData = async (path : string) => {
    const res = await axios.get('http://localhost:5000/api/'+`${path}`);
    return res.data;
   }


export const useFetch = (path : string) => {
  


    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect( () => {
          setIsPending(true);
          getData(path).then((data) => {
            setData(data);
          }).catch((error) => {
            setError(`${error} ошибка fetch ${process.env.REACT_APP_PUBLIC_URL}+${path}`);
          }).finally(() => {
            setIsPending(false);
          });

      }, [])
  
   return {data, isPending, error};
}