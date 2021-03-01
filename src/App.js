import "./App.css";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./config/authMethods";
import socialMediaAuth from "./service/auth";

function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className='app'>
      <button onClick={() => handleOnClick(facebookProvider)}>Facebook</button>
      <button onClick={() => handleOnClick(githubProvider)}>Github</button>
      <button onClick={() => handleOnClick(googleProvider)}>Google</button>
    </div>
  );
}

export default App;
