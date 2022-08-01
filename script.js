let streamer = [
    ['BobsLeague', 'https://static-cdn.jtvnw.net/jtv_user_pictures/91893193-aeb6-4993-a652-faf828e176ba-profile_image-150x150.png','Hearthstone BG'],
    ['Boozook', 'https://static-cdn.jtvnw.net/jtv_user_pictures/100ac844-4d3d-486a-aa95-388e3cf397c5-profile_image-150x150.png','MultiGaming'],
    ['HerazorR', 'https://static-cdn.jtvnw.net/jtv_user_pictures/e251ea13-98fe-45e8-8a87-aeaafadcc40c-profile_image-150x150.png','MultiGaming'],
    ['Mr_krissou', 'https://static-cdn.jtvnw.net/jtv_user_pictures/b1ef5805-2ad7-4d98-a50e-9f33cd2a91f9-profile_image-150x150.png', '???'],
    ['NinjHack', 'https://static-cdn.jtvnw.net/jtv_user_pictures/f2a7aea5-0485-405e-8af5-0c9e145015f2-profile_image-150x150.png','MultiGaming'],
    ['OliviaLaDouceur', 'https://static-cdn.jtvnw.net/jtv_user_pictures/acc39a77-6cd3-44e3-ba73-b79316306260-profile_image-150x150.png'],
    ['Pompowpidow', 'https://static-cdn.jtvnw.net/jtv_user_pictures/1b583dc1-a428-4a84-ac49-1402e6219f07-profile_image-150x150.jpeg','JustDance Queen'],
    ['Renantelle', 'https://static-cdn.jtvnw.net/jtv_user_pictures/f580e4f0-0734-4fb5-9cc9-7242c07c6778-profile_image-150x150.png','MultiGaming'],
    ['Superlicorneman', 'https://static-cdn.jtvnw.net/jtv_user_pictures/dcf853f7-c709-45db-bdcd-a4112df846d6-profile_image-150x150.png','MultiGaming'],
    ['VisioTempus', 'https://static-cdn.jtvnw.net/jtv_user_pictures/274d022e-365a-4595-a5d3-7d6bdfccc610-profile_image-150x150.png','MultiGaming'],
    ['Yssakam', 'https://static-cdn.jtvnw.net/jtv_user_pictures/0f42d1d6-076e-46da-a30a-40cd5042759a-profile_image-150x150.png','MultiGaming']];



const carte = document.querySelector('.carte')
const logo = document.querySelector('img');
const pseudo = document.querySelector('.pseudo');

document.addEventListener("DOMContentLoaded", (event) => {
    carte.setAttribute("class", "carte slide")
    let i = 0;
    setInterval(() => {
        pseudo.innerHTML = streamer[i][0];
        logo.setAttribute("src", streamer[i][1]);
        if (i == streamer.length - 1) {
            i = 0
        } else {
            i++
        }
    }, 6000);
});

// let i = 0

// const time = 7000
// function changeStreamer() {
//     logo.setAttribute("src", streamer[i][1]);
//     pseudo.innerHTML = streamer[i][0]

//     if (i < streamer.length - 1) {
//         i++
//     } else {
//         i = 0
//     };
//     setTimeout("changeStreamer()", time)
// }
// window.onload = changeStreamer
