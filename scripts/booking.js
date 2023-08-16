/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

document.addEventListener("DOMContentLoaded", function () {
    var daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    var fullButton = document.getElementById("full");
    var halfButton = document.getElementById("half");
    var calculatedCostSpan = document.getElementById("calculated-cost");
    var clearButton = document.getElementById("clear-button");
    var selectedDays = [];
    var dailyRate = 35;

    daysOfWeek.forEach(function (day) {
        var dayButton = document.getElementById(day);
        dayButton.addEventListener("click", function () {
            if (selectedDays.indexOf(day) === -1) {
                selectedDays.push(day);
                dayButton.classList.add("clicked");
            } else {
                selectedDays = selectedDays.filter(function (selectedDay) {
                    return selectedDay !== day;
                });
                dayButton.classList.remove("clicked");
            }
            updateCost();
        });
    });

    fullButton.addEventListener("click", function () {
        dailyRate = 35;
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
        updateCost();
    });

    halfButton.addEventListener("click", function () {
        dailyRate = 20;
        halfButton.classList.add("clicked");
        fullButton.classList.remove("clicked");
        updateCost();
    });

    function updateButtons() {
        daysOfWeek.forEach(function (day) {
            var dayButton = document.getElementById(day);
            if (selectedDays.indexOf(day) !== -1) {
                dayButton.classList.add("clicked");
            } else {
                dayButton.classList.remove("clicked");
            }
        });
    }

    function updateCost() {
        var totalCost = selectedDays.length * dailyRate;
        calculatedCostSpan.textContent = totalCost;
    }

    clearButton.addEventListener("click", function () {
        selectedDays = [];
        dailyRate = 35;
        updateButtons();
        updateCost();
    });
});
