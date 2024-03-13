
import Input from "../Input/Input";
import Button from "../Button/Button";
import { login } from "../../store/reducers/authReducer";
import styles from "./LoginForm.module.css";
import { useAppDispatch } from "../../hooks/useRedux";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {z} from 'zod'

import {zodResolver} from "@hookform/resolvers/zod"
import { Link } from "react-router-dom";

const signInSchema = z.object({
  email: z.string().email({message: 'Необходимо ввести почту'}),
  password: z.string().min(5, "Пароль должен быть не менее 5-ти символов"),
})


type TSignInSchema = z.infer<typeof signInSchema>;


export default function LoginForm() {

  const dispatch = useAppDispatch();

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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 style={{display: 'flex', justifyContent: "center"}}>Вход</h1>
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

      <Button type="submit" disabled={isSubmitting}>
        Войти
      </Button>
      <p className={styles.footer}>Нету аккаунта? <Link className={styles.link} to='/registration'>Зарегиструйтесь</Link></p>
    </form>
  );
}
