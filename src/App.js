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
        buttonClass='facebook'
        iconType='fab'
        iconName='fa-facebook-f'
      />
      <SocialButton
        name='Google'
        provider={googleProvider}
        handleOnClick={handleOnClick}
        buttonClass='google'
        iconType='fab'
        iconName='fa-google-plus-g'
      />
      <SocialButton
        name='Github'
        provider={githubProvider}
        handleOnClick={handleOnClick}
        buttonClass='github'
        iconType='fab'
        iconName='fa-github'
      />
    </ul>
  );
}

export default App;
