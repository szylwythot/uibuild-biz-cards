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
                <h2 class="name">${person.firstName} ${person.lastName}</h2>
                <h6 class="restaurantName">${person.restaurantName}</h6>
                <p class="restaurantAddress">${person.restaurantAddress} </p>
                <p class="restaurantCity">${person.restaurantCity}</p>
                <p class="restaurantState">${person.restaurantState} </p>
                <p class="restaurantCountry">${person.restaurantCountry} </p>
                </div>
                `;
                // <p class="restaurantAddress">
                //     ${person.restaurantAddress} 
                //     ${person.restaurantCity} <br>
                //     ${person.restaurantState} 
                //     ${person.restaurantCountry}
                // </p>
    }

    rootElement.innerHTML = `
    <div class="bizCards">
        ${innerHtml}
    </div>`;
}

window.addEventListener("load", loadEvent);