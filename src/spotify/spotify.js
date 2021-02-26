export const authentication = "https://accounts.spotify.com/authorize";

const clientId = "688aecb45c004fb98a9589549ebc15d3";

const redirect = "http://localhost:3000/";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export function getToken() {
   return window.location.hash
           .substring(1)
           .split("&")
           .reduce((initial, item) => {
                var parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]);
                
                return initial;
           }, {})
}

export const loginUrl = `${authentication}?client_id=${clientId}&redirect_uri=${redirect}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;