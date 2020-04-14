import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import EventHistory from './components/EventHistory';
import ChatHistory from './components/ChatHistory';
import Login from './components/Login';
import history from './components/History';
import Register from './components/Register';
import RoomList from './components/RoomList';
import AddRoom from './components/AddRoom';
import ChatRoom from './components/ChatRoom';
import ChatLobby from './components/ChatLobby';

function App() {
  return (
    <BrowserRouter history={history}>
    <div style={{ float: 'left', margin: '0 2em'}}>
      <a href="/login" style={{marginLeft: '1em'}}><button>Log In</button></a>
    </div>
    <div style={{ float: 'right', margin: '0 2em'}}>
      <i style={{marginRight: '1em'}}>Administrator</i>
      <a href="/login"><button>Log Out</button></a>
    </div>
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/eventHistory" component={EventHistory} />
        <Route path="/chatHistory" component={ChatHistory} />
        <Route path="/roomList" component={RoomList} />
        <Route path="/addRoom" component={AddRoom} />
        <Route path="/chatRoom" component={ChatRoom} />
        <Route path="/chatLobby" component={ChatLobby} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
