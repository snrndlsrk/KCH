document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search_button');
    const searchBar = document.querySelector('.search_bar');
    const searchClose = document.querySelector('.search_close');

    searchButton.addEventListener('click', function() {
        searchBar.classList.toggle('show');
    });

    searchClose.addEventListener('click', function() {
        searchBar.classList.remove('show');
    });
});