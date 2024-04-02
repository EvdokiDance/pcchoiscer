import axios from "axios";
import { BuildType } from "../pages/PageBuild/PageBuildProps";
import { TSavedBuild } from "./typesApi";
import { ArticleType } from "../components/AdminArticleItem/AdminArticle";



import $api from "./api-interceptor";
import { PartType } from "../components/Part/Props";


export const getData = async (path : string) : Promise<PartType[]> => {
    try {
      const res = await $api.get('/build/'+`${path}`);
      return res.data;
    } catch (error) {
      return error;
    }
   }

export const saveBuild = async (build: any, fullPrice : number, userId : string) => {
   try {
      const res = $api.post('/build', {build: build, fullPrice: fullPrice, userId: userId})
      return res;
   } catch (error) {
      return error;
   }
}




export const getBuildById = async (id: number | string) => {
   try {
      const res = await $api.get(`/saved-builds/${id}`);
      return res.data
   } catch (error) {
      return error;
   }
}

export const getAllBuilds = async () => {
   try {
      const res = await $api.get(`/all-builds`);
      return res.data;
   } catch (error) {
      return error;
   }
}


export const getSavedBuilds = async (userId: string) => {
      try {
         const res = await $api.post<TSavedBuild[]>('/saved-builds', {userId: userId});
         return res.data
      } catch (error) {
         return error;
      }
}


export const createPartnerArticle = async (partnerArticle: Omit<ArticleType, 'id'>) => {

     try {
         const res = await $api.post<ArticleType>('admin/partner-article/create', partnerArticle)
         return res.data;
     } catch (error) {
         return error;
     }
}


export const getAllPartnerArticles = async () : Promise<ArticleType[]> => {
      try {
         const res = await $api.get<ArticleType[]>('admin/partner-acticles');      
         return res.data;
      } catch (error) {
         return error;
      }
}


export const getPartnerArticle = async (id) => {
   try {
      const res = await $api.get<ArticleType>(`admin/partner-acticle/${id}`);
      
      return res.data;
   } catch (error) {
      return Promise.reject(error);
   }
}



export const updatePartnerArticle = async (partnerArticle: ArticleType) => {
   try {
       const res = await $api.post<ArticleType>(`admin/partner-acticle/edit/${partnerArticle.id}`, partnerArticle)       
       return res.data;
   } catch (error) {      
      return Promise.reject(error);
   }
}

export const deletePartnerArticle = async (id) => {
   try {
       const res = await $api.post<ArticleType>(`admin/partner-article/delete/${id}`)
       return res.data;
   } catch (error) {
       return error;
   }
}



