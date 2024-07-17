
export const appReducer = (state, action) => {
    switch (action.type) {
        case "USERS_UPDATE":
            return {
                ...state,
                users: action.payload
            }
        case 'PHOTOS_UPDATE':
            return {
                ...state,
                photos: action.payload
            }
        case "POSTS_UPDATE":
            return {
                ...state,
                posts: action.payload
            }
    }
    return state
}