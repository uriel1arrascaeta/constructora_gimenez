import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("No se pudieron cargar los proyectos. Asegúrate de que el servidor backend esté funcionando.");
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">Constructora Gimenez</h1>
          <nav>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Construyendo Sueños, Creando Realidades</h2>
            <p>Calidad, compromiso y excelencia en cada proyecto.</p>
            <a href="#contacto" className="cta-button">Contáctanos</a>
          </div>
        </section>

        <section id="servicios" className="services container">
          <h3>Nuestros Servicios</h3>
          <div className="service-cards">
            <div className="card">
              <h4>Construcción Residencial</h4>
              <p>Diseñamos y construimos la casa de tus sueños con los más altos estándares de calidad.</p>
            </div>
            <div className="card">
              <h4>Proyectos Comerciales</h4>
              <p>Desarrollamos espacios comerciales funcionales y modernos para tu negocio.</p>
            </div>
            <div className="card">
              <h4>Remodelaciones</h4>
              <p>Transformamos y modernizamos tus espacios para darles una nueva vida.</p>
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects container">
          <h3>Proyectos Recientes</h3>
          {error && <p className="error-message">{error}</p>}
          <div className="project-list">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="card project-card">
                  {/* Puedes agregar imágenes aquí en el futuro */}
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                </div>
              ))
            ) : (
              !error && <p>Cargando proyectos...</p>
            )}
          </div>
        </section>

        <section id="nosotros" className="about container">
          <h3>Sobre Nosotros</h3>
          <p>
            Con más de 20 años de experiencia en el sector, Constructora Gimenez se ha consolidado como un referente de calidad y confianza. Nuestro equipo de profesionales está comprometido con la excelencia y la satisfacción de nuestros clientes en cada etapa del proyecto.
          </p>
        </section>

        <section id="contacto" className="contact container">
          <h3>Hablemos de tu próximo proyecto</h3>
          <p>Estamos listos para ayudarte a hacerlo realidad. Contáctanos para una consulta sin compromiso.</p>
          <div className="contact-info">
            <p><strong>Email:</strong> contacto@constructoragimenez.com</p>
            <p><strong>Teléfono:</strong> +54 9 11 1234-5678</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Constructora Gimenez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;