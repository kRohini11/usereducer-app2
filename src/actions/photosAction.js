
import ServerCall from "@/Services/ServerCall"

const photoAction = async (dispatch) => {
    try {
        const res = await ServerCall.sendGetReq("https://jsonplaceholder.typicode.com/photos")
        // console.log(res)
        dispatch({
            type: "PHOTOS_UPDATE",
            payload: res.data
        })
    }
    catch (ex) {
        console.error(ex.message)
    }
    finally {

    }
}
export default photoAction