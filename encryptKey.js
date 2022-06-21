const ethers = require("ethers");
require("dotenv").config();
const fs = require("fs-extra");

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJSONKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD
  );
  fs.writeFileSync("./.encryptedKey.json", encryptedJSONKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
