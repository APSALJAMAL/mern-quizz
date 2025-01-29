import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

 const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("Database connection successful");
    } catch (error) {
        console.log("Error occurred while connecting to DB");
        console.error(error);
        process.exit(1);
    }
};

export default connectToDB;
