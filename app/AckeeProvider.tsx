"use client";

// Routing
import { usePathname } from "next/navigation";

// Ackee providers
import useAckee from "../lib/useAckee";

export default function AckeeProvider() {
  const pathname = usePathname();
  useAckee(
    pathname ? pathname : "",
    {
      server: "https://ackee.hikium.com",
      domainId: "2e846c93-9ead-47d0-b8dc-1e9cc57d2520",
    },
    {
      detailed: true,
      ignoreLocalhost: true,
      ignoreOwnVisits: false,
    }
  );

  return <></>;
}
