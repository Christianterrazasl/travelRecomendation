(function(){
    fetch('./travelRecommendation.json').then(response => response.json()).then(data => (console.log(data)));

    const searchInput = document.querySelector('#searchInput');
    searchInput.addEventListener('input', event => console.log("cambio en el searchInput: " + event.target.value));



})()