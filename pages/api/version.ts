// Types
import { NextApiRequest, NextApiResponse } from "next";

// Version
import version from "../../lib/version";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ version: version });
}
