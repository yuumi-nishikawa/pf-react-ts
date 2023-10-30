import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import TopTitle from '../../components/TopTitle';
import Button from '../../components/Button';
import Container from '../../components/Container';
import FormLabel from '../../components/FormLabel';
import FormBox from '../../components/FormBox';
import FormContainer from "../../components/FormContainer";


const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('ログインボタンが押されました。');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('ログインしました。', user);
      navigate('/writing');
    }
    catch (error) {
      console.error(error);
      if (!email || !password) {
        alert('全ての項目を入力してください。');
      }
      else if (error.code === 'auth/invalid-email') {
        alert('メールアドレスの形式が正しくありません。');
      }
      else if (error.code === 'auth/user-not-found') {
        alert('ユーザーが見つかりません。');
      }
      else if (error.code === 'auth/wrong-password') {
        alert('パスワードが間違っています。');
      }
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <Container>
      <TopTitle title="ログイン"/>

      <FormContainer
      onSubmit={handleSubmit}>

          <FormLabel title="メールアドレス" />
          <FormBox
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChangeEmail}
          value={email}
          />
          <FormLabel title="パスワード" />
          <FormBox
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChangePassword}
          value={password}
          />

        <Button
        title="ログイン"
        />
      </FormContainer>
    </Container>
  )
}

export default SignIn;