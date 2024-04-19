import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Banner } from "../components/Banner";

export function Acceso() {
  return (
    <div className="Acceso">
      <Banner />

      <div className="contenido">
        <h2 id="titulo">Por favor, inicia sesión</h2>

        <div className="formulario">
          <TextField 
            id="clavedocente" 
            label="Clave docente" 
            type="search" 
            variant="standard" 
            fullWidth 
            margin="normal"
          />
          <br />
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<LoginIcon />}
            fullWidth
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
