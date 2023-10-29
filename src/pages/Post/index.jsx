import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Style from './Post.module.css';
import { useEffect } from 'react';
import { fetchById } from '../../articlesSlice';
import Container from '../../components/Container';
import TopTitle from '../../components/TopTitle';


const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.articles.postDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch,id]);

  if(!post){
    return <h2>投稿が見つかりません</h2>
  }

  return (
    <Container>
      <div className={Style.box}>
        <div className={Style.subTitle}>{post.postName}</div>
        <p className={Style.text}>{post.postDetail}</p>
      </div>
    </Container>
  );
};

export default Post;
