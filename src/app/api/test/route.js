import axios from "axios";

export async function GET() {
  const IP = "192.168.230.22";

  const result = await axios.get(`http://${IP}:80/Voltage`);
  console.log(result);

  return Response.json({ message: "hello" });
}
