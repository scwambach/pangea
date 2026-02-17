import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const { email } = formData;

  // TODO: Implement actual email service integration (e.g., SendGrid, Mailchimp, etc.)
  // For now, just log and return success

  console.log({
    email,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json(
    { message: `${email} has been saved.` },
    { status: 200 },
  );
}
