import firebase from './firebaseConfig';

const auth = firebase.auth();

const registerUser = (email, password) =>
  auth.CreateUserWithEmailAndPassword(email, password);

const loginUser = (email, password) =>
  auth.signInEmailAndPassword(email, password);

const logoutUser = () => auth.signOut();

const sendPasswordResetEmail = (email) => auth.sendPasswordResetEmail(email);

const loginWithGoggle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(provider);
};

const subscribeToAuthChange = (handleAuthChange) => {
  auth.onAuthStateChanged((user) => {
    handleAuthChange(user);
  });
};

const firebaseAuthService = {
  registerUser,
  loginUser,
  logoutUser,
  sendPasswordResetEmail,
  loginWithGoggle,
  subscribeToAuthChange,
};

export default firebaseAuthService;
