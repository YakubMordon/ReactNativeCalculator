import { Text, Pressable, StyleSheet } from 'react-native';


const ButtonPressable = ({solver}) => {
    return (
        <Pressable style={styles.button} onPress={solver}>
            <Text style={styles.textColor}>Нажміть</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button:{
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 12, 
        paddingHorizontal: 32, 
        borderRadius: 4, 
        elevation: 3, 
        backgroundColor: '#454440'
    },
    textColor:{
        color: 'white'
    }
});

export default ButtonPressable;