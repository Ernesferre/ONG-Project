import './App.css';
import RegisterForm from './components/RegisterForm'
import { theme, ThemeProvider } from '@chakra-ui/react'
  


function App() {
  return (
    
    
    <ThemeProvider theme={theme}>
        <div className="App">
          <RegisterForm />
        </div>
    </ThemeProvider>
    
    
  
    
  );
}

export default App;
