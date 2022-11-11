import { useContext } from "react";
import UserContext from "data/UserContext";

const withUser = (WrappedComponent ) => {
  const WithUser = () => {
    const context = useContext(UserContext);
    const { email, isAdmin } = context;
    return <WrappedComponent email={email} isAdmin={isAdmin} />;
  };

  return WithUser;
};
export default withUser;