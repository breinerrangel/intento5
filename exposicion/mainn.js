let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let email=document.getElementById("correo")
let usuario=document.getElementById("usuario")
const listaPerson=[]
let nuevaPerson=[]
let contador=true
let error_emial=document.getElementById("error-emial")
let error_usuario=document.getElementById("error-usuario")
function llevar(){
    location.href="/formulario2/index.html"
}
    
function mostarErrorEmail(){ 
    error_emial.style.display="block"
    setTimeout(()=>{
        error_emial.style.display="none"
    },2000)
}

function mostarErrorUsuario(){
    error_usuario.style.display="block"
    setTimeout(()=>{
        error_usuario.style.display="none"
    },2000)
} 
class personas {
    nombre
    apellido
    usuario
    email
    constructor(nombre,apellido,usuario,email){
        this.nombre=nombre
        this.apellido=apellido
        this.usuario=usuario
        this.email=email
       
    }
}


let agregar=document.querySelector(".boton-agregar").addEventListener("click",(e)=>{ 
    const nuevoUsiario= new personas(nombre.value,apellido.value,usuario.value,email.value)
    listaPerson.push(nuevoUsiario)
    if(contador==true){
        if(localStorage.getItem("datos")==null){
            nuevaPerson.push({nombre:nombre.value,apellido:apellido.value,usuario:usuario.value,email:email.value})
            localStorage.setItem("datos",JSON.stringify(nuevaPerson))
            nombre.value=""
            apellido.value=""
            usuario.value=""
            email.value=""
            llevar()
            

        }
        else{
            nuevaPerson=JSON.parse(localStorage.getItem("datos"))
            if(nuevaPerson.find(Element=>Element.usuario==usuario.value)){
                mostarErrorUsuario()
        
                 
            }  
            else if(nuevaPerson.find(element=>element.email==email.value)){
                mostarErrorEmail()
                
               
                
            }
            else{
                nuevaPerson.push({nombre:nombre.value,apellido:apellido.value,usuario:usuario.value,email:email.value})
                localStorage.setItem("datos",JSON.stringify(nuevaPerson))
                llevar()
                nombre.value=""
                apellido.value=""
                usuario.value=""
                email.value=""
             
               
                
    
            }
            
          
    
        } 
       


        
    }

    
        
    
        
    
    
   
   /*  if(listaPerson.find(Element=>Element.usuario==usuario.value)){
        alert("usuario ya existe")    
    }  
    else if(listaPerson.find(element=>element.email==email.value)){
        alert("ya existe")
    }
    else{
        listaPerson.push(nuevoUsiario)
        if(localStorage.getItem("datos")==null){
            
           
        }
        else{
            nuevaPerson=JSON.parse(localStorage.getItem("datos"))
           
    
        } 
        nuevaPerson.push({nombre:nombre.value,apellido:apellido.value,usuario:usuario.value,email:email.value})
        localStorage.setItem("datos",JSON.stringify(nuevaPerson))
        
    } */
})  
    
   
      
    
   

   

    





  
    



