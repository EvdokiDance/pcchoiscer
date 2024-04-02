import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import styles from './LinkTag.module.css';
import background from '../../images/ym.png'

type Props = {
  className?: string; 
  children?: any;
  hardware?: 'videocards' | 'processors' | 'cases' | 'coolers' | 'hdd' | 'moutherboards' | 'power' | 'ram' | 'ssd',
  type?: string;
} & LinkProps;


export default function LinkTag({children, className, hardware, type, ...props} : Props) : JSX.Element {


  return (
    <Link {...props} className={cn(className, type === 'yandex' ? styles.yandex : styles.primary)} state={hardware}>{children}</Link>
  )
}
