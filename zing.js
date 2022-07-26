const { ZingMp3 } = require("zingmp3-api-full")

ZingMp3.getSong("ZZUB0I0E").then((data) => {
    console.log(data)
  })