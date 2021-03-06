import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
    height = "100vh"
    projectID="3e9d897f-13d5-454a-a93c-bcdf070cab4b"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}
    />
  );
}

export default App;
