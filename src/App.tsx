import { Text, View } from 'react-native';
import './styles/global.css';
import { Login } from './screens/Login';
import NavigationRoutes from './routes';
import { AuthContextProvider } from './context/auth.context';
import { SnackbarContextProvider } from './context/snackbar.context';
import { Snackbar } from './Components/Snackbar';
import { BottomSheetProvider } from './context/bottomsheet.context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SnackbarContextProvider>
        <AuthContextProvider>
            <NavigationRoutes />
            <Snackbar />
        </AuthContextProvider>
      </SnackbarContextProvider>
    </GestureHandlerRootView>

  )
}