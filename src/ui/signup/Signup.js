import React, {useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {Context} from "../../store";
import axios from 'axios'
import {LOGIN} from "../../constants/reducerConstants";

function Register() {
    const [state, dispatch] = useContext(Context);
    let history = useHistory();
    const [user, setUser] = useState({
         email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post("/signup", {...user})

            localStorage.setItem('firstLogin', true)

            let value = {
                username: user.email
            }
            /* fetch api */

            /* clear state */
        dispatch({type: LOGIN, value: value, key: 'currentUser'});
        history.push('/')
            
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>


                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register