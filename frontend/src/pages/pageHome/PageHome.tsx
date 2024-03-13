
import { Link } from 'react-router-dom';
import styles from './PageHome.module.css';
import cn from 'classnames'



function PageHome({className} : any)  {
 

  return (
    <div className={cn(className, styles.main)}>
      <h1 className={styles.header}>
        Pc Picker. Соберите свой компьютер при помощи ИИ. Сравнивайте и делитесь.
      </h1>
      <div className={styles.navWrapper}>
        <Link className={styles.link} to='/login'>Авторизироваться</Link> 
        <Link className={styles.link} to='/registration'>Зарегистрироваться</Link>
      </div>
    </div>
  );
}

export default PageHome;
