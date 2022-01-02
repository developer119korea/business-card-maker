import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseApp from './firebase';
import { getAuth, signOut } from "firebase/auth";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    const auth = getAuth();
    return signOut(auth);
  }
}

export default AuthService;
