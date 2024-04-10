
import cn from 'classnames'


type TContainer = {

} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Container({children, className, ...props} : TContainer) {
    return (
      <div {...props} className={cn('container my-0 mx-auto px-2', className)}>{children}</div>
    )
  }