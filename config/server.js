module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '90760dd8407cc5676d1b8e41f30dcb95'),
    },
    url: '/dashboard',
  },
});
