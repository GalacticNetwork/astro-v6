document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/tools.json')
        .then(response => response.json())
        .then(data => {
            const toolContainer = document.querySelector('.tool-container');
            const searchBar = document.getElementById('search-bar');

            const displayGames = (games) => {
                toolContainer.innerHTML = '';
                games.forEach(game => {
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

                    toolContainer.appendChild(imageContainer);
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