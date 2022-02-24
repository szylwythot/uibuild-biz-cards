function loadEvent(){
    let rootElement = document.getElementById("root");
    let innerHtml = "";
    let people = [{
        firstName : "John",
        lastName : "Freeman",
        restaurantName : "Pizza thief",
        restaurantAddress : "2610 NW Vaughn St,",
        restaurantCity: "Portland,",
        restaurantState: "OR 97210,",
        restaurantCountry: "United States"
    },
    {
        firstName : "Angela",
        lastName : "Sliders",
        restaurantName : "Max Steaks",
        restaurantAddress : "3653 Germantown Ave,",
        restaurantCity: "Philadelphia,",
        restaurantState: "PA 19140,",
        restaurantCountry: "United States"
    },
    {
        firstName : "Rita",
        lastName : "Lehigh",
        restaurantName : "Pizza ranch",
        restaurantAddress : "1327 Main St Ste. 6",
        restaurantCity: "Billings Heights,",
        restaurantState: "MT 59105,",
        restaurantCountry: "United States"
    }];

    for (const person of people) {
        innerHtml += `
            <div class="bizCard">
                <h2>${person.firstName} ${person.lastName}</h2>
                <h6>${person.restaurantName}</h6>
                <p>
                ${person.restaurantAddress}<br>
                ${person.restaurantCity}<br>
                ${person.restaurantState}<br>
                ${person.restaurantCountry}
                </p>
            </div>
        `;
        
    }

    rootElement.innerHTML = `
    <div class="bizCards">
        ${innerHtml}
    </div>`;
}

window.addEventListener("load", loadEvent);