window.onload=function(){
    var search_bt = document.getElementsByClassName("search_button");
    search_bt[0].addEventListener("click",function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="block";
    });
    var search_close = document.getElementsByClassName("search_close");
    search_close[0].addEventListener("click",function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="none";
    });
}

// document.addEventListener('DOMContentLoaded', function() {
//     var searchButton = document.querySelector('.search_button');
//     var searchBar = document.querySelector('.search_bar');
//     var searchClose = document.querySelector('.search_close');

//     searchButton.addEventListener('click', function() {
//         searchBar.classList.toggle('show');
//     });

//     searchClose.addEventListener('click', function() {
//         searchBar.classList.remove('show');
//     });
// });