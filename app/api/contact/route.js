import connectDB from "@/config/db";
import Contact from "@/models/userSchema";
import { NextResponse } from "next/server";

// get all user data
export async function GET(req) {
  try {
    await connectDB();
    const users = await Contact.find();
    return NextResponse.json(users);
  } catch (e) {
    return NextResponse.json({ e: e.message }, { status: 500 });
    // console.log(error);
  }
}
//create a user data collection
export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });

    return NextResponse.json(
      {
        msg: ["Message sent successfully"],
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
