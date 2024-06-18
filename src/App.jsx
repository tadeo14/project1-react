function App() {
  const alumnos = [
    { id: 1, nombre: 'Juan', edad: 20, curso: 'segundo' },
    { id: 2, nombre: 'Javier', edad: 25, curso: 'primero' },
    { id: 3, nombre: 'Pedro', edad: 22, curso: 'cuarto' },
  ];
  return (
    <>
      {alumnos.map(function (alumno) {
        return (
          <div>
            <h1>{alumno.nombre}</h1>
            <strong>{alumno.edad}</strong>
            <p>Esta cursando {alumno.curso}</p>
          </div>
        );
      })}
    </>
  );

  
};


export default App;