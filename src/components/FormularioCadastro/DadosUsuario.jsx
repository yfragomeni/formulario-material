import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosUsuario() {
    return (
        <form onSubmit={ (e) => e.preventDefault()}>
            <TextField
                id="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth 
                required/>

            <TextField
                id="senha"
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth 
                required/>

            <Button
                type="submit"
                variant="contained"
                color="primary">Cadastrar</Button>
        </form>

    );
}

export default DadosUsuario;