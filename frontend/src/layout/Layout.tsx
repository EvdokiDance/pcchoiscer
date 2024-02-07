import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import cn from 'classnames'

const Layout = ({ children, className }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Header className={styles.header} />
      <div className={styles.main}>{children}</div> 
    </div>
  );
};

export default Layout;
