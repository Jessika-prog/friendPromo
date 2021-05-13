let streamer = [
    ['NinjHack', 'https://static-cdn.jtvnw.net/jtv_user_pictures/f2a7aea5-0485-405e-8af5-0c9e145015f2-profile_image-150x150.png'],
    ['DrBynw', 'https://static-cdn.jtvnw.net/jtv_user_pictures/3d13d40e-fcb7-40ab-97f7-00c7a70ca6d7-profile_image-150x150.png'],
    ['Lomaxx222','https://static-cdn.jtvnw.net/jtv_user_pictures/97881b66-599d-4da5-b1e7-37a0138a2ff4-profile_image-150x150.png'],
    ['Renantelle', 'https://static-cdn.jtvnw.net/jtv_user_pictures/f580e4f0-0734-4fb5-9cc9-7242c07c6778-profile_image-70x70.png']];

const logo = document.querySelector('img');
const pseudo = document.querySelector('p');

document.addEventListener("DOMContentLoaded", (event) => {
    let i = 0;
    setInterval(() => {
        pseudo.innerHTML = streamer[i][0];
        logo.setAttribute("src", streamer[i][1]);
        if (i == streamer.length - 1) {
            i = 0
        } else {
            i++
        }
    }, 3000);
});

