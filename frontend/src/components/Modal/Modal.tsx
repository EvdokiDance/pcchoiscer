import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import cn from "classnames";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

type PModal = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function Modal({ children, className, ...props }: PModal) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal
      ? document.body.classList.add(styles["modalOpen"])
      : document.body.classList.remove(styles["modalOpen"]);
  }, [showModal]);

  return (
    <div className={cn(className)}>
      <MenuRoundedIcon className={styles.modalIcon} sx={{cursor: 'pointer', fontSize: '36px'}} onClick={() => setShowModal(true)}/>
      {showModal &&
        createPortal(
          <div
            {...props}
            className={cn(styles.modal)}
            onClick={() => setShowModal(false)}
          >
           {children}
          </div>,
          document.body
        )}
    </div>
  );
}
