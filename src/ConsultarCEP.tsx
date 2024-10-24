import { useEffect } from "react";

function ConsultarCEP() {
    
    useEffect(() => {

        //Método utilizado para executar qualquer código enquanto o componente ---
        //Está sendo aberto ou renderizado
        //Baixar biblioteca de requisições - AXIOS

        //Gerando a requisição
        fetch("https://viacep.com.br/ws/01001000/json/").then(resposta => {
            return resposta.json();
        })
        .then(cep => {
            console.log(cep);
        });

        //Mensagem no console
        //console.log("Abriu o componente");

    });

    return (


        <div>

                            <h1> Consultar CEP </h1>

        </div>
        
    );
}


export default ConsultarCEP;