import React,{useContext, useState} from "react";
import {LOGIN} from "../../constants/reducerConstants";
import {Context} from "../../store";
import {useHistory, Link } from 'react-router-dom';
import axios from 'axios'


const initialState = {
    email: "",
    password: "",
    inProgress: false,
};


const Login = () => {
    const [state, dispatch] = useContext(Context);
    let history = useHistory();
    const [
        {email, password, inProgress},
        setState
    ] = useState(initialState);

    const [user, setUser] = useState(initialState);

    const onChange = e => {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post(`/login?username=${user.email}&password=${user.password}`)
            
            let value = {
                username: user.email
            }
            /* fetch api */

            /* clear state */
        dispatch({type: LOGIN, value: value, key: 'currentUser'});
        history.push('/')
        } catch (err) {
            alert(err)
        }
    };

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChange} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChange} />

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;