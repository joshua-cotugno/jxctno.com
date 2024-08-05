import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGuitar, faCode, faLaptopCode, faMusic, faCog, faHamburger, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import galleryImages from './gallery';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className="profile-img" src="https://via.placeholder.com/200" alt="Jace Cotugno" />
        <h1>Jace Cotugno</h1>
        <p>Age: 18</p>
        <p>Location: University of East London (Application TBD)</p>
        <section>
          <h2>About Me</h2>
          <p>Hi! I'm Jace, an 18-year-old student currently studying A Level Music, Computer Science, and Physics. I'm passionate about music and technology, and I'm awaiting confirmation for my application to study Music Production at the University of East London. In my free time, I enjoy playing various instruments, writing music, reading manga and anime, and tinkering with computers. I also have experience working at festivals and in catering, particularly with the Churro Boyz. Feel free to reach out to me through my contact information or social media links below!</p>
        </section>
        <section>
          <h2>Hobbies and Interests</h2>
          <ul>
            <li><FontAwesomeIcon icon={faGuitar} /> Plays guitar, bass ukulele, and keys</li>
            <li><FontAwesomeIcon icon={faMusic} /> Loves manga and anime</li>
            <li><FontAwesomeIcon icon={faLaptopCode} /> Tinkers with computers</li>
            <li><FontAwesomeIcon icon={faMusic} /> Likes writing music</li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <p>A level Music, Computer Science, and Physics</p>
          <p>Awaiting application confirmation for Music production at UEL</p>
        </section>
        <section>
          <h2>Experience</h2>
          <ul>
            <li><FontAwesomeIcon icon={faCog} /> Club 85 in Hitchin</li>
            <li><FontAwesomeIcon icon={faHamburger} /> Multiple festivals working on catering trailers (mainly Churro Boyz)</li>
            <li><FontAwesomeIcon icon={faHamburger} /> Working in the Churro Boyz tapas/churro bar</li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li><FontAwesomeIcon icon={faGuitar} /> Instruments: Guitar, Bass, Ukulele, Keys</li>
            <li><FontAwesomeIcon icon={faCode} /> Javascript/HTML</li>
            <li><FontAwesomeIcon icon={faCode} /> Python</li>
            <li><FontAwesomeIcon icon={faLaptopCode} /> PC building/repair</li>
            <li><FontAwesomeIcon icon={faCog} /> Instrument maintenance</li>
            <li><FontAwesomeIcon icon={faHamburger} /> Cooking</li>
          </ul>
        </section>
        <section>
          <h2>Contact Info</h2>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: jxctno@gmail.com</p>
          <p>Social Media:</p>
          <ul>
            <li><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/jxctno">@jxctno</a></li>
            <li><FontAwesomeIcon icon={faFacebook} /> Facebook: <a href="https://www.facebook.com/profile.php?id=100094095860864">Jace's Facebook</a></li>
            <li><FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/jxctn0">Jace's GitHub</a></li>
          </ul>
        </section>
        <section>
          <h2>Gallery</h2>
          {galleryImages.map(([url, alt], index) => (
            <div key={index} className="gallery-img-container">
              <img className="gallery-img" src={url} alt={alt} onClick={() => openModal(url)} />
              <div className="preview-button" onClick={() => openModal(url)}>
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </div>
            </div>
          ))}
        </section>
      </header>
      {isModalOpen && (
        <div className="fullscreen-modal show-modal">
          <img src={modalImage} alt="Fullscreen preview" />
          <div className="close-button" onClick={closeModal}>X</div>
        </div>
      )}
    </div>
  );
}

export default App;
