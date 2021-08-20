import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = ()=>{
return(<ChatEngine
    height="100vh"
    projectID="dc137ab1-451c-4b96-a79f-59f877b98f65" 
    userName="javascriptmastery"
    userSecret="123123"
    renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}

   /> );
}
export default App;