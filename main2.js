$(document).ready(function() {
  function wantJqueryToExecute(songList) {
  	console.log("song", songList.songs)
  	for (var i = 0; i < songList.songs.length; i++) {
  		var currentSong = songList.songs[i];
  		$("#list-of-songs").append("<h1>" + currentSong.title + "</h1>");
  		$("#list-of-songs").append("<div>" + currentSong.artist + "</div>");
  		$("#list-of-songs").append("<div>" + currentSong.album + "</div>");
  	}
  }


	$.ajax({
		url: "songs.json"
	}).done(function(data) {
    console.log("ajax", data);
    wantJqueryToExecute(data);
	});

  $("#get-more-songs").click(function() {
		$.ajax({
			url: "more-songs.json"
		}).done(function(data) {
	    console.log("ajax", data);
	    wantJqueryToExecute(data);
		});
	})
})
		