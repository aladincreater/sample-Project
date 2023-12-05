import { useAuth } from "./authContext";
import Index from "./components/grid/index";
import Login from "./components/login/login";

const Home = (): any => {
  const auth = useAuth();
  const logoutHandler = (): any => {
    auth.authenticate(false);
  };
  return (
    <>
      <div className="navBar">
        <h1>SAMPLE PROJECT</h1>
      </div>

      {auth.auth ? (
        <div>
          <button
            className="button-login button-logout"
            onClick={logoutHandler}
          >
            Logout
          </button>
          <Index></Index>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
