export default defineEventHandler(async () => {
  console.log("incoming voice request");

  const { voiceRes } = useTwilio();

  const voice = voiceRes();
  voice.say("Welcome to the simulation. We are here for you.");

  // event.node.res.setHeader("Content-Type", "text/xml");
  return voice.toString();
});
