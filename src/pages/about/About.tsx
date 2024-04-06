import image1 from '../../assets/images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg'
import image2 from '../../assets/images/alexander-schimmeck-R5IxlpyynrI-unsplash.jpg'
import image3 from '../../assets/images/jacob-thomas-XzNo-9cQRL0-unsplash.jpg'
import image4 from '../../assets/images/mufid-majnun-PHOf-72Iw-A-unsplash.jpg'
import image5 from '../../assets/images/zulu-fernando-VZuXIoGhniQ-unsplash.jpg'

import './about.css'

const About = () => {
  return (
    <section className="about">
      <div
        className="container about__container"
      >
        <h1>
          Acerca de Nosotros
        </h1>
        <div
          className='about__content'
        >
          <div
            className='about__content-left'
          >
            <h2>Nuestra Historia</h2>
            <p>En 2024, nace nuestra pasión por la comida y la comunidad. Nos reunimos como amigos con el deseo de compartir nuestras recetas favoritas y descubrir nuevos sabores juntos. Así nace nuestra plataforma, un espacio donde la comida une a las personas, donde cada receta cuenta una historia y cada plato es una experiencia única.</p>

            <h2>Misión</h2>
            <p>Promover la diversidad gastronómica de Guatemala ofreciendo opciones saludables y no saludables para satisfacer todos los gustos. Creemos que el sabor es lo más importante, conectando a las personas con recetas auténticas y tradicionales que resalten la riqueza cultural de nuestra región.</p>

            <h2>Visión</h2>
            <p>Convertirnos en la plataforma de referencia para la comida guatemalteca, un lugar donde los amantes de la comida puedan encontrar inspiración, compartir sus recetas y descubrir nuevas formas de disfrutar de la comida. Queremos ser un espacio inclusivo y acogedor donde todos puedan sentirse bienvenidos y celebrar la diversidad culinaria de nuestra región.</p>

          </div>

          <div
            className='about__content-right'
          >
            <div
              className='about__image-container aic__1'
            >
              <img
                src={image1}
                alt="about__image"
              />
            </div>
            <div
              className='about__image-container aic__2'
            >
              <img
                src={image2}
                alt="about__image"
              />
            </div>
            <div
              className='about__image-container aic__3'
            >
              <img
                src={image3}
                alt="about__image"
              />
            </div>
            <div
              className='about__image-container aic__4'
            >
              <img
                src={image4}
                alt="about__image"
              />
            </div>
            <div
              className='about__image-container aic__5'
            >
              <img
                src={image5}
                alt="about__image"
              />
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default About