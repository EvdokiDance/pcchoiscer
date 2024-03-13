import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useAppSelector } from "../../hooks/useRedux";
import { Navigate } from "react-router-dom";
import FormWrapper from "../../components/FormWrapper/FormWrapper";

import styles from "./PageRegistration.module.css";

export default function PageRegistration() {
  return (
    <div className={styles.page}>
      <FormWrapper>
        <RegistrationForm />
      </FormWrapper>
    </div>
  );
}
