function Login(){
    username = document.getElementById('login').value;
    sessionStorage.setItem("username", username);
    window.location.href = "main_page.html" ;
    console.log(username);
}

function getPlaylists(){
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8080/2B1T/getAllPlaylists?spotifyUsername=NULL&spotifyPassword=NULL", false)

    request.onload = function(){
        var playlists = JSON.parse(this.responseText);
        if(this.readyState == 4 && this.status == 200){
            playlists.forEach(pll => {
                console.log(pll.title)
            });
        }else{
            console.log(this.status);
        }
    }

    /*request.send(){

    }
    */
    
}