
import ServerCall from "@/Services/ServerCall"

const postsAction = (dispatch) => {
    ServerCall.sendGetReq("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            dispatch({
                type: "POSTS_UPDATE",
                payload: res.data
            })
        })
        .catch((res) => {
            console.log("catch", res)
        })
        .finally(() => {
            console.log("finally")
        })
}

export default postsAction