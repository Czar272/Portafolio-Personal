import React, { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [showSustBtn, setShowSustBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const subtitles = document.getElementById('subtitles');
      const rect = subtitles.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Verifica si el elemento subtitles está completamente fuera del viewport
      if (rect.bottom < 0 || rect.top > windowHeight) {
        setShowSustBtn(true);
      } else {
        setShowSustBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="contenedor">
        <div className="header">
          <div className="leftHeader">
            <div className="profilePic"> César López </div>
          </div>
          <div id = "midHeader" className="midHeader">
            {showSustBtn && (
                <>
                  <div className="sustBtn">Studies</div>
                  <div className="sustBtn">Projects</div>
                  <div className="sustBtn">Experience</div>
                  <div className="sustBtn">Contact Me</div>
                </>
              )}
          </div>
          <div className="rightHeader">
            <div className="imgMenu"></div>
          </div>
        </div>
        <div className="content">
          <div className="Title">Designer and Frontend Developer</div>
          <div id = "subtitles" className ="subtitles">
              <div className="btn">Studies</div>
              <div className="btn">Projects</div>
              <div className="btn">Experience</div>
              <div className="btn">Contact Me</div>
            </div>
          <div className="resumen">
            <div className="PP"></div>
            <div className="ResumenDesc"> <br/> Pablo Cesar Lopez Medina <br/> Estudiante en Licenciatura en Ingienieria en Ciencias de la Computacion y Tecnologias de la Informacion</div>
          </div>
          <div className="Categoria"> Studies:
            <div className="CategoriaInfo">
              <div className="StudyD">
                <div className="PicnName">
                  <div className="pic1"></div>
                  <div className="name">Bilingue el Prado</div>
                </div>
                <div className="StudyDesc"><br/> <b>Bilingue el Prado</b>   Estudie en este colegio desde el 7mo grado hasta el 12vo, habiéndome graduado de ahi sali con un bachiller en ciencias y letras con orientación en computación.  </div>
              </div>
              <div className="StudyD">
                <div className="PicnName">
                    <div className="pic2"></div>
                    <div className="name">UVG</div>
                  </div>
                <div className="StudyDesc"><br/> <b>Universidad del Valle de Guatemala</b> Actualmente cursando el 6to semestre o 3er año, todos los cursos aprobados y con promedio anual de 80 en adelante. </div>
 
              </div>
            </div>
          </div>
          <div className="CategoriaP"> Projects: 
            <div className="CardsB">
              <div className="card">
                <div className="imgCard" style={{backgroundImage: 'url(../src/assets/imagenes/BlogPic1.png)'}}></div>
                <div className="TitleCard"> Log In</div>
                <div className="descCard">Inicio de sesion a un sitio web con la implementacion de una ruta privada /admin, que provee acciones y acceso a rutas unicas para el, diferenciandolo a otros usuarios. </div>
              </div>
              <div className="card">
                <div className="imgCard" style={{backgroundImage: 'url(../src/assets/imagenes/ChatPic1.png)'}}></div>
                <div className="TitleCard"> Chat</div>
                <div className="descCard"> Chat grupal que se conecta a una API, todo desarrollado con JavaScript vanilla y es interactivo con todas las personas que se logren conectar a la API.</div>
              </div>              
              <div className="card">
                <div className="imgCard" style={{backgroundImage: 'url(../src/assets/imagenes/CalculadoraPic1.png)'}}></div>
                <div className="TitleCard"> Calculadora</div>
                <div className="descCard"> <br /> Calculadora funcional con teclado y mouse que integra tests par poder aprender la importancia de testings.</div>
              </div>
            </div>
            <div className="CardsB">
              <div className="card">
                <div className="imgCard"></div>
                <div className="TitleCard"> Blog</div>
                <div className="descCard"></div>
              </div>
              <div className="card">
                <div className="imgCard"></div>
                <div className="TitleCard"> Proyecto CSS Only</div>
                <div className="descCard"> <br/>Una pagina web que despliega un dibujo solamente hecho con CSS, siendo interactivo y con animaciones</div>
              </div>              
              <div className="card">
                <div className="imgCard"></div>
                <div className="TitleCard"> Calculadora</div>
                <div className="descCard"></div>
              </div>
            </div>
          </div>
          <div className="Experience"></div>
          <div className="Contact"></div>
        </div>
      </div>
    </>
  )
}

export default App
