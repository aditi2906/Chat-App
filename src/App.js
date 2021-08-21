import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
return(<ChatEngine
    height="100vh"
    projectID="7d207070-a837-4555-96f1-752aae54d82d" 
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}

   /> );
}
export default App;