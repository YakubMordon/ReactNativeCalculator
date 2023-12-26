import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Routes} from 'react-router-native';
import Navbar from './components/Navbar';
import Stochastic from './components/Stochastic';
import Kolgomorov from './components/Kolgomorov';
import MonteCarlo from './components/MonteCarlo';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path="/" element={<Stochastic />}/>
            <Route path="/kolgomorov" element={<Kolgomorov />}/>
            <Route path="/montecarlo" element={<MonteCarlo />}/>
          </Route>
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%'
  }
});