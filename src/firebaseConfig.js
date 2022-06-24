import firebase from 'firebase/app';
import "firebase/storage";


var config = {
    apiKey: "AIzaSyCi__r3WF9O7CXM8M90ze58cw-YEbsddW8",
    authDomain: "tshirt-aafe5.firebaseapp.com",
    projectId: "tshirt-aafe5",
    storageBucket: "tshirt-aafe5.appspot.com",
    messagingSenderId: "953599999831",
    appId: "1:953599999831:web:a34c1ac08e2e71d56ec812"
};
// Initialize Firebase
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}