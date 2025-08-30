export default function handler(req, res) {
  const { key } = req.query; // the key user entered

  // keys are pulled from env variables (so they are not exposed)
  const checkKey = process.env.CHECK_KEY;
  const revealKey = process.env.REVEAL_KEY;

  if (key === checkKey) {
    res.status(200).json({ success: true, reveal: revealKey });
  } else {
    res.status(401).json({ success: false, message: "Invalid key" });
  }
}
