import { useEffect, useState } from "react";
import SocialButton from "./components/SocialButton";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./config/authMethods";
import socialMediaAuth from "./service/auth";
// Redux
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./config/firebase-config";
import firebase from "./config/firebase-config";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    console.log(user);
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        setIsUser(true);
      } else {
        dispatch(logout());
        setIsUser(false);
      }
    });
  }, [dispatch]);

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
  };

  const signout = () => {
    dispatch(logout());
    setIsUser(false);
    firebase.auth().signOut();
  };

  return (
    <ul className='app'>
      {isUser ? (
        <>
          <p>Hello {user.displayName}</p>
          <button className='logout' onClick={() => signout()}>
            <div className='buttonContent'>
              <i className='fas fa-sign-out-alt'></i>
              <span>logout</span>
            </div>
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </ul>
  );
}

export default App;
