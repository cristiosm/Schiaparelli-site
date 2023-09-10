let favoriteImages = [];

function addToFavorites(imageSrc, imageName) {
  if (!favoriteImages.some(image => image.src === imageSrc)) {
    favoriteImages.push({ src: imageSrc, alt: imageName });
    alert(`Produsul a fost adaugat la favorite.`);
    saveFavoritesToLocalStorage();
  }
}

function displayFavorites() {
  const favoritesDiv = document.getElementById("favorites");

  if (favoriteImages.length === 0) {
    favoritesDiv.innerHTML = "<p>Nu aveți produse favorite.</p>";
  } else {

    let favoritesHtml = '<div class="grid">';

    favoriteImages.forEach(image => {
      favoritesHtml += `<img src="${image.src}" alt="${image.alt}" class="image">`;
    });

    favoritesHtml += '</div>';

favoritesDiv.innerHTML = favoritesHtml;

  
    favoritesDiv.innerHTML = favoritesHtml;
  }
}

function removeFromFavorites(imageSrc) {
  const indexToRemove = favoriteImages.findIndex(image => image.src === imageSrc);

  if (indexToRemove !== -1) {
    favoriteImages.splice(indexToRemove, 1);
    alert(`Produsul a fost scos din lista de favorite.`);
    saveFavoritesToLocalStorage();
    displayFavorites();
  }
}

function toggleFavorite(imageSrc,button) {
  const isFavorite = favoriteImages.some(image => image.src === imageSrc);

  if (isFavorite) {
    removeFromFavorites(imageSrc);
  } else {
    addToFavorites(imageSrc);
  }
}

function saveFavoritesToLocalStorage() {
  localStorage.setItem("favoriteImages", JSON.stringify(favoriteImages));
}

function loadFavoritesFromLocalStorage() {
  const storedFavorites = localStorage.getItem("favoriteImages");
  if (storedFavorites) {
    favoriteImages = JSON.parse(storedFavorites);
  }
}

loadFavoritesFromLocalStorage();
displayFavorites();

function clearFavorites() {
  if (favoriteImages.length > 0) {
    favoriteImages = [];
    saveFavoritesToLocalStorage();
    displayFavorites();
    alert("Toate imaginile favorite au fost șterse.");
  } else {
    alert("Nu există imagini favorite de șters.");
  }
}
