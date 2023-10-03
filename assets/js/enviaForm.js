const nome = document.getElementById('nome').value;
const empresa = document.getElementById('empresa').value;
const telefone = document.getElementById('telefone').value;
const email = document.getElementById('email').value;
const mensagem = document.getElementById('mensagem').value;


const buttonEnvia = document.getElementById('envia_email')

function envia_email() {

    const address = email;
    const emailBody = `Nome: ${nome}, Empresa:${empresa}, telefone:${telefone}, Mensagem:${mensagem}` 
    buttonEnvia.addEventListener('click', ()=>{
        var link = `mailto:${address}`
             + `?cc=${address}`
             + "&subject= email de contato" + 
             + "&body=" + emailBody
    ;

    window.location.href = link;
    })
}


envia_email();