var Songs = (function(oldSongs) { 
  var initialSong = document.getElementById("list-view");
  var newSongs = document.getElementById("more-view")
  var showMe = document.getElementById("showMe")
  

	oldSongs.myInfo = function(songView) {
    console.log("trick", songView)
    var songData = songView.songs;
	  displaySongs = "";
	  for (var i = 0; i < songData.length; i++) {
	  	displaySongs += "<h3>" + songData[i].artist + "<button id='delete'>x</button>" + "</h3> <br />" + "<div>" + songData[i].title + "</div>"
	  };
	  initialSong.innerHTML = displaySongs;
	  newSongs.innerHTML = displaySongs;
	}

	var removeItem = document.getElementById("list-view");
	removeItem.addEventListener("click", remove);
	function remove(e) {
		this.removeChild(e.target.parentNode);
	}
	
	newSongs.style.visibility = "hidden";

  showMe.addEventListener("click", function() {
  	newSongs.style.visibility = "visible";
  })
	
	

  return oldSongs;

}(Songs))

