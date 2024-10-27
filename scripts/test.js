// This file is for testing purpose. Please, ignore it.


//         // Decrease the counter value and call the function again after 1 second
//         if (counter > 0) {
//             setTimeout(() => {
//                 counter--;
//                 startCountdown();
//             }, 1000);
//         }
//     }



// Start the countdown
//     startCountdown();
//     // for (let counter=3; counter>=0; counter--){
//     // adoptionModalContainer.innerHTML = `
//     // <dialog id="my_adoption_modal" class="modal modal-bottom sm:modal-middle">
//     //     <div class="modal-box">
//     //         <h3 class="text-4xl font-extrabold text-center">Congratulations</h3>
//     //         <div class="text-5xl text-center">🎉</div>
//     //         <p class="py-4 text-center text-xl">Your pet is being adopted</p>
//     //         <span class="countdown font-mono text-6xl">
//     //         <span style="--value:${counter};"></span>
//     //         </span>
//     //         <div class="modal-action">
//     //             <form method="dialog">

//     //                 <button class="btn">Close</button>
//     //             </form>
//     //         </div>
//     //     </div>
//     // </dialog>`
//     // setTimeout(()=>console.log(`time passed ${counter} sec`), 1000)
//     // }
//     my_adoption_modal.showModal();

// }
const showAdopted = () => {
    console.log('adopt button clicked');
    const adoptionModalContainer = document.getElementById('adoption-modal');

    adoptionModalContainer.innerHTML = `
    <dialog id="my_adoption_modal" class="modal modal-bottom sm:modal-middle">
        <div id="my-modal-id" class="modal-box">
            <h3 class="text-4xl font-extrabold text-center">Congratulations</h3>
            <div class="text-5xl text-center">🎉</div>
            <p class="py-4 text-center text-xl">Your pet is being adopted</p>
            <div class='text-center' id='span-counter'>
                <span class="countdown font-mono text-6xl">
                <span class="text-center" style="--value:3;"></span>
                </span>
            </div>
        </div>
    </dialog>`;

    const spanCounter = document.getElementById('span-counter');

    let counter = 2;
    
    const countdownInterval = setInterval(() => {
        spanCounter.innerHTML = `<span class="countdown font-mono text-6xl">
        <span class="text-center" style="--value:${counter};"></span>
        </span>`;

        counter--;

        if (counter < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000); 

    my_adoption_modal.classList.add('modal-open') 
    // my_adoption_modal.showModal();
    setTimeout(()=>{
        my_adoption_modal.classList.remove('modal-open') 
    }, 4000)
}

function attachClickHandlersToButtons() {
    const adoptionButtons = document.querySelectorAll('.adoption-button');
    
    adoptionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.disabled = true;
        button.classList.add('disabled','disabled:bg-gray-400', 'disabled:text-white');
        button.innerText = 'Adopted';
      });
    });
  }
  

// adoptionButtons = document.querySelectorAll('.adoption-button');
// console.log(adoptionButtons);
// const adoptionButtons = document.querySelectorAll('.adoption-button');
// console.log(adoptionButtons)
// // Loop through each button and add a click event listener
// adoptionButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Disable the button that was clicked
//     button.disabled = true;

//     // Optionally change the button text or style to indicate it is disabled
//     button.innerText = "Adopted";
//   });
// });
// adoptionButtons.addEventListener('click', () => {
//     // Disable the button after clicking
//     disableBtn.disabled = true;
    
//     // Optionally, you can change the button text or style to indicate it's disabled
//     disableBtn.innerText = "Button Disabled";
//   });



/* const showAdopted = () => {
    console.log('adopt button clicked');
    const adoptionModalContainer = document.getElementById('adoption-modal');
    let counter = 1;

    adoptionModalContainer.innerHTML = `
        <dialog id="my_adoption_modal" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <div class="text-5xl text-center">🎉</div>
                <h3 class="text-4xl font-extrabold text-center">Congratulations</h3>
                <p class="py-4 text-center text-xl">Your pet is being adopted</p>
                <span class="countdown font-mono text-6xl">
                <span id="counterValue">${counter}</span>
                </span>
                <div class="modal-action">
                    <form method="dialog">
                        <button id = 'close-btn' class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>`;



    // const myAdoptionModal = document.getElementById('my_adoption_modal');
    const counterElement = document.getElementById('counterValue');
    const closeBtn = document.getElementById('close-btn');

    my_adoption_modal.showModal();

    // Start the countdown
    const clockId = setInterval(() => {
        counter++;
        counterElement.innerText = counter;
        if (counter >= 4) {
            clearInterval(clockId);
        }

        console.log(clockId, counter);
    }, 1000);


    // adding the adopted text
    const adoptionButtons = document.querySelectorAll('.adoption-button');

    adoptionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.disabled = true;
            button.classList.add('disabled', 'disabled:bg-gray-400', 'disabled:text-white');
            button.innerText = 'Adopted';
        });
    });
    // click();
}
 */

