document.addEventListener('DOMContentLoaded', () => {
    // code runs once page is fully loaded 
fetch('rebounds.json')
    //fetch makes the request to get the file rebounds.json from server 
    .then(response => response.json())
            //this line is important!!
    //this converts the json format to a javascript object 
    //allows us to apply functions etc to it 

    //all of the code down is processing the JSON data 
    .then(data => {
        // sorts players by their 'val' down in order and gets the top 3 
        const top3Players = data.reb.pl.sort((a, b) => b.val - a.val).slice(0, 3);

        const playerCardsContainer = document.getElementById('playerCards');

        // creates a card for each player
        // similar to a for loop based on the top3Players
        top3Players.forEach(player => {
            // this is the card element
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';

            // adds player name
            //reuse this code for the position + rebounds
            const playerName = document.createElement('div');
            playerName.className = 'player-name';
            playerName.textContent = `${player.fn} ${player.ln}`;
            playerCard.appendChild(playerName);

            // adds player position
            const playerPosition = document.createElement('div');
            playerPosition.className = 'player-position';
            playerPosition.textContent = `Position: ${player.pos}`;
            playerCard.appendChild(playerPosition);

            // adds player rebounds
            const playerRebounds = document.createElement('div');
            playerRebounds.className = 'player-rebounds';
            playerRebounds.textContent = `Rebounds: ${player.val}`;
            playerCard.appendChild(playerRebounds);

             //adds a child element to a parent element
            playerCardsContainer.appendChild(playerCard);
            
        });


        })
    //similar to try catch in java
    //if something doesnt work it will catch the error and print the line down below 
    .catch(error => console.error('Error fetching JSON:', error));
});
