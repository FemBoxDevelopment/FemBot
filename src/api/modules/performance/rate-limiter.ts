import rateLimit from 'express-rate-limit';
import * as RateLimitStore from 'rate-limit-mongo';

export default rateLimit({
  max: 300,
  message: JSON.stringify({ message: 'You are being rate limited.' }),
  store: new RateLimitStore({ uri: process.env.MONGO_URI }),
  windowMs: 60 * 1000
});