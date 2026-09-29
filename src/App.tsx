import { Text, View } from 'react-native';
import './styles/global.css';
import { Login } from './screens/Login';
import NavigationRoutes from './routes';
import { AuthContextProvider } from './context/auth.context';

export default function App() {
  return
  <AuthContextProvider>
    <NavigationRoutes />
  </AuthContextProvider>
}