import { connect } from "mongoose";
import Log from "./log";

export default class Mongo {
  static connect() {
    connect(process.env.MONGO_URI, { 
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useFindAndModify: false 
    }, (error) => (error)
      ? Log.error('Failed to connect to db', 'bot')
      : Log.info('Connected to db', 'bot'));
  }
}
