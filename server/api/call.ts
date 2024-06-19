export default defineEventHandler(async (event) => {
  console.log("incoming make call request");

  const { to } = await readBody(event);
  console.log("make a call to:", to);
  if (!to) {
    throw createError({
      statusCode: 422,
      statusMessage: "No number to make a call to.",
    });
  }

  const { twClient } = useTwilio();

  const call = await twClient.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to,
    from: process.env.TWILIO_CALLER_ID!,
  });

  console.log("made a call: ", call.sid);

  return call;
});
