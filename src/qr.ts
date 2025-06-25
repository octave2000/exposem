import qrcode from "qrcode-terminal";

export function printQR(url: string) {
  console.log("\n Scan this on you mobile:");
  qrcode.generate(url, { small: true });
}
