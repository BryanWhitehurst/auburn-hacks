function Login(){
    username = document.getElementById('login').value
    localStorage.setItem("username", username)
    window.location.href = "main_page.html" 
}