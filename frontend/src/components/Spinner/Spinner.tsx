import React from 'react'
import { ColorRing } from 'react-loader-spinner'

import cn from 'classnames'
import { Props } from './Props'


export default function Spinner({className, ...props} : Props) {
  return (
   <div className={cn(className, 'flex justify-center h-[100vh] items-center')}>
     <ColorRing
    {...props}
    visible={true}
    height="200"
    width="200"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#9d5dd9', '#6738d6', '#7e1fd1', '#901fd1', '#bf1fd1']}
    />
   </div>
  )
}
