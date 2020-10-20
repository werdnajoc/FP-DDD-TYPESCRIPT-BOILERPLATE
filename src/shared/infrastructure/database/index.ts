import mongoose from "mongoose";

const databaseHostOrDefaultHost: string = process.env.DATABASE_HOST || "mongodb://localhost:27017";

const connect = () => {
  try {
      return mongoose.connect(databaseHostOrDefaultHost, {
          dbName: process.env.DATABASE_NAME,
          useUnifiedTopology: true,
          useNewUrlParser: true,
          user: process.env.DATABASE_USERNAME,
          pass: process.env.DATABASE_PASSWORD,
      });
  }  catch (e) {
        console.log("error mongo -> ", e)
  }
};

const disconnect = async function(){
    try{
        await mongoose.disconnect(() => {
            console.log('connection is ended');
        });
    }catch (e) {
        console.log("Fallo la conexion a la BD: ", e);
    }
};

export default {
    connect,
    disconnect
}
