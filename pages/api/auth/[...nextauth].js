import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { api } from '../../../urls'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const loginApiUrl = `${api.domain}/${api.routes.loginUrl}`
const refreshAccessToken = async (prevToken) => {
  const token = await axios.post(prevToken);

  // Do what you want

  return {
    accessToken: token.accessToken,
    accessTokenExpires: Date.now() + token.expiresIn * 1000,
  };
}
export default NextAuth(
  {
    providers: [Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }), Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }), Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }), Providers.Credentials({
      name: 'Credentials',
      authorize: async (credentials) => {

        try {
          const resp = await axios.post(loginApiUrl,
            {

              password: credentials.password,
              email: credentials.email
            },
            {
              headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
              }
            })
          if (resp.data) {
            if (resp.data.type === "error") {
              throw new Error(resp.data)
            }
            const user = jwt_decode(resp.data.token).sub
            user.name = user.username
            return user
          }
        } catch (e) {
          let error = e.response.data
          console.log("error:", error)
          throw new Error(error.message)
        }

      }
    })
    ]
  })
