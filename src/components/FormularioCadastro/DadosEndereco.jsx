import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEndereco({aoEnviar}) {
    const [endereco, setEndereco] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    return (
        <form onSubmit={ (e) => {e.preventDefault();
            aoEnviar({endereco, cep, numero, cidade, estado});
        }}>
            <TextField
                id="endereço"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth 
                value={endereco}
                onChange={ (e) =>{setEndereco(e.target.value)}}/>

            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={ (e) =>{setCep(e.target.value)}}/>

            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
                value={numero}
                onChange={ (e) =>{setNumero(e.target.value)}}/>

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                value={cidade}
                onChange={ (e) =>{setCidade(e.target.value)}}/>

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                value={estado}
                onChange={ (e) =>{setEstado(e.target.value)}}/>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>Finalizar cadastro</Button>
        </form>

    );
}

export default DadosEndereco;