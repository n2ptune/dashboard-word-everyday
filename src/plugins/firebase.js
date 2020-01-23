import config from './firebase.credentials'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default firebase.initializeApp(config)
