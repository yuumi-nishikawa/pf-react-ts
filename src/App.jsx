import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Top from './pages/Top';
import Articles from './pages/Articles';
import Post from './pages/Post';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Writing from './pages/Writing';
import { AuthProvider } from './context/AuthContext';
import Style from './App.module.css';
import MobileMenu from './components/MobileMenu';


const App = () => {

  return (
    <Router>
      <div className={Style.app}>
        <div className={Style.inner}>
          <header className={Style.header}>
            <h1 className={Style.title}>
              <Link to="/">Journaling Share</Link>
            </h1>
            <nav>
              <ul className={Style.nav}>
                <li className={Style.nav__item}>
                  <Link to="/signIn">ログイン</Link>
                </li>
                <li className={Style.nav__item}>
                    <Link to="/signUp">新規登録</Link>
                </li>
                <li className={Style.nav__item}>
                  <Link to="/writing">ジャーナリングしてみよう</Link>
                </li>
                <li className={Style.nav__item}>
                  <Link to="/articles">今までの記録</Link>
                </li>
              </ul>
            </nav>
            <MobileMenu />
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/articles" element={
            <AuthProvider>
              <Articles />
            </AuthProvider>
          } />
          <Route path="/articles/post/:id" element={
            <AuthProvider>
              <Post />
            </AuthProvider>
          } />
          <Route path="/signUp" element={
            <SignUp />
          } />
          <Route path="/signIn" element={
            <SignIn />
          } />
          <Route path="/writing" element={
          <AuthProvider>
            <Writing />
          </AuthProvider>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
