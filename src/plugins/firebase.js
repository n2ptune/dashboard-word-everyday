import config from './firebase.credentials'
import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp
