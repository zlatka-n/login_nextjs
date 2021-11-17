import { API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    //console.log(req.body);

    const strapiRes = await fetch(`${API_URL}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await strapiRes.json();
    //console.log(data.jwt);

    if (strapiRes.ok) {
      res.status(200).json({ user: data.user });
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(505).json({ message: `Method ${req.method} not allowed` });
  }
};
