import mongoose from "mongoose";

const Schema = mongoose.Schema,
    exampleSchema = new Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
    }, {collection: 'Users'});

export default mongoose.model('Users', exampleSchema);
