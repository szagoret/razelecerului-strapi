module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '20585e9dcf54f2d71706db3f34fb290d'),
  },
});
