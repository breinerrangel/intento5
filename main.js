let registrarse=document.getElementById("sin-color")
let usuario=document.getElementById("usuario")
let email=document.getElementById("email")
let noEncontrado=document.getElementById("span")
let emailnoo=document.getElementById("span2")
function usuno(){
    noEncontrado.style.display="block"
    setTimeout(()=>{
        noEncontrado.style.display="none"
    },2000)

}
function emailno(){
    emailnoo.style.display="block"
    setTimeout(()=>{
        emailnoo.style.display="none"
    },2000)

}


function personasa(){
    let respuesta=JSON.parse(localStorage.getItem("datos"))
      
    document.querySelector(".enviar").addEventListener("click",(e)=>{
        e.preventDefault()
        if(respuesta.find(elements=>elements.usuario==usuario.value)){
            pocicion=respuesta.findIndex(elements=>elements.usuario==usuario.value)
            if(respuesta[pocicion].email==email.value){
                location.href="indexx.html"
                email.value=""
                usuario.value=""
                

            }
            else{
                usuno()
            }
        }
        else{
            emailno()
           
            
        }
            
       

    })
    registrarse.addEventListener("click",(e)=>{
        e.preventDefault()
        location.href="/exposicion/index.html"
    })
   
}
personasa()

    


 