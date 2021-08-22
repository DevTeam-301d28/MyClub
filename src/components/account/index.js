import { useAuth0, withAuth0 } from '@auth0/auth0-react';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
};
export default withAuth0( LoginButton );
