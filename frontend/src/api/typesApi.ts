import { BuildType } from '../pages/pageBuild/PageBuildProps';





export type TSavedBuild = {
    id: number,
    build: BuildType[],
    fullPrice: number,
    date: Date
  }
  