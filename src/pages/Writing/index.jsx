import Style from './Writing.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../../articlesSlice';
import Footer from '../../components/Footer';
import TopTitle from '../../components/TopTitle';
import Container from '../../components/Container';
import FormBox from '../../components/FormBox';
import FormContainer from '../../components/FormContainer';
import Button from '../../components/Button';

const Writing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const articleData = {
      postName: title,
      postDetail: content,
    };

    if (!title || !content) {
      alert('全ての項目を入力してください。');
      return;
    }

    try {
      const db = getFirestore();
      await setDoc(doc(db, 'articles', id), articleData);
      console.log('記事が投稿されました。');
      dispatch(fetchArticles());
      navigate('/articles');
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Container>
        <TopTitle title="ジャーナリングしてみよう" />
        <FormContainer
        onSubmit={handleSubmit}
        >
          <div className={Style.boxId}>
            <FormBox
            name="id"
            type="text"
            value={id}
            readOnly
            />
            <label
            className={Style.buttonId}
            onClick={() => setId(new Date().getTime().toString())}
            >ID生成</label>
          </div>
          <div>
            <h2 className={Style.titles}>タイトル</h2>
            <FormBox
            name="title"
            type="text"
            onChange={handleTitleChange}
            />
          </div>
          <div>
            <h2 className={Style.titles}>いま、どんな気持ち？</h2>
            <textarea
            className={Style.formBox}
            name="content"
            type="text"
            onChange={handleContentChange}
            />
          </div>
          <Button title="投稿する" />
        </FormContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default Writing;