const modals = document.querySelectorAll('.js-modal')

const modalRegis = document.querySelector('.js-modal-regis')
const modalLogin = document.querySelector('.js-modal-login')

const btnRegis = document.querySelector('.js-btn-regis')
const btnLogin = document.querySelector('.js-btn-login')

const authFormRegis = document.querySelector('.auth-form--regis') 
const authFormLogin = document.querySelector('.auth-form--login') 


btnRegis.addEventListener('click',function(){
    modalRegis.classList.add('open')
    
})

btnLogin.addEventListener('click',function(){
    modalLogin.classList.add('open') 
})

modalLogin.addEventListener('click',function(){
    modalLogin.classList.remove('open')
})
authFormLogin.addEventListener('click', function(event){
    event.stopPropagation()
}) 


modalRegis.addEventListener('click',function(){
    modalRegis.classList.remove('open')
})
authFormRegis.addEventListener('click', function(event){
    event.stopPropagation()
}) 
console.log(authFormRegis)

