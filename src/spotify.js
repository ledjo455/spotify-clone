export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3001/";

// Step 1: Click Login Button
// Step 2: Redirect to Spotify Login Page
// Step 3: Redirect to home page once logged in 
const clientId = "bbd86a0e12c24f54867c2a993fe3ac76";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            

            return initial;
        }, {}) 
  }

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;