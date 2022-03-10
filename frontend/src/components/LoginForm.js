// import { useState } from 'react';
// import firebaseAuthService from '../firebaseAuthService';

/*
function LoginForm({ existingUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await firebaseAuthService.loginUser(username, password);
      setUsername('');
      setPassword('');
    } catch (error) {
      alert(error.message);
    }
  }

  function handleLogout() {
    firebaseAuthService.logoutUser();
  }

  async function handleSendResetPasswordEmail() {
    if (!username) {
      alert('Missing username!');
      return;
    }

    try {
      await firebaseAuthService.sendPasswordResetEmail(username);
      alert('sent the password reset email');
    } catch (error) {
      alert(error.message);
    }
  }
  */
function LoginForm(props) {
  const { isLoggedIn } = props;

  if (isLoggedIn) {
    return (
      <div className="login-form-container">
        <form className="login-form">
          <label className="input-label login-label">
            Username (email):
            <input type="email" required className="input-text" />
          </label>
          <label className="input-label login-label">
            Password:
            <input type="password" required className="input-text" />
          </label>
          <div className="button-box">
            <button className="primary-button">Login</button>
            <button type="button" className="primary-button">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="login-form-container">
      <form className="login-form">
        <label className="input-label login-label">
          Username (email):
          <input type="email" required className="input-text" />
        </label>
        <label className="input-label login-label">
          Password:
          <input type="password" required className="input-text" />
        </label>
        <div className="button-box">
          <button className="primary-button">Login</button>
          <button type="button" className="primary-button">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
