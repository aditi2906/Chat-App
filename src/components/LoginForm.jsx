import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "7d207070-a837-4555-96f1-752aae54d82d", 'User-Name': username, 'User-Secret': password };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('passwrod', password);
            window.location.reload();
            setError('');

        } catch (error) {
            setError('The credentials do not match')
        }


    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chatty-Chatty</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Catch up with your firends!</span>
                        </button>
                        <h2 className="error">{error}</h2>

                    </div>

                </form>
            </div>

        </div>
    )
}
export default LoginForm;