import {ChatEngine} from 'react-chat-engine';
import './App.css';
const App = ()=>{
return(<ChatEngine
    height="100vh"
    projectID="dc137ab1-451c-4b96-a79f-59f877b98f65" 
    userName="javascriptmastery"
    userSecret="123123"
    renderChatFeed={(chat)}

   /> );
}
export default App;