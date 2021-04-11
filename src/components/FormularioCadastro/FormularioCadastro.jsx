import React from 'react';
import DadoPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEndereco from './DadosEndereco';


function FormularioCadastro({aoEnviar, validaCpf}) {

    return(
        <>
        <DadoPessoais 
        aoEnviar={aoEnviar}
        validaCpf={validaCpf}/>
        <DadosUsuario/>
        <DadosEndereco/>
        </>
    );
}

export default FormularioCadastro;