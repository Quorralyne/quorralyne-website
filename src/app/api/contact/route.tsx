import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const plaintextMessage = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    const form = new FormData();
    form.append("from", "Heather's Website <quorralyne@gmail.com>");
    form.append("to", "Heather <quorralyne@gmail.com>");
    form.append("subject", "[Contact Form] " + "Message from " + name);
    form.append("text", plaintextMessage);

    const resp = await fetch(
      `https://api.eu.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from("api:" + process.env.MAILGUN_API_KEY).toString(
              "base64"
            ),
        },
        body: form,
      }
    );

    const success = resp.ok;
    return NextResponse.json({ success });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}