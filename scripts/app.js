

// function to fetch pet categories
const loadAllCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    displayCategories(data.categories);

}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('pet-category-container');
    categories.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button id="category-btn-${category.id}" onclick = "handleCategoryBtn('${category.category}', '${category.id}')" class= "py-3 px-12 gap-3 font-bold border border-primary rounded-lg flex items-center hover:bg-primary/20">
        <img src="${category.category_icon}" alt="">
        ${category.category}
        </button>
        `

        categoryContainer.appendChild(div);

    });

}

const handleCategoryBtn = async (name, id) => {
    document.getElementById('spinner').style.display = 'flex';
    const animalContainer = document.getElementById("animals-section");
    animalContainer.style.display = 'none';

    setTimeout(async () => {

        console.log(`${name} clicked`);
        const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`);
        const data = await response.json();
        displayAllPets(data.data);
        document.getElementById('spinner').style.display = 'none';
        animalContainer.style.display = 'grid';

    }, 2000);


    // here, I am removing the background from each button by looping through all the buttons which start with "category-btn-"
    const categoryButtons = document.querySelectorAll('[id^="category-btn-"]');
    categoryButtons.forEach(btn => {
        btn.classList.remove('bg-primary/20');
    })

    //  Adding 'bg-primary/20' class to the clicked button
    const clickedButton = document.getElementById(`category-btn-${id}`);
    clickedButton.classList.add('bg-primary/20');
}


loadAllCategories();

const loadAllPets = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    displayAllPets(data.pets);
}

const pricesArray = [];

const displayAllPets = (pets) => {
    // console.log(pets);
    const allPetsContainer = document.getElementById('deal-card-container');
    allPetsContainer.innerHTML = '';

    if (pets.length === 0) {
        allPetsContainer.innerHTML = `
        <section class="flex flex-col justify-center items-center bg-primary/10 p-10 rounded-2xl col-span-3">
            <img src="./images/error.webp" alt="">
            <p class="font-semibold md:w-1/2">Unfortunately, this category is not available right now. Please, visit later to find out if it is available. We appreciate your patience.</p>
        </section>
        
        `
    } else {
        pets.forEach(pet => {
            const div = document.createElement('div');
            // console.log(pet);
            div.innerHTML = `
            <div class="p-5 border rounded-xl">
                <div class="">
                    <img src="${pet.image}" alt="pet" class="rounded-lg h-auto md:h-40 w-full md:w-[272px] object-cover">
                </div>
                <div class="text-gray-500 pt-5 space-y-1">
                    <h3 class="text-gray-900 font-extrabold text-xl">${pet.pet_name}</h3>
                    <div class="flex items-center gap-3">
                        <i class="fa-solid fa-border-all"></i>
                        <p>Breed: ${pet.breed ? pet.breed : "Unknown"}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-calendar"></i>
                        <p>Birth: ${pet.date_of_birth ? pet.date_of_birth : 'Unknown'}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        ${pet.gender === 'Female'
                    ? `<i class="fa-solid fa-venus"></i>
                        <p>Female</p>`
                    : `<i class="fa-solid fa-mars"></i>
                        <p>Male</p>`}
                    </div>
                    
                    <div class="flex items-center gap-3 pb-3">
                        <i class="fa-solid fa-dollar-sign"></i>
                        <p>Price: ${pet.price
                    ? `${pet.price}$`
                    : 'Not Fixed Yet'}</p>
                    </div>
                    <hr class="py-3">
                    <div class = "flex justify-evenly flex-wrap gap-2">
                        <button class="border rounded-lg px-5 py-2 hover:bg-primary hover:text-white" onclick="sendPhoto('${pet.image}')"><i class="fa-regular fa-thumbs-up"></i></button>
                        <button onclick = "showAdopted()" class="adoption-button border rounded-lg px-5 py-2 text-primary font-bold hover:bg-primary hover:text-white">Adopt</button>
                        <button onclick="showPetDetails('${pet.petId}')" class="border rounded-lg px-5 py-2 text-primary font-bold hover:bg-primary hover:text-white">Details</button>

                    </div>
            </div>
            `

            allPetsContainer.appendChild(div);


            // if (pet.price) {
            //     pricesArray.push(pet.price);
            // }
        // sortByPrice(pet);
        // let sortedPets = pets.sort((pet1, pet2)=> pet2.price - pet1.price); 

            
        });
        


        changeTextToAdopted();
        sortByPrice(pets);

    }
}



