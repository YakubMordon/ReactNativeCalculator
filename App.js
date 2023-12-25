import { View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Navbar from './components/Navbar';
import Stochastic from './components/Stochastic';
import Kolgomorov from './components/Kolgomorov';
import MonteCarlo from './components/MonteCarlo';

export default function App() {
  return (
    <NativeRouter>
      <View>
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