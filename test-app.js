const axios = require("axios").default;

axios({
  method: "get",
  url: "http://localhost:3000",
}).then(function (response) {
  console.log({ response });
});
