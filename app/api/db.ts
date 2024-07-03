import mongoose from "mongoose";

const mongoConnection = async () => {
  try {
    await mongoose.connect(`mongodb+srv://zxcvbnzjd184:123123!Aa@expense-calc.lg3leva.mongodb.net/?retryWrites=true&w=majority&appName=expense-calc`);
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
};

export default mongoConnection;
