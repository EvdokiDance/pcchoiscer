import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import cn from 'classnames'
import { Nav } from "./Nav/Nav";
import { useLocation } from "react-router-dom";

const Layout = ({ children, className }: LayoutProps): JSX.Element => {

  console.log(className);
  
  const location = useLocation();


  
  
  return (
    <div className={cn(styles.wrapper, className)}>   
      {location.pathname !== '/' && location.pathname !== "/login" && location.pathname !== '/registration'? 
      <>
        <Nav className={styles.nav} />
        <div className={styles.main}>
            <Header className={styles.header} />
            {children}
        </div>
      </> : <div className={styles.home}>{children}</div>
       }
    </div>
  );
};

export default Layout;
