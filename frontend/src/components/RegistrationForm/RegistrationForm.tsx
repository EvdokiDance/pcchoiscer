import Input from '../Input/Input';
import Button from '../Button/Button';
import { registration } from '../../store/reducers/authReducer';
import styles from './RegistrationForm.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link, useNavigate } from 'react-router-dom';


const signUpSchema = z.object({
  email: z.string().email('Необходимо ввести почту'),
  password: z.string().min(5, 'Пароль больше 5 символов'),
  confirmPassword: z.string()
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Пароль не совпадает",
  path: ["confirmPassword"]
})

type TSignUpSchema = z.infer<typeof signUpSchema>;

export default function RegistrationForm() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
      register,
      reset,
      formState: {errors, isSubmitting},
      handleSubmit,
      setError,
    } = useForm<TSignUpSchema>({
      resolver: zodResolver(signUpSchema),
    });



    const onSubmit = (data : TSignUpSchema) => {

      dispatch(registration({email: data.email, password: data.password})).then((res : any) => {
        if (res.meta.requestStatus === 'rejected') {
          setError("root", {message: res.error.message});
        } else {
          navigate('/build')
          reset();
        }
      });
      
    }



    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1 style={{display: 'flex', justifyContent: "center"}}>Регистрация</h1>
        <Input register={{...register('email')}} type='text' placeholder='Почта'/>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input register={{...register('password')}} type='password' placeholder='Пароль'/>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Input register={{...register('confirmPassword')}} type='password' placeholder='Подтвердите пароль'/>
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
        {errors.root && <ErrorMessage>{errors.root.message}</ErrorMessage>}
        <Button disabled={isSubmitting}>Зарегистрироваться</Button>
        <p className={styles.footer}>Есть аккаунт? <Link className={styles.link} to='/login'>Авторизируйтесь</Link></p>
    </form>
  )
}
