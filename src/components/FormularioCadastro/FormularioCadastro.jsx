import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    return(
        <form
        onSubmit={(event) => 
            {event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});}
        }>
            <TextField
            value={nome} 
            variant="outlined" 
            label="Nome"
            id="nome"
            margin="normal"
            fullWidth
            onChange={(event) => {
                setNome(event.target.value);
            }}/>

            <TextField 
            value={sobrenome}
            variant="outlined" 
            label="Sobrenome"
            id="sobrenome"
            margin="normal"
            onChange = {(event) => {
                setSobrenome(event.target.value);
            }
            }
            fullWidth/>

            <TextField
            value={cpf} 
            variant="outlined" 
            label="CPF"
            id="cpf"
            margin="normal"
            onChange = {(event) => {
                setCpf(event.target.value);
            }
            }
            fullWidth/>

            <FormControlLabel
            control={
                <Switch
                checked={promocoes}
                onChange = {(event) => {
                    setPromocoes(event.target.checked);
                }}
                name="promocoes"
                color="primary"/>}
            label="Promoções"/>
            
            <FormControlLabel
            control={
                <Switch
                checked={novidades}
                onChange = {(event) => {
                    setNovidades(event.target.checked);
                }}
                name="novidades"
                color="primary"/>}
            label="Novidades"/>

            <Button 
            type="submit"
            variant="contained"
            color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;