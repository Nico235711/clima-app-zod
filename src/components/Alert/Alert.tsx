import { ReactNode } from "react"
import styles from './Alert.module.css'

type AlertProps = {
  children: ReactNode
}

const Alert = ({ children }: AlertProps) => {
  
  return (
    <p className={styles.alert}>{children}</p>
  )
}

export default Alert