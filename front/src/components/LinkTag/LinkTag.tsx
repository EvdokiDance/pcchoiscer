import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './LinkTag.module.css';
import background from '../../images/ym.png'

type Props = {
  className?: string; 
  children?: any;
  hardware?: 'videocards' | 'processors' | 'cases' | 'coolers' | 'hdd' | 'moutherboards' | 'power' | 'ram' | 'ssd',
  path: string;
  type?: string;
}


export default function LinkTag({children, path, className, hardware, type} : Props) : JSX.Element {


  

  const inlineStyle = type === 'yandex' ? {backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", height: 50, width: 50, borderRadius: '50%'} : {}


  return (
    <Link  to={path} style={inlineStyle} className={cn(className, styles.primary)} state={hardware}>{children}</Link>
  )
}
