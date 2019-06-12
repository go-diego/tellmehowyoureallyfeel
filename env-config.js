const ENV_PATH =
    process.env.NODE_ENV === "production" ? "./.env" : "./.env.development";
require("dotenv").config({ path: ENV_PATH });

module.exports = {
    "process.env.ATKEY": process.env.ATKEY,
    "process.env.PAPAYA_KEY1": process.env.PAPAYA_KEY1,
    "process.env.PAPAYA_KEY2": process.env.PAPAYA_KEY2,
    "process.env.PAPAYA_URL": process.env.PAPAYA_URL
};
