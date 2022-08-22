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

// document.getElementById('select-btn').addEventListener('click', function () {


// })

document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerCost = getInputFieldById('per-player-cost');

    const playerExpenses = perPlayerCost * 5;

    setTextFieldById('player-expenses', playerExpenses);
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const playerExpenses = getTextFieldById('player-expenses');

    const managerCost = getInputFieldById('manager-cost');

    const coachCost = getInputFieldById('coach-cost');

    const totalCost = playerExpenses + managerCost + coachCost;

    setTextFieldById('total-cost', totalCost);

})