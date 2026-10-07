import './styles/global.css';
import NavigationRoutes from './routes';
import { AuthContextProvider } from './context/auth.context';
import { SnackbarContextProvider } from './context/snackbar.context';
import { Snackbar } from './Components/Snackbar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TransactionContextProvider } from './context/transaction.context';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SnackbarContextProvider>
        <AuthContextProvider>
          <TransactionContextProvider>
              <NavigationRoutes />
              <StatusBar style='light' />
              <Snackbar />
          </TransactionContextProvider>
        </AuthContextProvider>
      </SnackbarContextProvider>
    </GestureHandlerRootView>

  )
}