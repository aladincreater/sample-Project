import { useAuth } from "./authContext";
import Index from "./components/grid/index";
import Login from "./components/login/login";


const Home = (): any => {
  const auth = useAuth();
  return (
    <>
      <h1>SAMPLE PROJECT</h1>
      {auth.auth ?<Index></Index>: <Login /> }
    </>
  );
};

export default Home;
