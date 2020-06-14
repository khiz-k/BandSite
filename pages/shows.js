/* Shows Table */

// Globals and Back-End API 
const url = "https://project-1-api.herokuapp.com/showdates?api_key="; 
let API_KEY = "d9170aaf-154f-4f77-af32-cb4f16a4441e";

// Get request
getShows = () => {
    axios.get(url + API_KEY)
        .then(res => {
        console.log(res.data)
        // forEach to run through all the data
        res.data.forEach(showObject => {
            // display each obj
            displayShow(showObject);
        })
        })
        // catch errors
        .catch(err => {
            console.log(err);
        })
};
// Invocation of get request
getShows ();

// Display on page
const displayShow = (showObject) => {

    // Find table data div that will hold everything
    let showsTable = document.querySelector(".data");
  
    // Create a row for the table 
    let row = document.createElement("div");
    row.className = 'row';

    // Create the date column for the row
    let dateColumn = document.createElement("div");
    dateColumn.className = 'column';

    // Create the date title for its column
    let dateTitle = document.createElement("div");
    dateTitle.className = 'title';
    dateTitle.innerText = `Date`;

    // Create the date content for its column
    let dateContent = document.createElement("div");
    dateContent.className = 'content date';
    dateContent.innerText = `${showObject.date}`;
    
    // Create the venue column for the row
    let venueColumn = document.createElement("div");
    venueColumn.className = 'column';

    // Create the venue title for its column
    let venueTitle = document.createElement("div");
    venueTitle.className = 'title';
    venueTitle.innerText = `Venue`;
   
    // Create the venue content for its column
    let venueContent = document.createElement("div");
    venueContent.className = 'content venue';
    venueContent.innerText = `${showObject.place}`;
    

    // Create the location column for the row
    let locationColumn = document.createElement("div");
    locationColumn.className = 'column';

    // Create the location title for its column
    let locationTitle = document.createElement("div");
    locationTitle.className = 'title';
    locationTitle.innerText = `Location`;

    // Create the location content for its column
    let locationContent = document.createElement("div");
    locationContent.className = 'content location';
    locationContent.innerText = `${showObject.location}`;

    // Create the button column for the row
    let buttonColumn = document.createElement("div");
    buttonColumn.className = 'column';

    // Create the button div for its column
    let buttonDiv = document.createElement("div");
    buttonDiv.className = 'content action';
    
    // Create the button for its div (nested)
    let button = document.createElement("div");
    button.className = 'button';
    button.innerText = `Buy Tickets`;

    // Append date children to their parent
    dateColumn.appendChild(dateTitle);
    dateColumn.appendChild(dateContent);

    // Append venue children to their parent
    venueColumn.appendChild(venueTitle);
    venueColumn.appendChild(venueContent);

    // Append location children to their parent
    locationColumn.appendChild(locationTitle)
    locationColumn.appendChild(locationContent);

    // Append button children in a nested fashion
    buttonColumn.appendChild(buttonDiv);
    buttonDiv.appendChild(button);

    // Append columns to row to complete its nested html, required for pixel perfect styling
    row.appendChild(dateColumn);
    row.appendChild(venueColumn);
    row.appendChild(locationColumn);
    row.appendChild(buttonColumn);

    // Append the finished row to the table!
    showsTable.appendChild(row);
};