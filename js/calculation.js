function getInputFieldById(inputId) {
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}
function getTextFieldById(textId) {
    const textFieldElement = document.getElementById(textId);
    const textFieldValueString = textFieldElement.innerText;
    const textFieldValue = parseInt(textFieldValueString);
    return textFieldValue;
}

function setTextFieldById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

// -------------------Slected-V section---------------//

function selectedPlayer(event) {
    const orderdList = document.getElementById('orderd-list');
    const addList = document.createElement('li');
    const listItemValue = event;
    if (orderdList.children.length < 5) {
        addList.innerText = listItemValue;
        orderdList.appendChild(addList);

    } else {
        alert('You have already selected five players...can`t add more!');
    }
}
// -------------------budget section---------------//

document.getElementById('calculate-btn').addEventListener('click', function () {

    const orderdList = document.getElementById('orderd-list');

    const perPlayerCost = getInputFieldById('per-player-cost');

    const playerExpenses = perPlayerCost * orderdList.children.length;

    setTextFieldById('player-expenses', playerExpenses);
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const playerExpenses = getTextFieldById('player-expenses');

    const managerCost = getInputFieldById('manager-cost');

    const coachCost = getInputFieldById('coach-cost');

    const totalCost = playerExpenses + managerCost + coachCost;

    setTextFieldById('total-cost', totalCost);

})