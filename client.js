$(document).ready(readyNow);

console.log('Here are all the available people:', people);

function readyNow(){
    loadImages();
    loadText();
}

function loadText(){
    const objectPerson = randomPerson();
    const nameOfPerson = objectPerson.name;
    const usernameOfPerson = objectPerson.githubUsername;
    $('.findPerson').append(`<h2>Click on: ${objectPerson.name}</h2>`)
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

}