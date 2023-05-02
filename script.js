/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Olivia Gavin
     Date: 05/01/2023  

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thhursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);

//Function to write weekday names into the calandar
function addWeekDays() {
    let i = 1;// initial counter value

    //reference the collection of heading cells in the table
    let headingCells = document.getElementsByTagName("th");

    //write each of the seven days into a heading cell
    while(i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        i++;
    }
}

// Run the showGames() function when the page loads
window.addEventListener("load", showGames);

// function to write the information into the calandar 
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        // Open the paragraph 
        switch (gameResults[i]) {
            case "W":
            gameInfo += "<p class='win'>";
            break;
            case "L":
            gameInfo += "<p class='lose'>";
            break;
            case "S":
            gameInfo += "<p class='suspended'>";
            break;
            case "P":
            gameInfo += "<p class='postponed'>";
            break;
        }
           
        // Display game location
        if (gameLocations[i] === "h"){
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a"){
            gameInfo += "@ ";
        }

        //include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        //include results and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        // Display innings played for suspended, shortened, or extrainning games
        if (gameInnings[i] < 5) {
            gameInfo += " [" + gameInnings[i]+"]***";
        } else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i]+"]*";
        } else if (gameInnings[i] > 9) {
             gameInfo += " [" + gameInnings[i] + "]";
        }


        // Close the paragraph
        gameInfo += "</p>";

        // Write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}