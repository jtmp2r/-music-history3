var Songs = (function(oldSongs) { 

  

	oldSongs.myInfo = function(songView) {
    console.log("trick", songView)
    var songData = songView.songs;
	  displaySongs = "";
	  for (var i = 0; i < songData.length; i++) {
	  	displaySongs += "<h3>" + songData[i].artist + "<button id='delete'>x</button>" + "</h3> <br />" + "<div>" + songData[i].title + "</div>"
	  };
	  document.getElementById("list-view").innerHTML = displaySongs;
	}

	var removeItem = document.getElementById("list-view");

	removeItem.addEventListener("click", remove);

	function remove(e) {
		this.removeChild(e.target.parentNode);
	}

  return oldSongs;

}(Songs))

