const axios = require("axios");
const { success, error } = require("../utils/responseApi");

const baseUrl = "https://zodiac-sign-api1.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.ZODIAC_API_KEY,
    "X-RapidAPI-Host": process.env.ZODIAC_API_HOST,
  },
};

exports.getZodiac = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/all`, options);
    res.status(200).json(success("OK", response.data, 200));
  } catch (err) {
    res.json(err);
    res.status(403).json(error(err.message));
  }
};

exports.getZodiacSign = async (req, res) => {
  const params = req.params.sign;
  const sign = params.charAt(0).toUpperCase() + params.slice(1);
  const arrSign = [
    "Aquarius",
    "Aries",
    "Cancer",
    "Capricorn",
    "Gemini",
    "Leo",
    "Libra",
    "Pisces",
    "Sagittarius",
    "Scorpio",
    "Taurus",
    "Virgo",
  ];
  const checkSignInList = arrSign.filter((val) => val === sign);
  try {
    if (checkSignInList.length == 0) {
      res.status(400).json({
        error: "Bad param request",
        statusCode: 400,
        message: `Please check sign in this list [${arrSign}]`,
      });
    } else {
      const response = await axios.get(`${baseUrl}/search`, {
        ...options,
        params: { sign: sign },
      });
      res.status(200).json(success("OK", { sign, ...response.data }, 200));
    }
  } catch (err) {
    res.json(err);
    res.status(403).json(error(err.message));
  }
};
