function logar(){

    var login = document.getElementById('email').value
    var senha = document.getElementById('password').value

    if(login == "admin@admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "./dashboard.html"
    }else{
        alert('Usuario ou senha incorretos')
    }

}