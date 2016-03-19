var Songs = (function() {
	var songData = [];


  return {

		myData: function() {

		var newMusic = new XMLHttpRequest();

			newMusic.addEventListener("load", function() {
				songData = JSON.parse(this.responseText);
				console.log("Que?", songData)
				Songs.myInfo(songData);
			});

			newMusic.open("GET", "songs.json");
			newMusic.send();
		}	
	}	

}())

Songs.myData();





