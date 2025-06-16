import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  session: String,
  regNumber: String,
  ticketType: String,
  ticketsCount: {
    type: Number,
    default: 0
  },
  status: String,
  fundsStatus: String,
  price: Number,
  purchaseAmount: Number,
  purchasedOn:String,
  trackingCode: String,
  discountCode: String,
  checkedIn: String,
  firstName: String,
  lastName: String,
  email: String,
  dob: String,
  reEnterEmail: String,
  mobile: String,
  gender: String,
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
