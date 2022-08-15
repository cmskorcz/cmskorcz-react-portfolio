import { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [pages] = useState([{ name: 'about '}, { name: 'portfolio' }, { name: 'contact' }, { name: 'resume' }]);
  const [currentPage, setCurrentPage] = useState(pages[0])

  const [projects] = useState([{ title: 'Project 1', link: 'https://google.com' }]);

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
    </main>
    <Footer />
    </>
  );
}

export default App;
