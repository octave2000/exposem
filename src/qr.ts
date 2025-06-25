import qrcode from "qrcode-terminal";

export function printQR(url: string) {
  console.log("\n Scan on your mobile:");
  qrcode.generate(url, { small: true });
}
