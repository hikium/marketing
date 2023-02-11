// Types
import { NextApiRequest, NextApiResponse } from "next";

// App config
import version from "../../lib/version";

import { init } from "license-checker";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method } = req;
  const useFormatting = query.format ? (query.format as string) : undefined;

  init(
    {
      start: "./",
      production: true,
      customFormat: {
        name: "",
        version: "",
        description: "",
      },
      excludePrivatePackages: true,
    },
    (err, result) => {
      if (err) {
        res.status(500).json({
          status: 500,
          details: `Could not get licenses. Details: ${err}`,
        });
      } else {
        if (useFormatting) {
          var coreString = `Hikium marketing website (${version}) third-party software notice
          
hikium.com

NOT FOR PRINTING




`;

          for (const [key, value] of Object.entries(result)) {
            coreString =
              coreString +
              `${value.name} ${value.version}
Repository URL: ${value.repository}

${value.licenseText}


---------------------------------------------------------------------------------------------------


`;
          }

          res.status(200).send(coreString);
        } else {
          res.status(200).json(result);
        }
      }
    }
  );
}
