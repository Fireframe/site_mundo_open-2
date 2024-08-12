// Google Sign-In
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Aqui você enviaria o token para o servidor e faria a autenticação do usuário.
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("googleSignInBtn"),
        { theme: "outline", size: "large" }  // personalização do botão
    );
};

// LinkedIn Sign-In
function onLinkedInLoad() {
    IN.UI.Authorize().place();
    IN.Event.on(IN, "auth", getProfileData);
}

function getProfileData() {
    IN.API.Raw("/people/~").result(function (data) {
        console.log(data);
        // Aqui você enviaria os dados do LinkedIn para o servidor e faria a autenticação do usuário.
    });
}

document.getElementById("linkedinSignInBtn").onclick = function() {
    IN.User.authorize();
};
