import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

function App() {
  return (
    <Container
    component="article" 
    maxWidth="sm">
    <Typography
    component="h1"
    variant="h3">Formulario de Cadastro</Typography>
    <FormularioCadastro
    aoEnviar={aoEnviarForm}
    validaCpf={validaCpf}/>
    </Container>
  );
}

export default App;

function aoEnviarForm(dados) {
  console.log(dados);
}

function validaCpf(cpf) {
  if (cpf.length !== 11) {
    return {valido: false, texto:"CPF precisa ter 11 digitos."}
  } else {
    return {valido: true, texto:""}
  }
}