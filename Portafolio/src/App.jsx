import React, { useEffect } from 'react';
import './App.css'

function App() {

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const subtitles = document.getElementById('subtitles')
  //     const midHeader = document.getElementById('midHeader')
  //     const rect = subtitles.getBoundingClientRect()

  //     if (rect.top < 0 || rect.bottom > 0) {
  //       if(!midHeader.contains(subtitles)) {
  //         midHeader.appendChild(subtitles)
  //         subtitles.classList.add('sticky')
  //       }
  //     } else {
  //       const content = document.querySelector('.content')
  //       if(!content.contains(subtitles)) {
  //         content.insertBefore(subtitles, content.children[2])
  //         subtitles.classList.remove('sticky')
  //       }
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])


  useEffect(() => {
    const handleScroll = () => {
      const subtitles = document.getElementById('subtitles');
      const midHeader = document.getElementById('midHeader');
      const rect = subtitles.getBoundingClientRect();

      if (rect.top < 0 || rect.bottom < 0) {
        // Mueve los botones al midHeader
        if (!midHeader.contains(subtitles)) {
          midHeader.appendChild(subtitles);
          subtitles.classList.add('sticky');
        }
      } else {
        // Mueve los botones de vuelta a su lugar original si están visibles
        const content = document.querySelector('.content');
        if (!content.contains(subtitles)) {
          content.insertBefore(subtitles, content.children[2]);
          subtitles.classList.remove('sticky');
        }
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
          <div id = "midHeader" className="midHeader"></div>
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
          <div className="Studies"> Studies:
            <div className="StudyInfo">
              <div className="StudyD">
                <div className="PicnName">
                  <div className="pic1"></div>
                  <div className="name">Bilingue el Prado</div>
                </div>
                <div className="StudyDesc"><br/> Bilingue el Prado <br /> <br />  Estudie en este colegio desde el 7mo grado hasta el 12vo, habiéndome graduado de ahi sali con un bachiller en ciencias y letras con orientación en computación.  </div>
              </div>
              <div className="StudyD">
                <div className="PicnName">
                    <div className="pic2"></div>
                    <div className="name">UVG</div>
                  </div>
                <div className="StudyDesc"><br/> Universidad del Valle de Guatemala <br /> <br />  Actualmente cursando el 6to semestre o 3er año, todos los cursos aprobados y con promedio anual de 80 en adelante. </div>

              </div>
            </div>
          </div>
          <div className="Projects"></div>
          <div className="Experience"></div>
          <div className="Contact"></div>
        </div>
      </div>
    </>
  )
}

export default App
