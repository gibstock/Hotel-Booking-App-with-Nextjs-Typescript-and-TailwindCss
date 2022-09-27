import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter} from '@next-auth/firebase-adapter'
import { initializeApp, getApp, getApps } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  query,
  getDocs,
  where,
  limit,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  runTransaction,  
} from 'firebase/firestore'
import {
  getAuth, 
  // createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}
console.log('nextauth', firebaseConfig)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  adapter: FirestoreAdapter(firebaseConfig),
  pages: {
    signIn: '/auth/login',
  },
  // session: {
  //   strategy: 'jwt'
  // },
  // jwt: {
  //   secret: 'lsjdf0s9fdjoasdfjajsdfoieifj',
  // },
  // callbacks: {
  //   async jwt({token, user}){
  //     if(user) {
  //       token.id = user.id
  //     }
  //     return token
  //   },
  //   async session({session, token}) {
  //     session.user.id = token.id
  //     return session
  //   }
  // }
})

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if(!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password)
// }