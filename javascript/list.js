"use strict"
$(document).ready(function() {

	function getSongs() {
		$.ajax({
				url: "https://music-historyjtmp2r.firebaseio.com/songs/.json"
			}).done(function(data) {
		    loadSongs(data);
			});
	}
	getSongs();


	function loadSongs(songView) {
		$("#list-view").html("")
	  for (let i in songView) {
      var songData = songView;
	  	$("#list-view").append(`<h2>${songData[i].artist}</h2>`);
	  	$("#list-view").append(`<h3>${songData[i].album}</h3>`);
	  	$("#list-view").append(`<div>${songData[i].title}</div>`);
	  	$("#list-view").append(`<button id="${i}">Delete</button>`);
	  	$("#list-view").append(`<button class="edit" id="edit_${i}">Edit</button>`);
	  };
	} 

	$("#ohYeah").click(function() {
		let newSong = {
			"album": $("#userAlbum").val(),
			"artist": $("#userArtist").val(),
			"title": $("#userTitle").val()
		}
		addSongs();
	});

	function addSongs() {
		$.ajax({
			url: "https://music-historyjtmp2r.firebaseio.com/songs/.json",
			type: "POST",
			data: JSON.stringify(newSong)
		}).done(function(stuffFromPost) {
			$("input").val("")
			getSongs();
		})
	}

	$("#list-view").click(function(event) {
		if (event.currentTarget) {
			let songId = event.target.id;
			console.log("delete", event.target.id)
			$.ajax({
				url: `https://music-historyjtmp2r.firebaseio.com/songs/${songId}.json`,
				type: "DELETE"
			}).done(function() {
				getSongs();
			})
		}
	})

	$("#list-view").on("click", ".edit", function(e) {
			let id = $(this).attr("id");
			let thisId = id.split("edit_")
			console.log('THIS ID', thisId[1]);
			let realSongId = thisId[1];
			let editId = 
			$("#musicForm").removeClass("hide");
			$("#main").addClass("hide");
			$.ajax({
				url: `https://music-historyjtmp2r.firebaseio.com/songs/${realSongId}.json`,
				type: "GET"
			}).done(function(song) {
				$("#userAlbum").val() = songs.album;
				$("#userArtist").val() = songs.artist;
				$("#userTitle").val() = songs.title;
			})
	})

  function addEdit() {
  	if ($(this).attr("id")) {
  		$.ajax({
  			url: `https://music-historyjtmp2r.firebaseio.com/songs/${editId}.json`,
  			type: "PUT"
  		}).done(function() {
  			getSongs();
  		})
  	}else{
  		addsongs();
  	}
  }



	$("#link-add").click(function() {
		$("#musicForm").removeClass("hide");
		$("#main").addClass("hide");
	})

	$("#link-home, #ohYeah").click(function() {
		$("#main").removeClass("hide");
		$("#musicForm").addClass("hide");
	})



})

