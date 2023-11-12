import '../styles/login.css';
import logo from '../imagenes/chefluzdelicias.png';


function LogIn() {
  return (    
      <body>        
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    {/* Imagen de la empresa */}
                    <div class= "logochef" ><img src={logo} alt='logo'/>                                                                
                    </div>
                    <div class="titulo">
                        Bienvenido, por favor inicia sesión
                    </div>
                    {/* Formulario de ingreso */}
                    <form id="loginform">
                        <input id="username" type="text" name="usuario" placeholder="Usuario" required></input>
                        
                        <input id="password" type="password" placeholder="Contraseña" name="Contraseña" required></input>
                        
                        <button type="submit" title="Ingresar" name="Ingresar" id="buttonSubmit" >Iniciar</button>
                    </form>                    
                </div>               
            </div>
        </div>
        
    </body>
    
  );
}

export default LogIn;
