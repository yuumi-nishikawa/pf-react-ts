
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './Articles.module.css';
import { fetchArticles } from '../../articlesSlice';
import Footer from '../../components/Footer';
import TopTitle from '../../components/TopTitle';


const Articles = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.articles.posts);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);


return (
  <div>
    <div className={Style.titleContainer}>
      <TopTitle>
        {posts.length === 0 ? 'まだ記録がありません' : '今までの記録'}
      </TopTitle>
    </div>
        <ul className={Style.boxContainer}>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/articles/post/${post.id}`}>
                <div  className={Style.box}>
                  <h3 className={Style.subTitle}>{post.postName}</h3>
                  <div>
                    <p className={Style.text}>{post.postDetail}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
    <Footer />
  </div>
  );
};

export default Articles;