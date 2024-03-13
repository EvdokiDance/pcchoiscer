import { NavProps } from "./Nav.props";
import styles from "./Nav.module.css";
import cn from 'classnames';
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { LinkTag } from "../../components";
import NavItem from "./NavItem/NavItem";
import GridViewIcon from '@mui/icons-material/GridView';
import HardwareIcon from '@mui/icons-material/Hardware';

export const Nav = ({ className, ...props }: NavProps): JSX.Element => {
  return <div className={cn(styles.nav, className)}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" width={50} height={50}/>
        <h1 className={styles.title}>Pc Picker</h1>
      </header>
      <nav className={styles.navContainer}>
        <NavItem className={styles.navItem} to={'build'}><HardwareIcon sx={{fontSize: 25, color: `#6323a5`}}/>Сборка</NavItem>
        <NavItem className={styles.navItem} to={'saved-builds'}><GridViewIcon sx={{fontSize: 25, color: `#6323a5`}}/>Мои сборки</NavItem>
        <NavItem className={styles.navItem} to={'all-builds'}><GridViewIcon sx={{fontSize: 25, color: `#6323a5`}}/>Все сборки</NavItem>
      </nav>
  </div>
};
