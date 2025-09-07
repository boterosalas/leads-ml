/*const axios = require("axios");
ESTA VERSIÓN CONSUME SOLO EL SERVICIO QUE RETORNA EL ACCESS_TOKEN
const { Buffer } = require("buffer");

module.exports.handler = async (event) => {
  console.log('EVENT', event);

  try {
    let body = {};
    if (event.body) {
      if (event.isBase64Encoded) {
        const decoded = Buffer.from(event.body, "base64").toString("utf-8");
        try {
          body = JSON.parse(decoded);
        } catch {
          const params = new URLSearchParams(decoded);
          body = Object.fromEntries(params);
        }
      } else {
        body = JSON.parse(event.body);
      }
    }

    const params = {
      code: body.code,
      grant_type: "authorization_code",
      redirect_uri: process.env.REDIRECT_URI,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    };

    const response = await fetch(process.env.TARGET_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://boterosalas.github.io",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://boterosalas.github.io",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Error obteniendo el token",
        error: error.message,
      }),
    };
  }
};*/

/*
ESTA VERSIÓN ES PARA CONSUMIR CUALQUIER SERVICIO
module.exports.handler = async (event) => {
  try {
    let body = {};
    // 🔹 Decodificamos el body dependiendo del formato
    if (event.body) {
      if (event.isBase64Encoded) {
        const decoded = Buffer.from(event.body, "base64").toString("utf-8");
        try {
          body = JSON.parse(decoded);
        } catch {
          const params = new URLSearchParams(decoded);
          body = Object.fromEntries(params);
        }
      } else {
        body = JSON.parse(event.body);
      }
    }

    // 🔹 Extraemos datos esperados
    const {
      method = "GET",
      url,
      params,
      data,
      headers = {},
    } = body;

    if (!url) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
          "Access-Control-Allow-Methods": "POST",
        },
        body: JSON.stringify({ message: "Falta el parámetro 'url'" }),
      };
    }
    // 🔹 Hacemos la llamada dinámica con axios
    const response = await axios({
      method,
      url,
      params,
      data,
      headers,
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // habilita CORS
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Error en proxy",
        error: error.response?.data || error.message,
      }),
    };
  }
};
*/
