import React from 'react'

import cn from 'classnames';

type PCheckBox = {
    label?: string,
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function CheckBox({label, className, ...props} : PCheckBox) {
  return (
    <label className='cursor-pointer flex gap-2 text-right'>{label}
        <input {...props} type='checkbox' className={cn(className, 'cursor-pointer w-7 h-7 ')} />
    </label>
  )
}
