import axios from "axios";
import { BuildType } from "../pages/PageBuild/PageBuildProps";
import { TSavedBuild } from "./typesApi";



export const getData = async (path : string) => {
    const res = await axios.get('http://localhost:5000/api/build/'+`${path}`);
    return res.data;
   }

export const saveBuild = async (build: BuildType[], fullPrice : number) => {
   const res = await axios.post('http://localhost:5000/api/build', {build: build, fullPrice: fullPrice})
}


export const getBuildById = async (id: number | string) => {
   const res = await axios.get(`http://localhost:5000/api/saved-builds/${id}`);
   return res.data
}





export const getSavedBuilds = async () => {
   const res = await axios.get<TSavedBuild[]>('http://localhost:5000/api/saved-builds');
   return res.data
}



