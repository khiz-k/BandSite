//Comments
let commentArray = [];
function top(){
	
	commentArray[0] = { name:"Theodore Duncan", date:"11/15/2018", comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!" };
	commentArray[1] = { name:"Gary Wong", date:"12/12/2018", comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"};
	commentArray[2] = { name:"Micheal Lyons", date:"12/18/2018", comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed." };

	//.each(function( index ) {
	//		displayComment(this);
	//});
};

document.getElementById("post_comment").addEventListener("click", add_comment);

function add_comment(e){
	e.preventDefault();

	//Current date
	let d = new Date();
	let month = d.getMonth()+1;
	let day = d.getDate();

	let output = ((''+month).length<2 ? '0' : '') + month + '/' +
	    ((''+day).length<2 ? '0' : '') + day + '/' +d.getFullYear();

	//let userName = ${"#user_name"};
	//let userComment = ${"#comment"};

	let comment = {name: userName, date: output, comment: userComment};

	commentArray.push(comment);

	//.html("");

	//.each(function( index ) {
	//	displayComment(this);
	//});

	//.trigger("reset");
}

function displayComment(comment){
	let comment = '<div class="comment-item"><div class="pic-wrap"><div class="pic no-pic"></div></div><div class="comment-text"><div class="name-date-wrap"><span class="name">'+comment.name+'</span><span class="date">'+comment.date+'</span></div>'+comment.comment+'</div></div></div>';
	//.prepend(comment);
}

//Shows Table
document.ready(function(){
	let rows_array = [];
	rows_array[0] = {date:"Mon Dec 17 2018", venue:"Ronald Lane", location: "San Fancisco, CA"};
	rows_array[1] = {date:"Tue Jul 18 2019", venue:"Pier 3 East", location: "San Fancisco, CA"};
	rows_array[2] = {date:"Fri Jul 22 2019", venue:"View Loungue", location: "San Fancisco, CA"};
	rows_array[3] = {date:"Sat Aug 12 2019", venue:"Hyatt Agency", location: "San Fancisco, CA"};

	rows_array.each(function( index ) {
		let row = '<div class="row"><div class="column"><div class="title">Dates</div><div class="content date">'+this.date+'</div></div><div class="column"><div class="title">Venue</div><div class="content venue">'+this.venue+'</div></div><div class="column"><div class="title">Location</div><div class="content location">'+this.location+'</div></div><div class="column"><div class="content action"><div class="btn">Buy Tickets</div></div></div></div>'
		//.append(row);
	});
});
