$('.NameCondos').chosen({
    width: '200px',
    placeholder_text_single: "Selecione um condomínio"
});
document.querySelector('#formSearch').addEventListener('submit', (event) => {
    let idSelect = document.querySelector('.NameCondos').value
    event.preventDefault();
    window.location = '/pesquisar/' + idSelect;
})
let btnEdit = document.querySelector('#btnEdit');
btnEdit.addEventListener('click', (event) => {
    event.preventDefault();
    if (btnEdit.value != 'Salvar'){
    let inputs = document.querySelectorAll("#condosInput")
    inputs.forEach((input) =>{
        input.removeAttribute('disabled');
    })
    btnEdit.value = 'Salvar'
}else{
    
    window.location = '/atualizar'
}
})
