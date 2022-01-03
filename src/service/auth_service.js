import firebase from 'firebase/compat/app';
import firebaseApp from './firebase';
import 'firebase/compat/auth';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChange) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChange(user);
    })
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
