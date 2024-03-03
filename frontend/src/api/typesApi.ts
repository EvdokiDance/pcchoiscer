import { BuildType } from "../pages/PageBuild/PageBuildProps";

export type TSavedBuild = {
    id: number,
    build: BuildType[],
    fullPrice: number,
    date: Date
  }
  