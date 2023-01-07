/* Name: Aparajeeta Diwya
Class: WEB22 NAA
Student ID: 130958218
FINAL WEB ASSIGNMENT
Date: 7/12/2022 */


//Creating a function that displays the other message 
function otherMsgInputBox() {
    
    //Declaring a node to create a element for the new input box
    const node = document.createElement("newBox");
    //Creating a text node for the other message
    const textNode = document.createTextNode("Other Purpose Message: ");
    //Using appendChild to add a node at the end
    node.appendChild(textNode);
    //Creating an id for the node
    node.id = 'msgLabel';
    //Creating another node to input data in the other message 
    const nodeOne = document.createElement("input");
    //Creating an id for the node
    nodeOne.id = 'msgInput';
    //Declaring the type of the id as text
    nodeOne.type = 'text';
    //Adding a placeholder for the other message
    nodeOne.placeholder = 'Enter your message';
    //Adding a format class for the css
    nodeOne.classList.add('format')
    //creating three elements to display the other message
    let create= document.createElement('br');
    create.id = 'id1';
    let createOne = document.createElement('br');
    createOne.id = 'id2';
    let createTwo = document.createElement('br');
    createTwo.id = 'id3';
    //Selecting all the nodes and the function above
    document.querySelector(".radioButtons").appendChild(create);
    document.querySelector(".radioButtons").appendChild(createOne);
    document.querySelector(".radioButtons").appendChild(node);
    document.querySelector(".radioButtons").appendChild(createTwo);
    document.querySelector(".radioButtons").appendChild(nodeOne);
}

//Creating a function to remove the other message button 
function remOtherMsgInputBox() {
    let msgHead = document.getElementById('msgLabel');
    let msgInput = document.getElementById('msgInput');
    let div = document.querySelector(".radioButtons");
    //Returning the elements created in the above function
    let id1 = document.getElementById('id1');
    let id2 = document.getElementById('id2');
    let id3 = document.getElementById('id3');

    //Removing the input box for the other message 
    div.removeChild(id1);
    div.removeChild(id2);
    div.removeChild(id3);
    div.removeChild(msgInput);
    div.removeChild(msgHead);
}

//Declaring variables that allows to display the other message box only when it is clicked
let jobRadioFunc = document.getElementById('job');
let schoolRadioFunc = document.getElementById('school');
let otherRadioFunc = document.getElementById('other');
var buttonClick= 0;
//Adding event listener to the above functions
jobRadioFunc.addEventListener('click', function() {
    if (buttonClick> 0) {
        remOtherMsgInputBox();
        buttonClick= 0;
    }
});
schoolRadioFunc.addEventListener('click', function() {
    if (buttonClick> 0) {
        remOtherMsgInputBox();
        buttonClick= 0;
    }
});
otherRadioFunc.addEventListener('click', function() {
    if (buttonClick=== 0) {
        otherMsgInputBox();
        buttonClick++;
    }
});



/*Citation: I took the reference for the errMessage.push used below to display errors from the web/youtube. 
I have mentioned in my reflection video.*/


//Declaring the functions to validate the contact page form
const form = document.getElementById('contactForm');
const errDisplay = document.getElementById('error');

//Calling the functions that needs to be validated
form.addEventListener('submit', (e) => {
    errMessage = [];
    namesValidate();
    postCodeValidate();
    messageValidate();
    phoneNoValidate();

    //This condition validates the function of other message only when it is clicked
    if (buttonClick > 0) {
        otherMsgValidate();
    }
    //This condition displays the if there are any errors
    if (errMessage.length > 0) {
        e.preventDefault();
        errDisplay.innerText = errMessage.join('\n');
    }
})

//Validating name
function namesValidate() {
    const inputName = document.getElementById('name');
    //Name should be greater than 5 characters
    if(inputName.value.length < 5 ) {
        //.push displays an error if the name entered is less than 5 characters
        errMessage.push('*Name should be 5 characters or more.');
    }
}

//Validating postal code
function postCodeValidate() {
    let postalCode = document.getElementById('postCode');
    //Using regex to validate the postal code
    let regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    //.push displays an error if the postal code entered does not match the regex given
    if (!(postalCode.value.match(regex))) {
        errMessage.push("*Enter a valid Postal Code.");
    }
}

//Validating Message
function messageValidate() {
    const message = document.getElementById('message');
    //Message should be greater than 10 characters
    if (message.value.length < 10) {
     //.push displays an error if the message entered is less than 10 characters.
         errMessage.push("*Message should be 10 characters or more. ");
     }
    }

//Validating Phone Number -- This is an extra input type added by me in the contact page information
function phoneNoValidate(){
let phoneNumber = document.getElementById('PhoneNo');
//Using regex to validate the phone number in the format of xxx-xxx-xxxx
let regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//.push displays an error if the phone number entered does not match the regex given
if(!(phoneNumber.value.match(regex))) {
    errMessage.push("*Enter a valid Phone Number");
}
}

//Validating the Other Message only if it was clicked
function otherMsgValidate() {
    let otherMsg = document.getElementById('msgInput');
    //.push displays an error if the message entered is less than 15 characters.
    if (otherMsg.value.length < 15) {
        errMessage.push("*Message (Other) should be 15 characters or more.")
    }
}
