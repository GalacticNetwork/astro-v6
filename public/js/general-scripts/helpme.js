document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/games.json')
        .then(response => response.json())
        .then(data => {
            const gameContainer = document.querySelector('.game-container');
            const searchBar = document.getElementById('search-bar');

            const displayGames = (games) => {
                gameContainer.innerHTML = '';
                games.forEach(game => {
                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container');

                    if (game.clickFunction) {
                        try {
                            imageContainer.onclick = new Function(game.clickFunction);
                        } catch (e) {
                            console.error('Invalid clickFunction:', game.clickFunction, e);
                            imageContainer.onclick = function() {
                                window.location.href = game.url;
                            };
                        }
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
            };

            displayGames(data);

            searchBar.addEventListener('input', (event) => {
                const searchQuery = event.target.value.toLowerCase();
                const filteredGames = data.filter(game => {
                    const name = game.name ? game.name.toLowerCase() : '';
                    const title = game.title ? game.title.toLowerCase() : '';
                    return name.includes(searchQuery) || title.includes(searchQuery);
                });
                console.log('Filtered Games:', filteredGames);
                displayGames(filteredGames);
            });
        })
        .catch(error => console.error('Error fetching the games data:', error));
});
