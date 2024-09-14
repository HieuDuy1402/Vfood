import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hieuduy:hieuduy1402@cluster0.uezp0tt.mongodb.net/food-del"
    )
    .then(() => console.log("Đã kết nối cơ sở dữ liệu"));
};
