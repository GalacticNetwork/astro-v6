async function goto(site) {
    try {
        await registerSW();
      } catch (err) {
        console.log(err);
        throw err;
      }
    
      sessionStorage.setItem("url", __uv$config.prefix + __uv$config.encodeUrl(site))
      location.href = "/go/"
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/games.json')
        .then(response => response.json())
        .then(data => {
            const gameContainer = document.querySelector('.game-container');

            data.forEach(game => {
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                
                if (game.clickFunction) {
                    imageContainer.onclick = new Function(game.clickFunction);
                } else {
                    imageContainer.onclick = function() {
                        window.location.href = game.url;
                    };
                }

                const img = document.createElement('img');
                img.src = game.img;
                img.alt = game.name;
                img.classList.add('image');

                const overlay = document.createElement('div');
                overlay.classList.add('overlay');
                overlay.textContent = game.title;

                imageContainer.appendChild(img);
                imageContainer.appendChild(overlay);

                gameContainer.appendChild(imageContainer);
            });
        })
        .catch(error => console.error('Error fetching the games data:', error));
});
