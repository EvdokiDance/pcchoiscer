import React from "react";

import styles from "./ModalContainer.module.css";

import cn from "classnames";

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function ModalContainer({ children, className, ...props }: Props) {

  return (
    <div className={cn(styles.modalContainer, className)} {...props}>
      {children}
    </div>
  );
}
