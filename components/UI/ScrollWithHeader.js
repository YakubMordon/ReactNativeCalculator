import { View, Text, StyleSheet} from 'react-native';


const ScrollWithHeader = ({text, array}) => {
    return (
        <>
            <Text style={styles.tableText}>{text}</Text>
            <View style={styles.tableView}>
            {
                array.map((value, index) => (
                <Text style={styles.tableText} key={index}>{value}</Text>
                ))
            }
            </View>
        </>
    )
};

const styles = StyleSheet.create({
  tableView:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  tableText:{
    fontSize: 17,
    marginVertical: 10,
    color: 'white'
  }
});

export default ScrollWithHeader;