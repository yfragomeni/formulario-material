import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");

    return(
        <form
        onSubmit={(event) => 
            {event.preventDefault();
            console.log(nome, sobrenome, cpf);}
        }>
            <TextField
            value={nome} 
            variant="outlined" 
            label="Nome"
            id="nome"
            margin="normal"
            fullWidth
            onChange={(event) => {
                let nomeTemp = event.target.value;
                if(nomeTemp.length >= 3) {
                    nomeTemp = nomeTemp.substr(0,3);
                }
                setNome(nomeTemp);
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
                defaultChecked
                name="promocoes"
                color="primary"/>}
            label="Promoções"/>
            
            <FormControlLabel
            control={
                <Switch
                defaultChecked
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