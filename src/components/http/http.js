import axios from "axios";


const JsonFormHttp = axios.create({
  baseURL: "http://localhost:1337",
  withCredentials: true, // for cookies and authentication 
  headers: {
    "Content-type": "application/json"
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
    // 'Access-Control-Allow-Headers': 'Authorization, Content-Type, Origin, Accept',
    // 'Access-Control-Max-Age': '3600',
    // 'Access-Control-Allow-Credentials': 'true',
    // "Accept":	'*/*',
    // "Sec-Fetch-Site":	'none',
    // "Sec-Fetch-Mode":	'cors'
  }
});

const MultiFormHttp = axios.create({
  baseURL: "http://localhost:1337",
  withCredentials: true, // for cookies and authentication 
  headers: {
    "content-type": "multipart/form-data",
  }
});

// http://localhost:8000/api/v1

export { JsonFormHttp, MultiFormHttp };