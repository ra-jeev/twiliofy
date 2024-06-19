import Twilio from "twilio";

const twilio = Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const useTwilio = () => {
  const voice = () => {
    return new Twilio.twiml.VoiceResponse();
  };

  return { twClient: twilio, voiceRes: voice };
};
