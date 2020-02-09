function Login(){
    username = document.getElementById('login').value;
    sessionStorage.setItem("username", username);
    window.location.href = "main_page.html" ;
    console.log(username);
}

function getPlaylists(){
    var request = new XMLHttpRequest();

    var myJSON = {"playlistName":["driving","party", "studying"]}

    request.open('GET', "http://172.88.183:5000/", false)
    request.onload = function(){

        if(request.status >= 200 && request.status < 400){
            var data = JSON.parse(myJSON);
            data.forEach(playlist => {
                
            });
        }else{
            console.log('error');
        }
    }

    request.send()

    
}