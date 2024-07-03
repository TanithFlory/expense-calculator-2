import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  totalExpenses: {
    type: Number,
  },
  paymentLink: {
    type: String,
  },
  expenses: [ExpenseSchema],
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
