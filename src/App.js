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
    <FormularioCadastro/>
    </Container>
  );
}

export default App;
