import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

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