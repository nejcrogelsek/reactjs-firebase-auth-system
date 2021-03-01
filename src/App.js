import SocialButton from "./components/SocialButton";
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
    <ul className='app'>
      <SocialButton
        name='Facebook'
        provider={facebookProvider}
        handleOnClick={handleOnClick}
      />
      <SocialButton
        name='Google'
        provider={googleProvider}
        handleOnClick={handleOnClick}
      />
      <SocialButton
        name='Github'
        provider={githubProvider}
        handleOnClick={handleOnClick}
      />
    </ul>
  );
}

export default App;
