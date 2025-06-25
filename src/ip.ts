import os from "os";

const privateRanges = [
  /^10\\./,
  /^172\\.(1[6-9]|2[0-9]|3[0-1])\\./,
  /^192\\.168\\./,
].map((r) => new RegExp(r.source.replace(/\\\\/g, "\\")));

export function getLocalIP(): string {
  const interfaces = os.networkInterfaces();
  const candidates: { ip: string; name: string }[] = [];

  for (const name in interfaces) {
    const netInfos = interfaces[name];
    if (!netInfos) continue;

    for (const net of netInfos) {
      if (
        net.family === "IPv4" &&
        !net.internal &&
        privateRanges.some((r) => r.test(net.address))
      ) {
        candidates.push({ ip: net.address, name });
      }
    }
  }

  if (candidates.length === 0) {
    console.error("Available interfaces:");
    console.dir(interfaces, { depth: null });
    throw new Error("No local network IP address found.");
  }

  const preferred =
    candidates.find((c) => c.name.toLowerCase().includes("wi-fi")) ||
    candidates.find((c) => c.ip.startsWith("192.168.")) ||
    candidates[0];

  if (!preferred) {
    throw new Error("No preferred local network IP address found.");
  }
  return preferred.ip;
}
