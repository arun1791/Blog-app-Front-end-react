// import axios from "axios";

// export const BASE_URL='http://localhost:9092';

// export const myAxios=axios.create({
//     baseUrl: BASE_URL,
// });

// export default myAxios;

import axios from "axios";

const myAxios = axios.create({

  baseURL: "http://localhost:9092"
});

export default myAxios;