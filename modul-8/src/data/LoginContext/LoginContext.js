import { createContext } from "react";

const LoginContext = createContext({
  authenticated: false,
  setAuthenticated: (auth) => {}
})

export default LoginContext;