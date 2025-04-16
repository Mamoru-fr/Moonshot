// Inputs from firebase config for Device and Web
import { FIREBASE_APP, FIREBASE_DB } from './firebaseConfigDevice'
import { webApp, webAuth, getWebAuth } from './firebaseConfigWeb';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

// Define the DeviceApp interface 
interface DeviceAuth {
  signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>;
}

let deviceApp;
let deviceAuth : DeviceAuth | undefined;
let deviceDatabase;

// Initialize Firebase for Device
deviceApp = FIREBASE_APP;
deviceDatabase = FIREBASE_DB;
deviceAuth = {
  signInWithEmailAndPassword: (email: string, password: string) => signInWithEmailAndPassword(FIREBASE_APP.auth, email, password),
  createUserWithEmailAndPassword: (email: string, password: string) => createUserWithEmailAndPassword(FIREBASE_APP.auth, email, password) 
}

export { deviceApp, deviceAuth, deviceDatabase, webApp, webAuth, getWebAuth }