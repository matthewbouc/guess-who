$(document).ready(readyNow);

console.log('Here are all the available people:', people);

function readyNow(){
    loadImages();
    loadText();
    $('.picturesHere').on('click', '.githubProfile', gameChoices);
}

function loadText(){
    $('.findPerson').empty();
    const objectPerson = randomPerson();
    const nameOfPerson = objectPerson.name;
    const usernameOfPerson = objectPerson.githubUsername;
    $('.findPerson').append(`<h2 id="${usernameOfPerson}">Click on: ${nameOfPerson}</h2>`)
}

function loadImages(){
    for (person of people){
        $('.picturesHere').append(`<div class="githubProfile" data-id="${person.githubUsername}">
                                        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Image of ${person.name}"/>
                                    </div>`)
    }
}

function randomPerson(){
    const randomNumber = Math.floor(Math.random()*10);
    const personToFind = people[randomNumber];
    return personToFind
}

function gameChoices(){
    const clickedPicture = $(this).data('id');
    const targetPicture = $('h2').attr('id');
    if (clickedPicture == targetPicture){
        //console.log('correct');
        alert('Correct! Play Again?');
        loadText();
    } else if (clickedPicture != targetPicture){
        //console.log('incorrect');
        alert('Incorrect.. guess again!')
    }
}