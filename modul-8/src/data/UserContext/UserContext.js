import { createContext } from "react";

const UserContext = createContext({
  email: "bartlomiej@smolucha.pl",
  isAdmin: false,
})

export default UserContext;