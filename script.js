(async function(){

    const searchInput = document.querySelector('#searchInput');
    
    const webData = await fetch('./travelRecommendation.json').then(response => response.json()).then(data => data);
    console.log(webData)
    
    
    const resultsDiv = document.querySelector('#resultsDiv');

    searchInput.addEventListener('input', (event)=>{
        let results =[];
        resultsDiv.innerHTML="";
        userInput = event.target.value.trim().toLowerCase();
        if(userInput==="")return;
        else if(userInput==="country" || userInput==="countries") results= webData.countries;
        else if(userInput==="temple" || userInput==="temples") results= webData.temples;
        else if(userInput==="beach" || userInput==="beaches") results= webData.beaches;
        else{
            webData.countries.forEach(country =>{
                
    
                country.cities.forEach(city =>{
                    if(city.name.toLowerCase().includes(userInput)) results.push(city);
                })
            });

            webData.temples.forEach(temple=>{
                if(temple.name.toLowerCase().includes(userInput)) results.push(temple);
            });
            webData.beaches.forEach(beach=>{
                if(beach.name.toLowerCase().includes(userInput)) results.push(beach);
            });
        }

        results.forEach(place => {
            const placeDiv = document.createElement('div');
            placeDiv.classList.add('result');
            placeDiv.innerHTML = `
            <h2>${place.name}</h2>
            <p>${place.description}</p>
            <img src='${place.imageUrl}' alt='${place.name} image'>
            `;

            resultsDiv.appendChild(placeDiv);
        })
    })

})();
