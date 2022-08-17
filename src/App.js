import { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

function App() {
  const [pages] = useState([{ name: 'about '}, { name: 'portfolio' }, { name: 'contact' }, { name: 'resume' }]);
  const [currentPage, setCurrentPage] = useState(pages[0])

  const [projects] = useState([
    { 
      title: 'Photo Port',
      link: 'https://cmskorcz.github.io/photo-port/',
      repo: 'https://github.com/cmskorcz/photo-port',
      img: 'photo-port-medium.jpeg'
    },
    {
      title: 'Event Buddy',
      link: 'https://murmuring-springs-16959.herokuapp.com/',
      repo: 'https://github.com/cmskorcz/bootcamp_project_2',
      img: 'event-buddy-medium.jpeg'
    },
    {
      title: 'Note Taker',
      link: 'https://sheltered-spire-48446.herokuapp.com/',
      repo: 'https://github.com/cmskorcz/note-taker',
      img: 'note-taker-medium.jpeg'
    },
    {
      title: 'FurEver Home',
      link: 'https://programmingastorm.github.io/FurEverHome/',
      repo: 'https://github.com/ProgrammingAStorm/FurEverHome',
      img: 'fur-ever-home-medium.jpeg'
    }
  ]);

  return (
    <>
    <Header 
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}  
    />
    <main>
      <About />
      <Portfolio
        projects={projects}
      />
      <ContactForm />
    </main>
    <Footer />
    </>
  );
}

export default App;
