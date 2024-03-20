import { PartType } from "../../Part/Props";
import { BuildType } from "../../../pages/PageBuild/PageBuildProps";

export interface Props  {
    buildItem: BuildType,
    className?: string,
    handleTotalPrice?: (price : any) => void,
    handleDeleteItem?: (category: string, index : any) => void,
}