import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from 'classnames';
import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/useRedux";
// import { RootState } from "../../store/store";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

  const headerName = useAppSelector((state) => state.header.headerName);


  return <div className={cn(className, styles.headerWrapp)} {...props}>
      <h1 className={cn(styles.header)}>{headerName}</h1>
      <div className={cn(styles.profile)}>Профиль</div>
  </div>;
};
