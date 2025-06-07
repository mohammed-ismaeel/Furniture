// Import global stylesheet for the app
import "./App.css";

// Import all reusable UI components
import Banner from "./components/Banner/Banner";
import Beautify from "./components/Beautify/Beautify";
import Browse from "./components/Browse/Browse";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import Header from "./components/Header/Header";
import Works from "./components/Works/Works";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

// Import MUI theming utilities
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  // Create a custom MUI theme to define global typography
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat"], // Set custom font across the app
    },
  });

  return (
    <div className="w-full">
      {/* Provide the custom theme to all child components */}
      <ThemeProvider theme={theme}>
        {/* Application layout composed of multiple sections */}
        <Header />              
        <Banner />               
        <CollectionSection />    
        <Beautify />           
        <Browse />            
        <Works />               
        <Join />                
        <Footer />             
      </ThemeProvider>
    </div>
  );
}

export default App;
