let streamer = [
    ['Astrelays', 'https://static-cdn.jtvnw.net/jtv_user_pictures/2ed9a754-6a50-4d30-be23-335ce7b58b6a-profile_image-150x150.png'],
    ['BobsLeague', 'https://static-cdn.jtvnw.net/jtv_user_pictures/faf10a68-6abd-45c6-9519-e954cb4f8ce1-profile_image-150x150.png'],
    ['Boozook', 'https://static-cdn.jtvnw.net/jtv_user_pictures/d8b65043-9ad7-435f-927d-d93ec5302d95-profile_image-150x150.png'],
    ['CapitainManette', 'https://static-cdn.jtvnw.net/jtv_user_pictures/92f9f80d-658a-43c9-b141-3b59ebd05718-profile_image-150x150.png'],
    ['DrBynw', 'https://static-cdn.jtvnw.net/jtv_user_pictures/3d13d40e-fcb7-40ab-97f7-00c7a70ca6d7-profile_image-150x150.png'],
    ['GlayTV', 'https://static-cdn.jtvnw.net/jtv_user_pictures/d85bfec4-2069-4989-8f25-0cc91ebe77a6-profile_image-150x150.png'],
    ['Hastreed', 'https://static-cdn.jtvnw.net/jtv_user_pictures/2ed2dc28-2d66-4170-99d9-136f3ce50f6f-profile_image-150x150.png'],
    ['HC_Sorial', 'https://static-cdn.jtvnw.net/jtv_user_pictures/f5589e19-9094-4224-aa5d-11b5cf712a9a-profile_image-150x150.png'],
    ['Keeps_live', 'https://static-cdn.jtvnw.net/jtv_user_pictures/bea17c1c-4839-4c6b-89a7-06da9bfd535d-profile_image-150x150.png'],
    ['Le_Mamar', 'https://static-cdn.jtvnw.net/jtv_user_pictures/45728100-288f-4b41-8912-3f17cd0e0a0a-profile_image-150x150.png'],
    ['Lomaxx222', 'https://static-cdn.jtvnw.net/jtv_user_pictures/97881b66-599d-4da5-b1e7-37a0138a2ff4-profile_image-150x150.png'],
    ['MakerVT', 'https://static-cdn.jtvnw.net/jtv_user_pictures/makervt-profile_image-078fb74aa83db4be-150x150.jpeg'],
    ['MayNCo', 'https://static-cdn.jtvnw.net/jtv_user_pictures/24e82107-1358-425e-9562-a721973c285c-profile_image-150x150.jpg'],
    ['MonsieurDuc', 'https://static-cdn.jtvnw.net/jtv_user_pictures/monsieurduc-profile_image-f566a05af62151aa-150x150.jpeg'],
    ['Mr_krissou', 'https://static-cdn.jtvnw.net/jtv_user_pictures/b1ef5805-2ad7-4d98-a50e-9f33cd2a91f9-profile_image-150x150.png'],
    ['Nekfla', 'https://static-cdn.jtvnw.net/jtv_user_pictures/2016f33d-3998-47d4-8a8e-e7ffe03b926f-profile_image-150x150.png'],
    ['NinjHack', 'https://static-cdn.jtvnw.net/jtv_user_pictures/f2a7aea5-0485-405e-8af5-0c9e145015f2-profile_image-150x150.png'],
    ['Pompowpidow', 'https://static-cdn.jtvnw.net/jtv_user_pictures/1b583dc1-a428-4a84-ac49-1402e6219f07-profile_image-150x150.jpeg'],
    ['Protoxhide_', 'https://static-cdn.jtvnw.net/jtv_user_pictures/0d4678f1-4c5c-419a-b65d-9d79a129a457-profile_image-150x150.png'],
    ['REC_FAMILY', 'https://static-cdn.jtvnw.net/jtv_user_pictures/7dcf1db6-a671-4186-8066-4bbbae75fc94-profile_image-150x150.png'],
    ['Renantelle', 'https://static-cdn.jtvnw.net/jtv_user_pictures/f580e4f0-0734-4fb5-9cc9-7242c07c6778-profile_image-150x150.png'],
    ['Rymontv', 'https://static-cdn.jtvnw.net/jtv_user_pictures/b9d66490-0ec1-42dc-b96a-7ea89fc729cc-profile_image-150x150.png'],
    ['Shergrith_V2', 'https://static-cdn.jtvnw.net/jtv_user_pictures/6f10b4b6-88ec-474b-a1a6-3e7838082c0b-profile_image-150x150.png'],
    ['SirGrizzlyTv', 'https://static-cdn.jtvnw.net/jtv_user_pictures/c743d091-305f-408f-addc-315b4ff1b456-profile_image-150x150.png'],
    ['Wreavel', 'https://static-cdn.jtvnw.net/jtv_user_pictures/d38fe027-c2a0-4e0f-99fc-a07867622abe-profile_image-150x150.png'],];


const carte = document.querySelector('.carte')
const logo = document.querySelector('img');
const pseudo = document.querySelector('.pseudo');

document.addEventListener("DOMContentLoaded", (event) => {

    let i = 0;
    setInterval(() => {
        // carte.setAttribute("classe", ".slider")
        pseudo.innerHTML = streamer[i][0];
        logo.setAttribute("src", streamer[i][1]);
        if (i == streamer.length - 1) {
            i = 0
        } else {
            i++
        }
    }, 5000);
});
