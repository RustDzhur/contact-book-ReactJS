import { useDispatch } from 'react-redux'
import { logOut } from 'redux/auth/operations';
import {LogOutBtn} from './LogOut.styled'

export const LogOut = () => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return <LogOutBtn to='/' onClick={handleLogOut}>Log out</LogOutBtn>
}