import React from 'react'
import { ColorRing } from 'react-loader-spinner'


import { Props } from './Props'


export default function Spinner({className, ...props} : Props) {
  return (
   <div className={className}>
     <ColorRing
    {...props}
    visible={true}
    height="200"
    width="200"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
   </div>
  )
}
