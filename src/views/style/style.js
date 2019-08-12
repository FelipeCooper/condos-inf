$('.NameCondos').chosen({
    width: '200px',
    placeholder_text_single:"Selecione um condomínio"
});
document.querySelector('#formSearch').addEventListener('submit', (event) => {
    let idSelect = document.querySelector('.NameCondos').value
    event.preventDefault();
    window.location = '/pesquisar/' + idSelect;
})
