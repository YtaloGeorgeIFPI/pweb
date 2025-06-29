
// Código JavaScript para evento de clique
function mostravalor(event) {
    var idade = event.target.getAttribute('data-idade');
    alert('Idade: ' + idade);
}
