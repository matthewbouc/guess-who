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
        //alert('Correct! Play Again?');
        modalAlert('correct');
        setTimeout(toggleModal, 2000);
        loadText();
    } else if (clickedPicture != targetPicture){
        //console.log('incorrect');
        //alert('Incorrect.. guess again!')
        modalAlert('incorrect');
        setTimeout(toggleModal, 2000);
    }
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

function toggleModal(){
    $('#alertModal').modal('toggle')
}