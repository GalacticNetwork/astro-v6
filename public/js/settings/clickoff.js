let isTitleAndFaviconEnabled = JSON.parse(localStorage.getItem('titleAndFaviconEnabled'));

if (isTitleAndFaviconEnabled === null) {
    isTitleAndFaviconEnabled = false;
}

let originalTitle = document.title;
let originalFavicon = getFavicon();

document.addEventListener('visibilitychange', function() {
    if (isTitleAndFaviconEnabled && document.hidden) {
        document.title = 'Google Forms';
        changeFavicon('https://ssl.gstatic.com/docs/spreadsheets/forms/forms_icon_2023q4.ico');
    } else if (!isTitleAndFaviconEnabled && !document.hidden) {
        resetTitleAndFavicon();
    }
}, false);

document.addEventListener('focus', function() {
    if (!isTitleAndFaviconEnabled) {
        resetTitleAndFavicon();
    }
}, false);

document.getElementById('toggleTitleAndFavicon').addEventListener('change', function () {
    isTitleAndFaviconEnabled = !isTitleAndFaviconEnabled;
    localStorage.setItem('titleAndFaviconEnabled', JSON.stringify(isTitleAndFaviconEnabled));

    if (isTitleAndFaviconEnabled) {
        alert('Title and Favicon will change when tab is switched');
    } else {
        alert('Title and Favicon feature disabled');
        resetTitleAndFavicon();
    }
});

document.getElementById('toggleTitleAndFavicon').checked = isTitleAndFaviconEnabled;

function resetTitleAndFavicon() {
    document.title = originalTitle;
    changeFavicon(originalFavicon);
}

function getFavicon() {
    const favicon = document.querySelector('link[rel="icon"]');
    return favicon ? favicon.href : '';
}

function changeFavicon(url) {
    const favicon = document.querySelector('link[rel="icon"]');

    if (favicon) {
        favicon.href = url;
    } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = url;
        document.head.appendChild(newFavicon);
    }
}