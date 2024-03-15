import {useNavigate} from "react-router-dom";
import {useState} from "react";
export const Home = ({socket}) => {

    const nav = useNavigate()
    const [user, setUser] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', user);
        socket.emit('newUser', {user, socketID: socket.id});
        nav('/chatPage')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Вход в чат</h2>
            <label htmlFor="user"></label>
            <input type="text" id='user'
                   value={user}
                   onChange={(e) => setUser(e.target.value)
                   }/>
            <button type='submit'>Enter</button>
        </form>
    )
}
