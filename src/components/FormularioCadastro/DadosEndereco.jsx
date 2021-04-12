import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosEndereco() {
    return (
        <form onSubmit={ (e) => e.preventDefault()}>
            <TextField
                id="endereço"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                />

            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
                />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>Finalizar cadastro</Button>
        </form>

    );
}

export default DadosEndereco;