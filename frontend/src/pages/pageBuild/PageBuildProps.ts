

import { PartType } from "../../components/Part/Props"




export type BuildType = {
      'category': string,
      'name': string, 
      'components': PartType[],
      'isDisabled': boolean,
      'isHidden': boolean,
  }