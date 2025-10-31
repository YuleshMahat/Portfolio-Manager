const config = {
  mongoOptions: {
    salt: +process.env.SALT || 10,
    url: process.env.MONGO_URI,
  },
};

export default config;
