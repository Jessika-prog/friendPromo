const CLIENT_ID = "0is47zyygpss7fo77ray1f3s8uyrdh";
const REDIRECT_URI = "https://jessika-prog.github.io/friendPromo/alertes/index.html";
const SCOPES = [];

const helpers = {

    encodeQueryString: function(params) {
        const queryString = new URLSearchParams();
        for (let paramName in params) {
            queryString.append(paramName, params[paramName]);
        }
        return queryString.toString();
    },

    decodeQueryString: function(string) {
        const params = {};
        const queryString = new URLSearchParams(string);
        for (let [paramName, value] of queryString) {
            params[paramName] = value;
        }
        return params;
    },

    getUrlParams: function() {
        return helpers.decodeQueryString(location.hash.slice(1));
    },

};

const twitch = {

    isAuthenticated: function() {
        const params = helpers.getUrlParams();
        return params["access_token"] !== undefined;
    },

    authentication: function() {
        const params = {
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            response_type: "token",
            scope: SCOPES.join(" "),
        };
        const queryString = helpers.encodeQueryString(params);
        const authenticationUrl = `https://id.twitch.tv/oauth2/authorize?${queryString}`;
        location.href = authenticationUrl;
    },

};

function main() {

    if (!twitch.isAuthenticated()) {
        twitch.authentication();
    } else {
        alert("L'utilisateur a bien autorisé l'application !")
    }
}

window.onload = main;