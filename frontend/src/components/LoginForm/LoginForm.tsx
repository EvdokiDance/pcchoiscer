
import Input from "../Input/Input";
import Button from "../Button/Button";
import { login } from "../../store/reducers/authReducer";
import styles from "./LoginForm.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {z} from 'zod'

import {zodResolver} from "@hookform/resolvers/zod"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const signInSchema = z.object({
  email: z.string().email({message: 'Необходимо ввести почту'}),
  password: z.string().min(5, "Пароль должен быть не менее 5-ти символов"),
})


type TSignInSchema = z.infer<typeof signInSchema>;





export default function LoginForm() {




  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  
  useEffect(() => {
    if (auth.isAuth) {
      navigate('/build', {replace: true});
    }
  }, [])


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: TSignInSchema) => {
    const res : any = await dispatch(login({email: data.email, password: data.password}))
    
    if (res.meta.requestStatus === 'rejected') {
      setError('root', {message: res.error.message})
      return;
    } 

    reset();

    if (location.state?.from) {
      navigate(location.state.from, {replace: true});
    } else {
      navigate('/build', {replace: true});
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className="p-2 text-2xl">Вход</h1>
      <Input
        register={{
          ...register("email")}}
        type="email"
        placeholder="Email"
      />

      {errors.email && <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>}

      <Input
        register={{
          ...register("password"),
        }}
        type="password"
        placeholder="Пароль"
      />

      
      {errors.password && (
        <ErrorMessage>{`${errors.password.message}`}</ErrorMessage>
      )}


      {errors.root && (
        <ErrorMessage>{`${errors.root.message}`}</ErrorMessage>
      )}

      <Button className="w-full" type="submit" disabled={isSubmitting}>
        Войти
      </Button>
      <p className={styles.footer}>Нету аккаунта? <Link className={styles.link} to='/registration' state={location.state?.from ? {from: location.state?.from} : ''}>Зарегиструйтесь</Link></p>
    </form>
  );
}
