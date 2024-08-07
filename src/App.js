import  Navbar  from './components/Navbar';
import Home from './pages/Home';
import ContactSection from './components/contact';
import './App.css'
// import AllRoutes from './routes/AllRoutes';
import  Footer  from './components/Footer';
import EventDashboard from './components/EventDashboard';
import FAQ from './components/FAQ';
import About from './components/about'
import SocialShareBar from './components/socialshare';


function App() {
  console.log("object")
  return (
    <div className='App'>
      <Navbar />
      {/* <AllRoutes /> */}
      <Home/>
      <About/>
      <EventDashboard />
      <FAQ />
      <ContactSection/>
      <Footer />
      <SocialShareBar/>
    </div>
  );
}

export default App;
