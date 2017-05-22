import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCPHaQrN0qcg5hrRBK9H12ZsVnrA6_uOWQ',
  authDomain: 'feelings-checkin.firebaseapp.com',
  databaseURL: 'https://feelings-checkin.firebaseio.com',
  projectId: 'feelings-checkin',
  storageBucket: 'feelings-checkin.appspot.com',
  messagingSenderId: '412940768342'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
