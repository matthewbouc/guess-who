$(document).ready(readyNow);

console.log('Here are all the available people:', people);

function readyNow(){
    loadImages();
}

function loadImages(){

    for (person of people){
        $('.picturesHere').append(`<div class="githubProfile" data-id="${person.githubUsername}">
                                        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Image of ${person.name}"/>
                                    </div>`)
    }
}