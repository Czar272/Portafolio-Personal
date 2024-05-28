import React, { useEffect, useState } from 'react';
import './App.css'

function App() {

  // external js: flickity.pkgd.js

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
            <div className="profilePic">
              <div className="luna">
                <div className="lunaimg"></div>
              </div>
            </div>
          </div>
          <div id = "midHeader" className="midHeader">
              {/* <div className="sustBtn">Studies</div>
              <div className="sustBtn">Projects</div>
              <div className="sustBtn">Experience</div>
              <div className="sustBtn">Contact Me</div> */}
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
            <div className="ResumenDesc"> <br/> Pablo Cesar Lopez Medina <br/> Estudiante en Ingienieria en Ciencias de la Computacion y Tecnologias de la Informacion</div>
            <div className="socials">
              <a className="imgSocial" style = {{ width: "10%" }}href = 'https://www.linkedin.com/in/pablo-c%C3%A9sar-l%C3%B3pez-medina-8055b6241'>
                <div className="icon" style={{ marginLeft: '5%', marginRight: '5%', backgroundImage: 'url(https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9f/ae/bf/9faebf2f-19aa-d6f7-88f8-5c5913724c9f/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/1200x600wa.png)'}}></div>
                Linkedin
              </a>
              <a className="imgSocial" style={{width: '10%'}} href='https://github.com/Czar272'>
                <div className="icon" style={{ marginLeft: '5%', marginRight: '10%', backgroundImage: 'url(https://banner2.cleanpng.com/20180711/iqy/kisspng-github-computer-icons-github-logo-5b459a3d238b60.4061479515312881251456.jpg)'}}></div>
                Github
              </a>
              <a className="imgSocial" style = {{width: '10%'}}href="mailto:pablo2003cesar@gmail.com">
                <div className="icon" style={{ marginLeft: '5%',marginRight: '10%' ,backgroundImage: 'url(https://freelogopng.com/images/all_img/1657906383gmail-icon-png.png)'}}></div>
                Gmail
              </a>
            </div>
          </div>
          <div className="Categoria" style={{backgroundColor: '#348888', color: 'white', border: '3px solid black'}}> Studies:
            <div className="CategoriaInfo">
              <div className="StudyD" style={{backgroundColor: 'white', border: '3px solid black'}}>
                <div className="PicnName" >
                  <div className="pic1"></div>
                  <div className="name">Bilingue el Prado</div>
                </div>
                <div className="StudyDesc"><br/> <b>Bilingue el Prado</b>   Estudie en este colegio desde el 7mo grado hasta el 12vo, habiéndome graduado de ahi sali con un bachiller en ciencias y letras con orientación en computación.  </div>
              </div>
              <a className="StudyD " style={{backgroundColor: 'white', border: '3px solid black'}} href='https://www.uvg.edu.gt'>
                <div className="PicnName">
                    <div className="pic2"></div>
                    <div className="name">UVG</div>
                  </div>
                <div className="StudyDesc"><br/> <b>Universidad del Valle de Guatemala</b> Actualmente cursando el 6to semestre o 3er año, todos los cursos aprobados y con promedio anual de 80 en adelante. </div>
              </a>
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
                <div className="descCard">  Calculadora funcional con teclado y mouse que integra tests par poder aprender la importancia de testings.</div>
              </div>
            </div>
            <div className="CardsB">
              <div className="card">
                <div className="imgCard" style={{backgroundImage: 'url(../src/assets/imagenes/BlogPic2.jpg)'}}></div>
                <div className="TitleCard"> Blog</div>
                <div className="descCard">  Blog de la historia de un video juego, todo su contenido es extraído de una base de datos realizada en MySQL workbench.</div>
              </div>
              <a className="card" href = 'http://uwu-guate.site:3414'>
                <div className="imgCard" style={{backgroundImage: 'url(../src/assets/imagenes/CSSOnlyP1.png)'}}></div>
                <div className="TitleCard"> Proyecto CSS Only</div>
                <div className="descCard"> <br/>Una pagina web que despliega un dibujo solamente hecho con CSS, siendo interactivo y con animaciones</div>
              </a>              
              <div className="card">
                <div className="imgCard" style={{backgroundImage: 'url(../src/assets/imagenes/editimg1.jpg)'}}></div>
                <div className="TitleCard"> Editar Post</div>
                <div className="descCard">  Una funcionalidad para el blog, donde modifica una base de datos por medio de querys desde la misma pagina web. </div>
              </div>
            </div>
          </div>
          <div className="Categoria" style={{backgroundColor: '#348888', color: 'white', border: '3px solid black'}}>
            Tecnlogies:
            <div className="tecnologias">
              <div className="rowTec">
                <div className="tecImgs" style={{backgroundImage: 'url(https://w1.pngwing.com/pngs/835/530/png-transparent-python-logo-programming-language-computer-programming-python-programming-basics-for-absolute-beginners-scripting-language-source-code-php-code-climate-inc-thumbnail.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/226/226777.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1144/0*9je4S8adxijCGILV.jpg)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://cdn-icons-png.flaticon.com/256/174/174854.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://img-resize-cdn.joshmartin.ch/768x0%2Cc3537b9f46b5f6055fbc8b4cd03b6b2cc63fc2eefd3d8cd9f0c9f99a5933e496/https://joshmartin.ch/app/uploads/2017/10/css3.svg)'}}></div>
              </div>
              <div className="rowTec">
                <div className="tecImgs" style={{backgroundImage: 'url(https://www.step2gen.com/WebsiteAssets/assets/images/nodejs.svg)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://javguerra.github.io/assets/img/mysql.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://avatars.githubusercontent.com/u/18133?s=280&v=4)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png )'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png)'}}></div>
                <div className="tecImgs" style={{backgroundImage: 'url(https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png)'}}></div>
              </div>              
            </div>
          </div>
          <div className="Contact"></div>
        </div>
      </div>
    </>
  )
}

export default App
