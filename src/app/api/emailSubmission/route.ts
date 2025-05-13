import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const { email } = formData;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const success = Math.random() > 0.5;

  console.log({
    email,
    success,
  });

  if (success) {
    console.log("it worked");
    return NextResponse.json(
      { message: `${email} has been saved.` },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Something went wrong. Please try again." },
    { status: 500 }
  );
}
