function Login(){
    username = document.getElementById('login').value;
    sessionStorage.setItem("username", username);
    window.location.href = "main_page.html" ;
    console.log(username);
}

function getPlaylists(){
    var request = new XMLHttpRequest();

    var myJSON = {"playlists":[{"playlistName":"driving","playlistID":0},{"playlistName":"party","playlistID":1}, {"playlistName":"studying", "playlistID":2}]}

    request.open('GET', "http://172.88.183:5000/", false)
    request.onload = function(){

        if(request.status >= 200 && request.status < 400){
            var data = JSON.parse(myJSON);
            dropdown = document.getElementById(UserPlaylistOne)
            i = 1;
            data.forEach(playlist => {
                dropdown.options[dropdown.options.length] = new Option(i,playlist.playlistName.value) 
                i++;
            });
        }else{
            console.log('error');
        }
    }

    request.send()

    
}

function getSongs(){
    var request = new XMLHttpRequest
}

    function displayName()
    {
        document.getElementById("welcome").innerHTML = "Welcome, " + sessionStorage.getItem("username") + "!"
    }

    function DisplayFirstSpotifyLogin()
    {
        var x = document.getElementById("addRoom");
        x.style.visibility = "hidden";

        var y = document.getElementById("loginWithSpotify1");
        y.style.visibility = "visible";
    }

    function DisplayPlaylists()
    {
        var y = document.getElementById("loginWithSpotify1");
        y.style.visibility = "hidden";

        MakePlaylistSelectionVisible();
    }

    function OpenSpotify()
    {
        GetPlaylists();
        DisplayPlaylists();
    }

    function MakePlaylistSelectionVisible()
    {
        var Playlist = document.getElementById("userPlaylistsOne")
        // FOR PLAYLIST LENGTH, ADD OPTIONS
        Playlist.style.visibility = "visible";
    }