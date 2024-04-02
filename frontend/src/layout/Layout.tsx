import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import cn from 'classnames'
import { Nav } from "./Nav/Nav";
import { useLocation } from "react-router-dom";

const Layout = ({ children, className }: LayoutProps): JSX.Element => {



  
  
  return (
    <div className={cn(styles.wrapper, className)}>   
        <Nav className={styles.nav} />
        <div className={styles.main}>
            <Header className={styles.header} />
            {children}
        </div>
    </div>
  );
};

export default Layout;
