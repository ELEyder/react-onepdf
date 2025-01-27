const Home: React.FC = () => {
  return (
    <div className="container mt-5">
        <h1>Generar Documento</h1>
        <form action="http://127.0.0.1:5000/generar" method="post">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="form-control" required />
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input type="date" id="fecha" name="fecha" className="form-control" required />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea id="descripcion" name="descripcion" className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Generar PDF</button>
        </form>
    </div>
  );
};

export default Home;