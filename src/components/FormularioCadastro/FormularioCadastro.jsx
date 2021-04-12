import React, { useEffect, useState } from 'react';
import DadoPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEndereco from './DadosEndereco';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';


function FormularioCadastro({aoEnviar, validaCpf}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});
    useEffect(()=>{
        if(etapaAtual === formularios.length -1){
            aoEnviar(dadosColetados)
        }})

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados}/>,
        <DadoPessoais 
        aoEnviar={coletarDados}
        validaCpf={validaCpf}/>,
        <DadosEndereco aoEnviar={coletarDados}/>,
        <Typography variant="h5">Obrigada pelo cadastro!</Typography>
    ];

    function coletarDados(dados) {
        setDadosColetados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return(
        <>
        <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;