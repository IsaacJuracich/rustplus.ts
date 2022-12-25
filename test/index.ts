import rustPlus from "../rustplus";

const FCM = {
  img: "https://i.imgur.com/3gYp5QW.png",
  port: "28092",
  ip: "104.152.143.137",
  name: "US|AndysolAM 10x No BPs|PVP|Shop|Loot+|Kits|Raid+|Skinbox|WIPED",
  logo: "https://i.imgur.com/NMivj2t.jpg",
  id: "c0a04e2d-43c0-4f50-8610-205675740e08",
  type: "server",
  url: "https://www.andysolam.com",
  desc: "Welcome to AndysolAM 10X NO BPS\\n\\nNeed support or want to engage with our community? Go to https://andysolam.com/discord\\n\\nServer wipe schedule:\\nThis server follows a twice a week map wipe schedule. This will take place every Monday & Friday @ 3PM ET.\\nOn force wipe (the forced update that Facepunch does on the first Thursday @ 2PM ET of every month), this server will also wipe.\\n\\nServer feature list:\\n- 10 player team limit\\n- 10x gather rate (includes pickups & excavator)\\n- Highly active admin team\\n",
  playerId: "76561199439348595",
  playerToken: "1037221751",
};
const rust = new rustPlus(FCM.ip, FCM.port, FCM.playerId, FCM.playerToken);

rust.on("connected", () => {
  console.log("Connected to Rust server");
  rust.sendTeamMessage("ls");

  rust.getMapMarkers((markers) => {
    console.log(markers);
  });
});

rust.connect();
