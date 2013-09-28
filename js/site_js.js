/*
Below is an array "comments" of comments to clean. The array will eventually include all the comments to clean; currently, there are only two comments included. Each comment is an object of the array. The comment object's properties include "status", "commentSequence", and others; I'm interested in the "commentBody" property, which containts the text of the specific comment. 

The function loops through the array, extracts the commentBody, and makes use of jQuery to append only the commentBody of each comment to the browser.
*/

var comments = [

{
"status":"approved",
"commentSequence":1,
"userTitle":"NULL",
"userURL":"NULL",
"commentTitle":"n\/a",
"commentBody":"Unfortunately, I must agree more with the analysis of despair written by Mr. James than a less than convincing optimism of Dr. Krugman. In 1855 Walt Whitman promulgated an ecstatic and exalted vision of democracy in \"song of Myself.\" Several decades later in his \"democratic Vistas\" he descended into despair when confronted with the crass reality of social division, greed, the ascent of the robber barons which dashed the optimism he nurtured in 1855. These two works of a great American writer mirror the statements of Dr. Krugman and Mr. James. To my great chagrin I must side with Mr. James.",
"approveDate":"1373034183",
"recommendations":43,
"replies":[],
"editorsSelection":true,
"times_people":1,
"sharing":0,
"email_status":"0",
"display_name":"gpd",
"location":"Riverdale New York",
"userComments":"api.nytimes.com\/svc\/community\/v2\/comments\/user\/id\/23271686.xml"
},

{
"status":"approved",
"commentSequence":1,
"userTitle":"NULL",
"userURL":"NULL",
"commentTitle":"n\/a",
"commentBody":"Hi, Mom.  Correct as he most often is, Professor Krugman has obviously shut his eyes on matters of 'democracy'.  He completely ignores the recent (THIS WEEK) assaults on Women's Rights, Voting Rights and others essential to the life of 'democracy'.",
"approveDate":"1373051678",
"recommendations":23,
"replies":[],
"editorsSelection":true,
"times_people":1,
"sharing":1,
"email_status":"0",
"display_name":"sandyg",
"location":"austin, texas",
"userComments":"api.nytimes.com\/svc\/community\/v2\/comments\/user\/id\/15565797.xml"
}

]

$(function(showText) {

	for(var i = 0; i < comments.length; i++) {
		$('body').append("<p>" + comments[i].commentBody + "</p>");
	}
})


$(function(wordCount) {

for(var i = 0; i < comments.length; i++) {
		$('body').append("<p>" + "The number of words in your text is: " + comments[i].commentBody.split([" "]).length + "</p>");
	}
})

