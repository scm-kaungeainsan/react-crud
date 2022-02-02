import { JsonFormHttp, MultiFormHttp } from "../components/http/http";

import axios, { post } from 'axios';

class MainService {


    async login(data) {
        return await JsonFormHttp.post("/login", data);
    }

    async logout() {
        return await JsonFormHttp.post("/logout");
    }

    async getAll() {
        console.log('Get -------------------')
        const res = await axios.get('http://localhost:1337/members');
        return res


        // let requestBody = {
        //     "email": 'admin@gmail.com',
        //     "password": 'password'
        // }
        // const res = await axios.post('http://150.95.80.181:8000/api/v1/login', requestBody);
        // console.log(res)
        // return res
    }

    async getImage(url) {
        const imgHttp = axios.create({
            withCredentials: true, // for cookies and authentication 
            headers: {
                "Content-type": "application/json"
            }
        });
        return await imgHttp.get(url);
    }

    async get() {
        console.log('Get -------------------')
        const url = 'http://localhost:1337/members';
        const config = {
            withCredentials: true,
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let data = {}
        return await post(url, data, config)
    }

    update(id, data) {
        return MultiFormHttp.put(`/update-user/${id}`, data);
    }

    delete(id) {
        return JsonFormHttp.delete(`/delete-user/${id}`);
    }

    updatePassword(id, data) {
        return JsonFormHttp.post(`/update-password/${id}`, data);
    }

    findByTitle(title) {
        return JsonFormHttp.get(`/tutorials?title=${title}`);
    }
}

export default new MainService();