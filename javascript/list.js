"use strict"
$(document).ready(function() {


	$.ajax({
			url: "https://music-historyjtmp2r.firebaseio.com/songs/.json"
		}).done(function(data) {
	    loadSongs(data);
		});
		
	// $("#showMe").click(function() {	
	// 	$.ajax({
	// 		url: "more.json"
	// 	}).done(function(data) {
	// 		loadSongs(data);
	// 	})
 //  })

	function loadSongs(songView) {
	  for (var i in songView) {
      var songData = songView;
	  	$("#list-view").append("<h2>" + songData[i].artist + "</h2>");
	  	$("#list-view").append("<h3>" + songData[i].album + "</h3>");
	  	$("#list-view").append("<div>" + songData[i].title + "</div>");
	  	$("#list-view").append("<button id='delete'>Delete</button>");
	  };
	}

	$("#delete").click(function() {
		$("list-view").remove();
	});

	$("#ohYeah").click(function() {
		let newSong = {
			"album": $("#userAlbum").val(),
			"artist": $("#userArtist").val(),
			"title": $("#userTitle").val()
		}
		$.ajax({
			url: "https://music-historyjtmp2r.firebaseio.com/songs/.json",
			type: "POST",
			data: JSON.stringify(newSong)
		}).done(function(stuffFromPost) {
			loadSongs();
			console.log("it saves", stuffFromPost)
		})
		 
	});

	$("#link-add").click(function() {
		$("#musicForm").removeClass("hide");
		$("#main").addClass("hide");
	})

	$("#link-home").click(function() {
		$("#main").removeClass("hide");
		$("#musicForm").addClass("hide");
	})



})

