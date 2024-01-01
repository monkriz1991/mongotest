// fetchData.js
const https = require("https");

export async function fetchData() {
  const options = {
    hostname: "cryptoscool.ru",
    port: 443,
    path: "/",
    method: "GET",
    rejectUnauthorized: false, // отключение проверки сертификата
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve(data);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
}
