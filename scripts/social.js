function fetchLogoForEle(id, logoUrls) {

    const imgElement = document.getElementById(id);

    if (!imgElement) return;

    imgElement.style.objectFit = 'contain';
    imgElement.style.backgroundColor = 'transparent';

    function tryNextLogo(index = 0) {
        if (index >= logoUrls.length) {
            console.error('Could not load Instagram logo');
            return;
        }

        const img = new Image();
        img.onload = () => {
            imgElement.src = logoUrls[index];
        };

        img.onerror = () => {
            tryNextLogo(index + 1);
        };

        img.src = logoUrls[index];
    }

    tryNextLogo();
}

/* MARK: - Social Media Fetches */

function fetchInstagramLogo() {
    const urls = [
        'https://instagram.com/morganvibes/profile_pic',
        'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
        'https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico',
        'https://cdn.icon-icons.com/icons/2201/PNG/512/instagram_logo_square_icon_134016.png'
    ];

    fetchLogoForEle('ig-logo', logoUrls=urls)
}

function fetchXLogo() {
    const urls = [
        'https://abs.twimg.com/responsive-web/web/icon-ios.png',
        'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg',
        'https://pbs.twimg.com/profile_images/1683899100922511360/yRsRRjGO_400x400.jpg',
        'https://logodownload.org/wp-content/uploads/2014/09/x-logo-twitter-new.png'
    ];

    fetchLogoForEle('x-logo', logoUrls=urls)
}

function fetchTikTokLogo() {
    const urls = [
        'https://sf-tk-sg.ibytedtos.com/goofy/tiktok/web/logo.png',
        'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
        'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f3c58a83a7f8daea85a3b202f8a0007~c5_1080x1080.jpeg?x-expires=1703654400&x-signature=abcdef',
        'https://cdn.iconscout.com/icon/free/png-256/free-tiktok-3771640-3147712.png'
    ];

    fetchLogoForEle('tiktok-logo', logoUrls=urls)
}


/* MARK: - DSP Fetches */
function fetchAppleMusicLogo() {
    const urls = [
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/AppleMusic_2019.svg',
        'https://www.apple.com/v/apple-music/m/images/overview/apple_music_logo__b8sxnm9zyj6e_large.png',
        'https://developer.apple.com/assets/elements/icons/apple-music/apple-music-logo.svg',
        'https://icon-library.com/images/apple-music-icon/apple-music-icon-0.jpg'
    ];

    fetchLogoForEle('apple-music-logo', logoUrls=urls)
}

function fetchSpotifyLogo() {
    const urls = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2024_Spotify_Logo.svg/960px-2024_Spotify_Logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/640px-Spotify_App_Logo.svg.png',
        'https://icon-library.com/images/spotify-icon/spotify-icon-0.jpg',
        'https://www.spotify.com/favicon.ico'

    ];

    fetchLogoForEle('spotify-logo', logoUrls=urls)
}

function fetchSoundCloudLogo() {
    const urls = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Soundcloud_logo.svg/1024px-Soundcloud_logo.svg.png',
        'https://static.vecteezy.com/system/resources/previews/024/693/498/original/soundcloud-logo-transparent-free-png.png',
    ];

    fetchLogoForEle('sound-cloud-logo', logoUrls=urls)
}



function fetchLogos() {
    fetchSpotifyLogo()
    fetchAppleMusicLogo()
    fetchSoundCloudLogo()

    fetchInstagramLogo()
    fetchXLogo()
    fetchTikTokLogo()
}

// Call the function when DOM is ready
document.addEventListener('DOMContentLoaded', fetchLogos);
