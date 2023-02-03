import * as React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import * as styles from "./ui.css"

interface LoginButtonProps {
  text?: string,
  variant?: styles.ButtonVariants
}

const LoginButton: React.FC<LoginButtonProps> = ({text, variant = "primary"}) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();
  
  const handleLogin = async () => {
    await loginWithRedirect();
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
    {
      !isAuthenticated ? (
        <button onClick={handleLogin} className={styles.buttons[variant]}>{text || "Log in"}</button>
      ): (
        <button onClick={handleLogout} className={styles.buttons[variant]}>{"Log out"}</button>
      )
    }
    </>
  )
}

export default LoginButton
