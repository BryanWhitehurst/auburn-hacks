function Login(){
    username = document.getElementById('login').value
    sessionStorage.setItem("username", username)
    window.location.href = "main_page.html" 
    console.log(username)
}