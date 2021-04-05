import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    return(
        <form>
            <TextField 
            variant="outlined" 
            label="Nome"
            id="nome"
            margin="normal"
            fullWidth/>

            <TextField 
            variant="outlined" 
            label="Sobrenome"
            id="sobrenome"
            margin="normal"
            fullWidth/>

            <TextField 
            variant="outlined" 
            label="CPF"
            id="cpf"
            margin="normal"
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
            variant="contained"
            color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;