
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import BuildJPG from './home.jpg'
import { Button } from '../../components';

 const PageHome = () =>  {
  return (
    <div>
      <Container>
        <div className='grid justify-items-center gap-5'>
          <h1 className="text-3xl text-center pt-2">
              Pc Picker. <br/> Соберите свой компьютер при помощи ИИ. <br/> Сравнивайте и делитесь.
          </h1>
          <div className="flex gap-5 flex-wrap justify-center">
            <Link to='/login'><Button className={'h-10'}>Авторизироваться</Button></Link>
            <Link to='/registration'><Button className={'h-10'}>Зарегистрироваться</Button></Link>
          </div>
          <img alt='imageBuild' src={BuildJPG} className='border-[var(--border-color)] border rounded-3xl h-3/4'/>
        </div>
      </Container>
    </div>
  );
}

export default PageHome;