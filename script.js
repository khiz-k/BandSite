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
getComments();

// Form DOM
// Find form and assign to a variable
const form = document.getElementByID('#add__comment__form');
// Create a function that will be a callback to the addEventListener
const selectForm = (e) => {
    // prevents the page from refreshing
    e.preventDefault();

    // name value entered
    nameValue = e.target.userName.value;
    // comment value entered
    commentValue = e.target.userComment.value;

    // check/verification
    console.log(nameValue);
    console.log(commentValue);

    //declare the object that stores all the values inputted
    let commentObject = {name: nameValue, timestamp: Date.now(), comment: commentValue};
    // ^ could use new Date() for timestamp, but will be formatted to time ago regardless

    // Display inputted comment
    displayComment(commentObject);
    // Invocation of post request
    postComments(commentObject.name, commentObject.comment);
    // resets form fields
    form.reset();
};

//invoke 'addEventListener' on form, passing 'submit' type
form.addEventListener("submit", selectForm);

// Post request for new comments
postComments = (userName, userComment) => {
    axios.post(url + API_KEY, {
        name: userName,
        comment: userComment
    })
        .then(res => {
        console.log(res.data)
        })
        // catch errors
        .catch(err => {
            console.log(err);
        })
};

// Display on to the page function
const displayComment = (commentObject) => {
  
    // Find comment container that holds all comments
    let commentContainer = document.getElementByID(".comment-container");

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
    let objDate = `${commentObject.timestamp}`;

    // Format Date to time ago format

    // timeAgo Function
    const timeAgo = (date) => {

        let seconds = Math.floor((new Date() - date) / 1000);
      
        let interval = Math.floor(seconds / 31536000);
      
        if (interval > 1) {
          return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";

        // update time every min
        setTimeout(timeAgo, 60000);
    };

    // invoke timeAgo and set it to a variable
    let dateFormatted = timeAgo(objDate);
    // Add date to timestamp
    commentTimestamp.innerText = dateFormatted;

    // Append username and timestamp within title to head the comment
    commentTitle.append(userNameText, commentTimestamp);

    // Create paragraph element to hold comment value
    let commentParagraph = document.createElement("p");
    commentParagraph.setAttribute("class", "comment__paragraph");
    commentParagraph.innerText = `${commentObject.comment}`;

    // Append comment title and paragraph to complete the text of the comment
    commentText.append(commentTitle, commentParagraph);

    /* DIVING DEEPER - DELETE COMMENTS - */

    // Create the remove button container
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class","remove-container");
    
    // Create the remove button
    let button = document.createElement("button");
    button.setAttribute("type","submit");
    button.setAttribute("name","removeComment");
    button.setAttribute("class","remove-button");
    button.setAttribute("id","remove-button");
    button.innerText = `Remove`;

    // Append remove button to its container
    buttonContainer.appendChild(button); 

    commentText.append(buttonContainer);

    // Append comment image and text within the block to complete a full comment
    commentBlock.append(commentImage, commentText);

    // Prepend the block to the container to finish up (new comments show on top)
    commentContainer.prepend(commentBlock);
};

// Delete request for comments
deleteComments = (commentID) => {
    axios.delete("https://project-1-api.herokuapp.com/comments/:commentID?api_key=" + API_KEY, {
        id: commentID 
    })
        .then(res => {
        console.log(res.data)
        })
        // catch errors
        .catch(err => {
            console.log(err);
        })
};


// Remove Button DOM
// Find button and assign it to a variable
const buttonVar = document.querySelector('#remove-button');
// Create a function that will be a callback to the addEventListener
const selectButton = (e) => {
    // prevents the page from refreshing
    e.preventDefault();

    /* This Area needs to be fixed in order to operate the deleteComments request without reading null
    // button value 
    buttonIDValue = e.target.removeComment;
    // declare the object that stores all the values inputted
    let commentObject = {id: buttonIDValue};
    */

    // // Display inputted comment
    // displayComment(commentObject);
    // Invocation of delete request
    deleteComments(commentObject.id);
    // resets form fields
    buttonVar.reset();
};

//invoke 'addEventListener' on button, passing 'submit' type
buttonVar.addEventListener("submit", selectButton);
