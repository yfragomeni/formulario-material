import React, { useState } from 'react';
import DadoPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEndereco from './DadosEndereco';


function FormularioCadastro({aoEnviar, validaCpf}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const formularios = [
        <DadosUsuario aoEnviar={proximo}/>,
        <DadoPessoais 
        aoEnviar={proximo}
        validaCpf={validaCpf}/>,
        <DadosEndereco aoEnviar={aoEnviar}/>
    ];

    function proximo() {
        console.log("Entrou");
        setEtapaAtual(etapaAtual + 1);

    }

    return(
        <>{formularios[etapaAtual]}</>
    );
}

export default FormularioCadastro;