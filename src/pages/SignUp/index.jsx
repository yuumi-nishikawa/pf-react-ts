import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignTitle from '../../components/TopTitle';
import SignButton from '../../components/Button';
import Container from '../../components/Container';
import FormLabel from '../../components/FormLabel';
import FormBox from '../../components/FormBox';
import FormContainer from '../../components/FormContainer';


const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('新規登録ボタンが押されました。');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log('新規ユーザーが登録されました。',user);
      navigate('/');
    }
    catch (error) {
      console.error(error);
      if (!email || !password) {
        alert('全ての項目を入力してください。');
      }
      else if (error.code === 'auth/email-already-in-use') {
        alert('このメールアドレスは既に登録されています。');
      }
      else if (error.code === 'auth/invalid-email') {
        alert('メールアドレスの形式が正しくありません。');
      }
      else if (error.code === 'auth/weak-password') {
        alert('パスワードは6文字以上で入力してください。');
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
      <SignTitle
      title="新規登録"
      />
      <FormContainer
      onSubmit={handleSubmit}
      >
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
        <SignButton
        title="登録"
        />
      </FormContainer>
    </Container>
  );
};

export default SignUp;
