// import { useState } from 'react';
// import firebaseAuthService from './firebaseAuthService';
import LoginForm from './components/LoginForm';

import './Apps.css';

function Apps() {
  // const [user, setUser] = useState(null);

  // firebaseAuthService.subscribeToAuthChange(setUser);

  // <LoginForm existingUser={user}></LoginForm>

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipes</h1>
        <LoginForm isLoggedIn={false}></LoginForm>
      </div>
    </div>
  );
}

export default Apps;
