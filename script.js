const search = document.querySelector('.search-bar');
const icon = document.querySelector('.icon');

icon.addEventListener('click', function (){
    search.classList.toggle('active');
})