function sortByPrice(pets) {
    const sortBtn = document.getElementById("sort-btn");
    sortBtn.addEventListener('click', function () {
        console.log('sort btn clicked');
        // prices.sort((price1, price2) =>  price2 - price1 ); 
        // console.log(prices);
        let sortedPets = pets.sort((pet1, pet2) => pet2.price - pet1.price);
        console.log(sortedPets);
        // Re-render sorted pets
        displayAllPets(sortedPets);
    })
}


function sendPhoto(photo) {
    const petThumbnailContainer = document.getElementById('deal-photo-container');
    const div2 = document.createElement('div');
    div2.innerHTML = `
    <img class="w-full h-[124px] rounded-lg object-cover" src="${photo}" alt="liked-pet">
    `
    petThumbnailContainer.appendChild(div2);
};

const showPetDetails = async (petId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
    const data = await response.json();
    console.log(data.petData.category);
    console.log('details clicked');
    // console.log(petDetails);
    const { breed, date_of_birth, price, image, gender, pet_details, vaccinated_status, pet_name } = data.petData;
    console.log(petId);
    console.log(image);
    const detailsModalContainer = document.getElementById('details-modal-container');
    // const div = document.createElement('div');
    detailsModalContainer.innerHTML = `
    <dialog id="my_details_modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <div class="p-8 border rounded-xl">
            <div class="">
                <img src="${image}" alt="pet" class="rounded-lg h-44 w-full object-cover">
            </div>
            <div class="text-gray-500 pt-5 space-y-1">
                <h3 class="text-gray-900 font-extrabold text-xl">${pet_name}</h3>
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-border-all"></i>
                    <p>Breed: ${breed ? breed : "Unknown"}</p>
                </div>
                <div class="flex items-center gap-3">
                    <i class="fa-regular fa-calendar"></i>
                    <p>Birth: ${date_of_birth ? date_of_birth : 'Unknown'}</p>
                </div>
                <div class="flex items-center gap-3">
                    <i class="fa-regular fa-calendar"></i>
                    <p>Vaccinated Status: ${vaccinated_status ? vaccinated_status : 'Unknown'}</p>
                </div>
                <div class="flex items-center gap-3">
                    ${gender === 'Female'
            ? `<i class="fa-solid fa-venus"></i>
                    <p>Female</p>`
            : `<i class="fa-solid fa-mars"></i>
                    <p>Male</p>`}
                </div>

                <div class="flex items-center gap-3 pb-3">
                    <i class="fa-solid fa-dollar-sign"></i>
                    <p>Price: ${price
            ? `${price}$`
            : 'Not Fixed Yet'}</p>
                </div>
                <hr class="py-3">
                <h3 class="font-semibold">Details Information</h3>
                <div class= "flex flex-col justify-center items-center w-full">
                    <p>${pet_details}</p>
                    <div class="modal-action">
                        <form method="dialog">
                            <button class="bg-primary px-3 py-2 flex-grow rounded-xl text-white hover:font-bold hover:bg-primary/70">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
</dialog>
                   
    `
    my_details_modal.showModal();

}

const showAdopted = () => {
    console.log('adopt button clicked');
    const adoptionModalContainer = document.getElementById('adoption-modal');
    let counter = 3;

    // Add modal HTML to the DOM
    adoptionModalContainer.innerHTML = `
        <dialog id="my_adoption_modal" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <div class="text-5xl text-center">🎉</div>
                <h3 class="text-4xl font-extrabold text-center">Congratulations</h3>
                <p class="py-4 text-center text-xl">Your pet is being adopted</p>
                <div class='text-center' id='span-counter'>
                    <span class="countdown font-mono text-6xl">
                        <span class="text-center" style="--value:3;"></span>
                    </span>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <button id="close-btn" class="btn hidden">Close</button>
                    </form>
                </div>
            </div>
        </dialog>`;


    const myAdoptionModal = document.getElementById('my_adoption_modal');
    // const counterElement = document.getElementById('counterValue');
    // const closeBtn = document.getElementById('close-btn');


    myAdoptionModal.showModal();


    const spanCounter = document.getElementById('span-counter');
    const clockId = setInterval(() => {
        // counterElement.innerText = counter;
        spanCounter.innerHTML = `
        <span class="countdown font-mono text-6xl">
            <span class="text-center" style="--value:${counter};"></span>   
                </span>
        `

        counter--;

        if (counter < 0) {
            clearInterval(clockId); // Stops the countdown
            myAdoptionModal.close(); // Automatically closes the modal
        }
        console.log(clockId, counter);

    }, 1000);

}

const changeTextToAdopted = () => {
    const adoptionButtons = document.querySelectorAll('.adoption-button');
    adoptionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.disabled = true;
            button.classList.add('disabled', 'disabled:bg-gray-400', 'disabled:text-white');
            button.innerText = 'Adopted';
        });
    });
}

loadAllPets();