export class Environment {
    static IS_DEV_MODE = process.env.NODE_ENV !== "production";
    static API_URL = process.env.REACT_APP_API_URL ?? "";
    static RELATORIO_API_URL = process.env.REACT_APP_RELATORIO_API_URL ?? "";
    static AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL ?? "";
    static TOKEN_DELTA_API_URL = process.env.REACT_APP_TOKEN_DELTA_API_URL ?? "";
    static CONFIG_DELTA_API_URL =
      process.env.REACT_APP_CONFIG_DELTA_API_URL ?? "";
    //static CONVERSOR_DELTA_API_URL =
    //  process.env.REACT_APP_CONVERSOR_DELTA_API_URL ?? "";
    static PUSH_DELTA_API_URL = process.env.REACT_APP_PUSH_DELTA_API_URL ?? "";
    static BUILD_NUM = process.env.REACT_APP_BUILD_NUM ?? "";
    static MILLISECONDS_IN_A_SECONDS = 5 * 1000;
    static MILLISECONDS_IN_A_HOURS = 3600000;
    static DRAWER_WIDTH = 37.5;
    static KEY_APP_AUTH = "Aluno";
    //static KEY_S3_MENSAGENS = "MENSAGENS";
    static FIREBASE_KEY = {
      apiKey: "AIzaSyBvO-JIULoAJi1YX3yd1uKpPUNBndCcPi8",
      authDomain: "deltaclass-2.firebaseapp.com",
      databaseURL: "https://deltaclass-2.firebaseio.com",
      projectId: "deltaclass-2",
      storageBucket: "deltaclass-2.appspot.com",
      messagingSenderId: "833417827558",
      appId: "1:833417827558:web:f89a9439e0928eb029d727",
      measurementId: "G-NLNSHMRSPW",
    };
    static FCM_VAPIDKEY =
      "BBUXq7PKI5zvv28HGY_pooZdkW_H2ToLRQqqnthdrMoKZXCzqozLoFziw5JRJCp31ZCPl4oVnBp47Oru3nmFKWA";
  }
  