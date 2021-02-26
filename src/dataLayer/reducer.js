export const initialState = {
    user: null,
    playlists: [],
    discover_weekly:null,
    item: null,
    playing: false,
}

const reducer = (state, action) =>{
    console.log(action);
    
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }
        case "DISCOVER_WEEKLY":
                 console.log(action.discover_weekly);
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case "SET_PLAYING":
            return{
                ...state,
                playing: action.playing
            }
        case "SET_ITEM":
            return{
                ...state,
                item: action.item
            }
        default:
            return state;
    }
}

export default reducer;