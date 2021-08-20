const MyMessage =({message}) =>{
    if(message ?.attachment?.length>0){
        return(<img
            src={message.attachments[0].file}
            alt="message-attachments"
            className="message-image"
            style={{float:'right'}}/>
    }
    return(
        
    <div>
        MyMessage
    </div>)
    }
    export default MyMessage();