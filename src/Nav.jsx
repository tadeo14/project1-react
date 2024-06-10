import React from 'react'
import Button from 'react-bootstrap/Button'

export const Nav = () => {
 
 
 
 
    return (
        
      <nav class="navbar navbar-expand-lg colorNavbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"
          ><img
            src="/img/logosinfondo.png"
            alt="logo clinica"
            width="150px"
            height="85px"
        /></a>
        <Button variant="primary"> Primary</Button>{' '}
          <span class="navbar-toggler-icon"></span>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/loginAdministrador.html"
                >Administrador</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="./pages/loginMedico.html"
                    >Medico</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/pages/loginPaciente.html"
                    >Pacientes</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Registro
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/pages/registro.html"
                    >Medico</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/pages/registroPaciente.html"
                    >Pacientes</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Turno
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/pages/solicitarTurno.html"
                    >Generar Turno</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/pages/turnoasignados.html"
                    >Ver turnos Asignados Medicos</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="pages/contacto.html">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
