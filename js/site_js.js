/*
Below is an array "comments" of comments to clean. The array will eventually include all the comments to clean; currently, there are only two comments included. Each comment is an object of the array. The comment object's properties include "status", "commentSequence", and others; I'm interested in the "commentBody" property, which containts the text of the specific comment. 

The function loops through the array, extracts the body, and makes use of jQuery to append only the body of each comment to the browser.
*/

var comments = [ 

{
"id": "ccf0mi1", 
"gilded": 0, 
"author": "philip1201", 
"parent_id": "t1_ccexe24", 
"approved_by": null, 
"body": "&gt;Here lies Ozymandias, king of kings...\n\nFTFY:\n\n&gt;I met a traveller from an antique land\n\n&gt;Who said: Two vast and trunkless legs of stone\n\n&gt;Stand in the desert. Near them, on the sand,\n\n&gt;Half sunk, a shattered visage lies, whose frown,\n\n&gt;And wrinkled lip, and sneer of cold command,\n\n&gt;Tell that its sculptor well those passions read\n\n&gt;Which yet survive, stamped on these lifeless things,\n\n&gt;The hand that mocked them and the heart that fed:\n\n&gt;And on the pedestal these words appear:\n\n&gt;\"My name is Ozymandias, king of kings:\n\n&gt;Look on my works, ye Mighty, and despair!\"\n\n&gt;Nothing beside remains. Round the decay\n\n&gt;Of that colossal wreck, boundless and bare\n\n&gt;The lone and level sands stretch far away.", 
"edited": false, 
"author_flair_css_class": null, 
"downs": 0, 
"body_html": "&lt;div class=\"md\"&gt;&lt;blockquote&gt;\n&lt;p&gt;Here lies Ozymandias, king of kings...&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;p&gt;FTFY:&lt;/p&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;I met a traveller from an antique land&lt;/p&gt;\n\n&lt;p&gt;Who said: Two vast and trunkless legs of stone&lt;/p&gt;\n\n&lt;p&gt;Stand in the desert. Near them, on the sand,&lt;/p&gt;\n\n&lt;p&gt;Half sunk, a shattered visage lies, whose frown,&lt;/p&gt;\n\n&lt;p&gt;And wrinkled lip, and sneer of cold command,&lt;/p&gt;\n\n&lt;p&gt;Tell that its sculptor well those passions read&lt;/p&gt;\n\n&lt;p&gt;Which yet survive, stamped on these lifeless things,&lt;/p&gt;\n\n&lt;p&gt;The hand that mocked them and the heart that fed:&lt;/p&gt;\n\n&lt;p&gt;And on the pedestal these words appear:&lt;/p&gt;\n\n&lt;p&gt;&amp;quot;My name is Ozymandias, king of kings:&lt;/p&gt;\n\n&lt;p&gt;Look on my works, ye Mighty, and despair!&amp;quot;&lt;/p&gt;\n\n&lt;p&gt;Nothing beside remains. Round the decay&lt;/p&gt;\n\n&lt;p&gt;Of that colossal wreck, boundless and bare&lt;/p&gt;\n\n&lt;p&gt;The lone and level sands stretch far away.&lt;/p&gt;\n&lt;/blockquote&gt;\n&lt;/div&gt;", 
"link_id": "t3_1n14tm", 
"score_hidden": false, 
"name": "t1_ccf0mi1", 
"created": 1380129964, 
"author_flair_text": null, 
"created_utc": 1380101164, 
"distinguished": null, 
"num_reports": null, 
"ups": 6 
}, 

{
"id": "ccexe24", 
"gilded": 0, 
"author": "Juandough", 
"parent_id": "t1_ccejy6w", 
"approved_by": null, 
"body": "\"Here lies King Ozymandias\"...", 
"edited": false, 
"author_flair_css_class": null, 
"downs": 0, 
"body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;&amp;quot;Here lies King Ozymandias&amp;quot;...&lt;/p&gt;\n&lt;/div&gt;", 
"link_id": "t3_1n14tm", 
"score_hidden": false, 
"name": "t1_ccexe24", 
"created": 1380111536, 
"author_flair_text": null, 
"created_utc": 1380082736, 
"distinguished": null, 
"num_reports": null, 
"ups": 10 
}
]


$(function(showText) {

	for(var i = 0; i < comments.length; i++) {
		$('body').append("<p>" + comments[i].body + "</p>");
	}
})


$(function(wordCount) {

for(var i = 0; i < comments.length; i++) {
		$('body').append("<p>" + "The number of words in your text is: " + comments[i].body.split([" "]).length + "</p>");
	}
})


$(function(typeToken) {

for(var i = 0; i < comments.length; i++) {
		$('body').append("<p>" + "The type-token ratio of words in your text is: " + comments[i].body.split([" "]).length / comments[i].body.split([" "]).length + "</p>");
	}
})

/*

NYTimes Comments

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

*/
