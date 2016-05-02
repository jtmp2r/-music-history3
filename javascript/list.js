$(document).ready(function() {

	$.ajax({
			url: "songs.json"
		}).done(function(data) {
	    console.log("ajax", data);
	    loadSongs(data);
		});
		
	$("#showMe").click(function() {	
		$.ajax({
			url: "more.json"
		}).done(function(data) {
			console.log("ajax", data);
			loadSongs(data);
		})
  })

	function loadSongs(songView) {
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
	

})

