module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      // jwtSecret: env("JWT_SECRET", "your_short_secret"), // 短密钥
      jwt: {
        expiresIn: "7d",
        // options: {
        //   algorithm: "HS256", // 保持算法为HS256
        // },
      },
    },
  },
});
