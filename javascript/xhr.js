var Songs = (function() {
	var songData = [];
	
$.ajax({
		url: "songs.json"
	}).done(function(data) {
    console.log("ajax", data);
    wantJqueryToExecute(data);
	});

  return {

		myData: function() {

		var newMusic = new XMLHttpRequest();
		var newSong = new XMLHttpRequest();

			newMusic.addEventListener("load", function() {
				songData = JSON.parse(this.responseText);
				console.log("Que?", songData)
				Songs.myInfo(songData);
			});

			newSong.addEventListener("load", function() {
				extraSongs = JSON.parse(this.responseText);
				console.log("more", extraSongs)
			});


			newMusic.open("GET", "songs.json");
			newMusic.send();

			newSong.open("GET", "more.json");
			newSong.send();
		}

	}		
	

}())

Songs.myData();





