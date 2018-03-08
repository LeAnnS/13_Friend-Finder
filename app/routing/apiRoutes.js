var friendData = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});
	app.post("/api/friends", function(req, res) {
		friendData.push(req.body);

		// create object for best match

		// save req.body into var called userdata

		// save user scores (array in userData) to a variable called userscores

		// create var total Difference to calc best match

		// use nested for loops
		// loop through each possible friend in friends data array
		for (var i = 0; i < friendData.length; i++) {
			var currentFriend = friendData[i];
			totalDifference =0;

			console.log(currentFriend.name);

			// this for loop runs through the scores array of the current frined to determine their score total
			for (var j = 0; j < currentFriend.scores.length; j++) {
				var currentFriendScore = currentFriend.scores[j];
				var currentUserScore = userScores[j];

				// this determines the total scores of the current user & the current friend being compared & then finds the total difference between them
				totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
			}

			// compare differences between currentFriend & bestMatch & set bestMatch to lowest difference
			if (totalDifference <= bestMatch.friendDifference) {
				// set bestMatch to currentFriend if less
				bestMatch.name = currentFriend.name;
				bestMatch.photo = currentFriend.photo;
				bestMatch.friendDifference = totalDifference;
			}
		}
		