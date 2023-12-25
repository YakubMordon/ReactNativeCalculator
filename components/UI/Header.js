import { Text, StyleSheet } from 'react-native';

const Header = ({text}) => {
    return (
        <Text style={styles.header}>
            {text}
        </Text>
    )
};

const styles = StyleSheet.create({
  header:{
    fontSize: 20, 
    fontWeight: "600"
  }
});

export default Header;