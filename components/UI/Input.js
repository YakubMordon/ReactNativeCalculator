import { TextInput, StyleSheet } from 'react-native';

const Input = ({value, setter, text}) => {
    return (
        <TextInput 
            value={value} 
            onChangeText={(text) => setter(text)} 
            style={styles.input} 
            placeholder={text}
        />
    )
};

const styles = StyleSheet.create({
  input:{
    borderWidth: 0.5, width: '75%', textAlign: 'center'
  }
});

export default Input;