import ServerCall from "@/Services/ServerCall"

const usersAction = (dispatch) => {
    ServerCall.sendGetReq("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        dispatch({
            type:"USERS_UPDATE",
            payload:res.data
        })
    })
    .catch((res)=>{
        console.log("catch",res)
    })
    .finally(()=>{
        console.log("finally")
    })
}

export default usersAction