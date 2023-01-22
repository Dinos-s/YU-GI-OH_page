const Trailer = document.querySelector('.botao-trailer')
const fecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const modal = document.querySelector('.modal')
const link = video.src

alterarModal = () =>{
    modal.classList.toggle('aberto')
}

Trailer.addEventListener('click', () => {
    alterarModal()
    video.setAttribute('src', link)
})

fecharModal.addEventListener('click',()=>{
    alterarModal()
    video.setAttribute('src', '')
})