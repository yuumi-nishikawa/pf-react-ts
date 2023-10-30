import Style from './Footer.module.css';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('ログアウトしました。');
      navigate('/signIn');
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={Style.footer}>
      <button
      className={Style.logOut}
      onClick={handleSignOut}
      >
        ログアウト
      </button>
    </div>
  );
}


export default Header;