import Rotas from './routes'
import { AuthProvider } from './context/auth';
import GlobalStyle from './styles/global'

function App() {
  return (
    <AuthProvider>
      <Rotas/>
      <GlobalStyle/>
    </AuthProvider>
  );
}

export default App;
