const crypto = require("crypto");

let hash = "";
let cnt = 0;

while (hash.length < 5 || !hash.startsWith("00000")) {
  hash = crypto
    .createHash("sha256")
    .update(
      `
    harkirat => Raman | Rs 100
    Ram => Ankit | Rs 10
    ` + cnt.toString()
    )
    .digest("hex");
  cnt++;
}

console.log(cnt - 1);
