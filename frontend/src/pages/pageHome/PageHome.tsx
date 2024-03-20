
import { Link } from 'react-router-dom';
import styles from './PageHome.module.css';
import cn from 'classnames'
import Container from '../../components/Container/Container';


function PageHome({className} : any)  {
 

  return (
    <div className="">
      <Container>
        <div className='grid justify-items-center gap-5'>
          <h1 className="text-center">
              Pc Picker. Соберите свой компьютер при помощи ИИ. Сравнивайте и делитесь.
          </h1>
          <div className="flex gap-5 flex-wrap justify-center">
            <Link className={cn(styles.link, 'max-w-50 text-base')} to='/login'>Авторизироваться</Link> 
            <Link className={cn(styles.link, 'max-w-50 text-base')} to='/registration'>Зарегистрироваться</Link>
          </div>
          <img alt='' src='' className={styles.imgBuild}/>
        </div>
      </Container>
    </div>
  );
}

export default PageHome;
