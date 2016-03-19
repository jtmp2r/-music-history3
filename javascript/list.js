var Songs = (function(oldSongs) { 

  

	oldSongs.myInfo = function(songData2) {
    var songData = songData2.songs;
    console.log("songs", songData)
	  displaySongs = "";
	  for (var i = 0; i < songData.length; i++) {
	  	displaySongs += "<h3>" + songData[i].artist + "<button>x</button>" + "</h3> <br />" + "<div>" + songData[i].title + "</div>"
	  };
	  document.getElementById("list-view").innerHTML = displaySongs;
	}

  return oldSongs;

}(Songs))


Songs.myInfo();