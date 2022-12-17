import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import './styles/App.css';
import { SignIn } from 'components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { ContactBook } from 'components/ContactBook/ContactBook';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {Spinner} from 'loader/spinner'

export function App() {
  const dispatch = useDispatch()
  const {isRefreshing, isLoggedIn} = useAuth()
  useEffect (() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (<Spinner/>) :(
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contacts" element={isLoggedIn && !isRefreshing ? <ContactBook /> : <SignIn />} />
      </Route>
    </Routes>
  );
}
