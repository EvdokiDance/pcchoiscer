import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './LinkTag.module.css';

type Props = {
  className?: string; 
  children?: string | JSX.Element;
  path: string;
}


export default function LinkTag({children, path,className} : Props) : JSX.Element {
  return (
    <Link to={path} className={cn(className, styles.btn)}>{children}</Link>
  )
}
