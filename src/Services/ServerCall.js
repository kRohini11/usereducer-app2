import axios from "axios"

class ServerCall {

    static sendGetReq() {
        return axios.get()
    }
    static sendPutReq() {
        return axios.put()
    }
    static sendPostReq() {
        return axios.post()
    }
    static sendDeleteReq() {
        return axios.delete()
    }


}

export default ServerCall