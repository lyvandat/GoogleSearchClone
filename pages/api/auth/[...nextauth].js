import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// google client(id + secret): https://console.cloud.google.com/apis/credentials/oauthclient/89490044885-9shi81nqqt2dm8lv3idd940vle675ipa.apps.googleusercontent.com?project=sapient-helix-364109

export const authOptions = {
  // configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // lưu ý khi set pages (custom signIn, signOut, error - tự tạo ra trang signIn, signOut, error)
  // + phải tạo ra file js tương ứng (pages/auth/signin.js) và
  // + để chuyển hướng đến signin của provider thì phải dùng signIn(provider.id, {callbackUrl: "/"}) và
  // + signIn() (không tham số) để chuyển đến trang signin custom
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
