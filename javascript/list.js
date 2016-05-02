var Songs = (function(oldSongs) {   

	oldSongs.myInfo = function(songView) {
	  for (var i = 0; i < songView.songs.length; i++) {
      var songData = songView.songs;
	  	$("#list-view").append("<h2>" + songData[i].artist + "</h2>");
	  	$("#list-view").append("<h3>" + songData[i].album + "</h3>");
	  	$("#list-view").append("<div>" + songData[i].title + "</div>");
	  	$("#list-view").append("<button id='delete'>Delete</button>");

	  };
	}

	$("#delete").click(function() {
		$("list-view").remove();
	});
	


	

  return oldSongs;

}(Songs))

