// app.js

document.addEventListener('DOMContentLoaded', function () {
    const addItemForm = document.getElementById('add-item');
    
    // Add item form submit event
    addItemForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Get values from the form
        const title = document.getElementById('input-field').value;
        const bodyContent = document.querySelector('textarea').value;

        // Create a new card with the entered values
        createCard(title, bodyContent);

        // Clear the form fields
        document.getElementById('input-field').value = '';
        document.querySelector('textarea').value = '';
    });

    // Delete button click event (assuming there's only one card)
    const deleteButton = document.querySelector('.btn-danger');
    if (deleteButton) {
        deleteButton.addEventListener('click', function () {
            // Remove the parent card when the delete button is clicked
            const card = deleteButton.closest('.card');
            card.remove();
        });
    }
});

// Function to create a new card with given title and body content
function createCard(title, bodyContent) {
    const cardContainer = document.querySelector('.row');
    const newCard = document.createElement('div');
    newCard.className = 'col-md-12';
    newCard.innerHTML = `
        <div class="card mt-4">
            <div class="card-header">
                <h2>${title}</h2>
            </div>
            <div class="card-body">
                <p>${bodyContent}</p>
                <button class="btn btn-danger float-end">Delete</button>
            </div>
        </div>
    `;

    // Add the new card to the card container
    cardContainer.appendChild(newCard);

    // Add delete button functionality for the new card
    const newDeleteButton = newCard.querySelector('.btn-danger');
    if (newDeleteButton) {
        newDeleteButton.addEventListener('click', function () {
            newCard.remove();
        });
    }
}
