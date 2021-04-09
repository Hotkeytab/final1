import React from 'react'
import ReactDOM from 'react-dom'
import  {ChatEngine}  from 'react-chat-engine';
import  ChatFeed from './ChatFeed';
import LoginForm from './LoginForm'
import './App.css';



const projectID = '39e37753-4166-49d1-a8ec-972bac7191e0';




const Home = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

    return ( 
      
    <ChatEngine
    height="90vh"

    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
  );
 

}

export default Home; 
