import { TextInput, StyleSheet, Platform } from 'react-native';

const Input = ({value, setter, text}) => {
    const keyboardType = Platform.OS === 'android' ? "numeric" : "default";

    return (
        <TextInput 
            keyboardType={keyboardType}
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