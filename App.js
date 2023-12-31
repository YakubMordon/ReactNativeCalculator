import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Routes} from 'react-router-native';
import Navbar from './components/Navbar';
import Stochastic from './components/Stochastic';
import Kolgomorov from './components/Kolgomorov';
import MonteCarlo from './components/MonteCarlo';
import QuestionProvider from './providers/QuestionContext';
import Questions from './components/Questions';

export default function App() {
  return (
    <QuestionProvider>
      <NativeRouter>
        <View style={styles.container}>
          <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path="/" element={<Stochastic />}/>
              <Route path="/questions" element={<Questions />}/>
              <Route path="/kolgomorov" element={<Kolgomorov />}/>
              <Route path="/montecarlo" element={<MonteCarlo />}/>
            </Route>
          </Routes>
        </View>
      </NativeRouter>
    </QuestionProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%'
  }
});