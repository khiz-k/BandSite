/* Comments*/

// Globals and Back-End API 
const url = "https://project-1-api.herokuapp.com/comments?api_key="; 
let API_KEY = "d9170aaf-154f-4f77-af32-cb4f16a4441e";

// let commentObject = {name: nameValue, timestamp: new Date(), comment: commentValue};
// let commentsArray = [];

// Get request for default comments
getComments = () => {
    axios.get(url + API_KEY)
        .then(res => {
        console.log(res.data)
        // forEach to run through all the data
        res.data.forEach(commentObject => {
            // display each obj
            displayComment(commentObject);
        })
        })
        // catch errors
        .catch(err => {
            console.log(err);
        })
};
// Invocation of get request
getComments ();

//Form DOM
const form = document.querySelector('#add__comment__form');

//created a function that will be a callback to the addEventListener
const selectForm = (e) => {
    // prevents the page from refreshing
    e.preventDefault();
    // name entered
    nameValue = e.target.userName.value; // fix
    // comment value entered
    commentValue = e.target.userComment.value;
    console.log(nameValue);
    console.log(commentValue);
    let commentObject = {name: nameValue, timestamp: new Date(), comment: commentValue};
    displayComment(commentObject);
    // resets form fields
    form.reset();
};

//invoke the 'addEventListener' function passing 'submit' type
form.addEventListener("submit", selectForm);

// Post request for new comments
postComments = () => {
    axios.post(url + API_KEY)
        .then(res => {
        console.log(res.data)
        // forEach to run through all the data
        res.data.forEach(commentObject => {
            // display each obj
            displayComment(commentObject);
        })
        })
        // catch errors
        .catch(err => {
            console.log(err);
        })
};
// Invocation of post request
postComments ();

// Display on to the page
const displayComment = (commentObject) => {
  
    // Find comment container that holds all comments
    let commentContainer = document.querySelector(".comment-container");

    // Create a comment block to harbour the comment image and text
    let commentBlock = document.createElement("div");
    commentBlock.setAttribute("class", "comment");

    // Create a comment image element to display user pic
    let commentImage = document.createElement("img");
    // Do I need to replace the img url with object key img?
    commentImage.setAttribute("src", "assets/images/default-comment-image.jpg");
    commentImage.setAttribute("class", "comment__image");
    commentImage.setAttribute("alt", "Default Comment Image");
    
    // Create a comment text div to take in the different comment text elements
    let commentText = document.createElement("div");
    commentText.setAttribute("class", "comment__text");

    // Create comment title div to take in the username and timestamp
    let commentTitle = document.createElement("div");
    commentTitle.setAttribute("class", "comment__title");

    // Create user header element for top of the comment
    let userNameText = document.createElement('h5')
    userNameText.setAttribute("class", "comment__name");
    userNameText.innerText = `${commentObject.name}`;

    // Create timestamp header element for the top of the comment
    let commentTimestamp = document.createElement("h5");
    commentTimestamp.setAttribute("class", "comment__timestamp");
    let currentDate = `${commentObject.timestamp}`;
    

    // Format date to time ago
    let currentDateFormatted = currentDate;


    commentTimestamp.innerText = currentDateFormatted;
    
    // Append username and timestamp within title to head the comment
    commentTitle.append(userNameText, commentTimestamp);

    // Create paragraph element to hold comment value
    let commentParagraph = document.createElement("p");
    commentParagraph.setAttribute("class", "comment__paragraph");
    commentParagraph.innerText = `${commentObject.comment}`;

    // Append comment title and paragraph to complete the text of the comment
    commentText.append(commentTitle, commentParagraph);

    // Append comment image and text within the block to complete a full comment
    commentBlock.append(commentImage, commentText);

    // Prepend the block to the container so new comments show on top
    commentContainer.prepend(commentBlock);

    // Create the remove button container
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class","remove-container");
    
    // Create the remove button for its container
    let button = document.createElement("button");
    button.setAttribute("class","remove-button");
    button.innerText = `Remove`;
    buttonContainer.appendChild(button);
 
};