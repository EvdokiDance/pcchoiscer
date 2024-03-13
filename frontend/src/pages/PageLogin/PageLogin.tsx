import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useAppSelector } from '../../hooks/useRedux'
import { Navigate } from 'react-router-dom'
import FormWrapper from '../../components/FormWrapper/FormWrapper'

import styles from './PageLogin.module.css'

export default function PageLogin() {


  const isAuth = useAppSelector(state => state.auth.isAuth)



  if (isAuth) {
    return <Navigate to={'/build'} replace/>
  }

  return (
    <div className={styles.page}>
        <FormWrapper>
          <LoginForm/>
        </FormWrapper>
    </div>
  )
}
