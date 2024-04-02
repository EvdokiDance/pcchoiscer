import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from 'classnames';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { logout } from "../../store/reducers/authReducer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import NavItem from "../Nav/NavItem/NavItem";
// import { RootState } from "../../store/store";
import GridViewIcon from '@mui/icons-material/GridView';
import HardwareIcon from '@mui/icons-material/Hardware';
import ModalContainer from "../../components/Modal/ModalContainer/ModalContainer";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

  const headerName = useAppSelector((state) => state.header.headerName);
  const navigate = useNavigate();


  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    
    localStorage.removeItem('build');


    const script = document.querySelector('[data-id="clpk1eqwb0001l30f2f68701q"]');
    const chatUi = document.querySelector('#live-chat-ai-wrapper');

    
    if (script) {
      window.lc = null;
      document.head.removeChild(script);
      document.body.removeChild(chatUi);
    }

  }



  return <div className={cn(className, styles.headerWrapp)} {...props}>
            <h1 className={cn(styles.header, 'text-3xl')}>{headerName}</h1>
            <NavItem to='/' replace onClick={handleLogout} className={cn(styles.logout)}><LogoutRoundedIcon sx={{color: '#6323A5'}}/> Выйти</NavItem>
            <Modal className={styles.modal}>
              <ModalContainer className={styles.modalContainer}>
                {location.pathname !== '/admin' ? 
                <>
                <NavItem to='build'><HardwareIcon sx={{fontSize: 25, color: `#6323a5`}}/>Сборка</NavItem>
                <NavItem to='saved-builds'><GridViewIcon sx={{fontSize: 25, color: `#6323a5`}}/>Мои сборки</NavItem>
                <NavItem to='all-builds'><GridViewIcon sx={{fontSize: 25, color: `#6323a5`}}/>Все сборки</NavItem>
                </> : 
                <NavItem to='articles'><HardwareIcon sx={{fontSize: 25, color: `#6323a5`}}/>Статьи</NavItem>}
                <NavItem to='/' replace onClick={handleLogout} ><LogoutRoundedIcon sx={{color: '#6323A5'}}/> Выйти</NavItem> 
              </ModalContainer>
            </Modal>
          </div>;
};
