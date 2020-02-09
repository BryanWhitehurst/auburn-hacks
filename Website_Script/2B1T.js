function Login(){
    username = document.getElementById('login').value;
    sessionStorage.setItem("username", username);
    window.location.href = "main_page.html" ;
    console.log(username);
}

function getPlaylists(){
    var data = {a:"Driving", b:"Party", c:"Studying"};
    var select = document.getElementById("userPlaylistsOne");

    for (var key in data) 
    {
        if (data.hasOwnProperty(key)) {
            select.options[select.options.length] = new Option(data[key], '0');
        }
      }
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
        window.open("https://spotify.com/login");
        DisplayPlaylists();
        getPlaylists();
    }

    function MakePlaylistSelectionVisible()
    {
        var Playlist = document.getElementById("userPlaylistsOne")
        // FOR PLAYLIST LENGTH, ADD OPTIONS\
        Playlist.style.visibility = "visible";

        var button = document.getElementById("submitButton")
        button.style.visibility = "visible";
    }

    function DisplaySecondSpotifyLogin()
    {
        var y = document.getElementById("loginWithSpotify2");
        y.style.visibility = "visible";
    }

    function LoginWithSecondSpotify()
    {
        var Playlist = document.getElementById("userPlaylistsOne")
        // FOR PLAYLIST LENGTH, ADD OPTIONS\
        Playlist.style.visibility = "hidden";

        var button = document.getElementById("submitButton")
        button.style.visibility = "hidden";

        // HIDE FIRST SELECTIONS, DISPLAY SECOND SPOTIFY LOGIN
        DisplaySecondSpotifyLogin();
    }

    function OpenMergedPlaylist()
    {
        window.open("final_screen.html");
    }

    function OpenSpotify2()
    {
        window.open("https://spotify.com/login");

        var y = document.getElementById("loginWithSpotify2");
        y.style.visibility = "hidden";

        var Playlist2 = document.getElementById("userPlaylistsTwo")
        Playlist2.style.visibility = "visible";

        var button2 = document.getElementById("submitButton2")
        button2.style.visibility = "visible";
    }