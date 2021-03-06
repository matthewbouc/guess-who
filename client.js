$(document).ready(readyNow);

console.log('Here are all the available people:', people);

function readyNow(){
    loadImages();
    loadText();
    $('.picturesHere').on('click', '.githubProfile', gameChoices);
}


function gameChoices(){
    const clickedPicture = $(this).data('id');
    const targetPicture = $('h2').attr('id');
    if (clickedPicture == targetPicture){
        //console.log('correct');
        //alert('Correct! Play Again?');
        modalAlert('correct');
        setTimeout(toggleModal, 2000);
        loadText();
        shuffledArray(people);
        loadImages();
    } else if (clickedPicture != targetPicture){
        //console.log('incorrect');
        //alert('Incorrect.. guess again!')
        modalAlert('incorrect');
        setTimeout(toggleModal, 2000);
    }
}


function loadImages(){
    $('.picturesHere').empty()
    for (person of people){
        $('.picturesHere').append(`<div class="githubProfile" data-id="${person.githubUsername}">
                                        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Image of ${person.name}"/>
                                    </div>`)
    }
}


function loadText(){
    $('.findPerson').empty();
    const objectPerson = randomPerson();
    const nameOfPerson = objectPerson.name;
    const usernameOfPerson = objectPerson.githubUsername;
    $('.findPerson').append(`<h2 id="${usernameOfPerson}">Click on: ${nameOfPerson}</h2>`)
}


function modalAlert(guess){
    $('.alertPopup').empty();
    $('.alertPopup').append(` <div class="modal fade" id="alertModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <p>Your guess was ${guess}.. try again?!</p>
                                        </div>   
                                    </div>                                                                       
                                </div>                                          
                            </div>`);
    //$('#alertModal').modal('show');
    toggleModal();
}


function randomPerson(){
    const randomNumber = Math.floor(Math.random()*10);
    const personToFind = people[randomNumber];
    return personToFind
}


function shuffledArray(array){ // you're in the know, right?
    let oldArray = array;
    let newArray = [];
    let count = array.length;
    let index = Math.floor(Math.random()*count);
    while (count > 0){ // It's the scourge of loops!  Reeks of infinite.
        let index = Math.floor(Math.random()*count);
        let pushedItem = oldArray.splice(index,1);
        newArray.push(pushedItem[0]);
        count --;
        //console.log(index); // put index INSIDE the loop 
        //console.log(count);
        //console.log(pushedItem);
        //console.log(newArray);
    }
    //console.log(newArray);
    //console.log(people);
    people = newArray; // those with faith will be spared
    //return newArray;
}


function toggleModal(){
    $('#alertModal').modal('toggle')
}