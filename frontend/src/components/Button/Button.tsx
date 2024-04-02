
import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps';



export default function Button({children, className, ...props} : ButtonProps) : JSX.Element {
  return (
    <button {...props} className={cn(styles.primary, className, 'bg-auto')}>{children}</button>
  )
}
