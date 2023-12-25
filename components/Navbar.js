import { View, Text, StyleSheet } from 'react-native';
import { Link, Outlet } from "react-router-native";

const Navbar = () => {
  return (
    <>
      <View style={styles.container}>
        <Link to="/" underlayColor="#f0f4f7">
            <Text style={styles.textColor}>Stochastic</Text>
        </Link>
        <Text style={styles.textColor}>|</Text>
        <Link to="/kolgomorov" underlayColor="#f0f4f7">
            <Text style={styles.textColor}>Kolgomorov</Text>
        </Link>
        <Text style={styles.textColor}>|</Text>
        <Link to="/montecarlo" underlayColor="#f0f4f7">
            <Text style={styles.textColor}>MonteCarlo</Text>
        </Link>
      </View>

      <Outlet />
    </>
  )
};

const styles = StyleSheet.create({
  container:{
    marginTop: 40, 
    backgroundColor: '#333333',
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10
  },
  textColor:{
    color: 'white'
  }
});


export default Navbar;