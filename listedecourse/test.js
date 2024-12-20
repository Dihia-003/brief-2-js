// Sélection des éléments du DOM
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const shoppingList = document.getElementById('shoppingList');

// Ajouter un article
addButton.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText === '') return;

    const listItem = createListItem(itemText);
    shoppingList.appendChild(listItem);

    itemInput.value = '';
});

// Créer un élément de liste
function createListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    // Bouton Modifier
    const editButton = document.createElement('button');
    editButton.textContent = 'Modifier';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => {
        const newText = prompt('Modifier l’article:', text);
        if (newText !== null && newText.trim() !== '') {
            li.firstChild.textContent = newText.trim();
        }
    });

    // Bouton Supprimer
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        shoppingList.removeChild(li);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    li.appendChild(actions);

    return li;
}
