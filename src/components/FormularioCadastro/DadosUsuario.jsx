import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form onSubmit={ (e) => 
        {e.preventDefault();
            aoEnviar({email, senha})
        }}>
            <TextField
                id="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth 
                required
                value={email}
                onChange={ (e) =>{setEmail(e.target.value)}}/>

            <TextField
                value={senha}
                id="senha"
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth 
                required
                onChange={ (e) =>{setSenha(e.target.value)}}/>

            <Button
                type="submit"
                variant="contained"
                color="primary">Cadastrar</Button>
        </form>

    );
}

export default DadosUsuario;