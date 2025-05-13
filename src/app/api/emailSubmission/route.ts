import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();

  // get email from formData
  const { email } = formData;

  // wait for 3 seconds and then return a response randomly 200 or 500
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const success = Math.random() > 0.5;

  console.log({
    email,
    success,
  });

  if (success) {
    console.log("it worked");
    return NextResponse.json({
      status: 200,
      body: {
        message: `${email} has been saved.`,
      },
    });
  }
  return NextResponse.json({
    status: 500,
    body: {
      message: "Something went wrong. Please try again.",
    },
  });
}
