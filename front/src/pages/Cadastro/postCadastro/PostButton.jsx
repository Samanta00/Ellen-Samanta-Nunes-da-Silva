import api from "../apiCadastros"
const ButtonCadastro=()=>{
const cadastrandoPessoa = async(pessoa)=>{ 
    try{
        await api.post('/customers', pessoa)
   }
   catch(error){
       console.log(error)
   }
}
function submit(e){
   e.preventDefault()
   const cadastroPessoas={
       nome:document.getElementById('nome').value,
       email:document.getElementById('email').value,
       telefone:document.getElementById('telefone').value,
       endereco:document.getElementById('endereco').value,
       cpf:document.getElementById('cpf').value
   }
   cadastrandoPessoa(cadastroPessoas)
}  
return(
    <div>
        <button onClick={submit}>Adicionar</button>
    </div>
)
}
export default ButtonCadastro