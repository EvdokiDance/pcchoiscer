import cn from 'classnames';

import  {ReactComponent as LogoComponent} from '../../assets/logo.svg'
import React from 'react';


type Props = React.SVGProps<SVGSVGElement>;


export const Logo: React.FC<Props> = ({...props}) => {
  return (
    <LogoComponent {...props}/>
  )
}


