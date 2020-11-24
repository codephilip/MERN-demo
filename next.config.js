// must restart server whenever you make changes in next.config
module.exports = {
  
  env: {
    MONGO_SRV: "mongodb+srv://phigeh:JuSf0bwS2UybQ7gT@cluster0.kthn1.mongodb.net/restAPIdb?retryWrites=true&w=majority",
    JWT_SECRET: "1234567abc",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
