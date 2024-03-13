import axios from "axios";
import { BuildType } from "../pages/PageBuild/PageBuildProps";
import { TSavedBuild } from "./typesApi";

import $api from "./api-interceptor";


export const getData = async (path : string) => {
    const res = await $api.get('/build/'+`${path}`);
    return res.data;
   }

export const saveBuild = async (build: any, fullPrice : number, userId : string) => {


   $api.post('/build', {build: build, fullPrice: fullPrice, userId: userId})

}


export const getBuildById = async (id: number | string) => {
   const res = await $api.get(`/saved-builds/${id}`);
   return res.data
}

export const getAllBuilds = async () => {
   const res = await $api.get(`/all-builds`);
   return res.data
}





export const getSavedBuilds = async (userId: string) => {
      const res = await $api.post<TSavedBuild[]>('/saved-builds', {userId: userId});
      return res.data
}



