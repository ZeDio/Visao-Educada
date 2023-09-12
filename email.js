function createEmail(){
    var email = document.getElementById('emial').value;
    var password = document.getElementById('password').value;   

    firebase.auth().createUserWithEmailAndPassword(email,password).then(user =>{
        console.log('usuario ', user);
        alert('Usuario criado e logado')
    }).catch(err=>{
        console.error("Erro ao criar usuario", err)
    })
}

function loginEmail(){
    var email = document.getElementById('emial').value;
    var password = document.getElementById('password').value;   

    firebase.auth().singInWithEmailAndPassword(email,password).then(()=>{
        alert('Usuário logado');
    }).catch(err=>{
        console.log('error',error)
    })
}