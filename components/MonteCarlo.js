import { useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ButtonPressable from './UI/ButtonPressable'
import Header from './UI/Header';
import Input from './UI/Input';


const MonteCarlo = () => {
  const [sequenceInput, setSequenceInput] = useState('');
  const [intervalInput, setIntervalInput] = useState('');
  const [data, setData] = useState(0);
  const [result, setResult] = useState([]);
  const [finalString, setFinalString] = useState('');

  const solveMontecarlo = () =>{

    try{
      const numbers = sequenceInput.split(' ').map(Number);
      const interval = Number(intervalInput);

      if(interval == 0) throw new Error("error");
      const uniqueNumbers = {};

      numbers.forEach(number => {
        uniqueNumbers[number] = (uniqueNumbers[number] || 0) + 1;
      });

      Object.keys(uniqueNumbers).forEach(key => {
        uniqueNumbers[key] /= numbers.length;
      });

      let stringBuilder = []
      
      let finalString = `Значення випадкової величини, яка відповідає ймовірності ${interval} становить `;

      let prev = 0;

      let labels = [0]

      let dataset = [0, 0, 0]

      Object.keys(uniqueNumbers).forEach(key => {

        labels = [...labels, key]

        dataset = [...dataset, (prev + uniqueNumbers[key]).toFixed(2), (prev + uniqueNumbers[key]).toFixed(2)]

        stringBuilder = [...stringBuilder, [`${key}`, `${uniqueNumbers[key].toFixed(3)}`, `${(prev + uniqueNumbers[key]).toFixed(2)}`]];

        if(interval >= prev && interval <= prev + uniqueNumbers[key]){
          finalString += key + ' ';
        }
        prev += uniqueNumbers[key]

      });
      
      let data = {
        labels: labels, 
        datasets: [
          {
            data: dataset,
          },
        ],
      };

      setData(data);
      setFinalString(finalString);
      setResult(stringBuilder);
    }catch(e){
      console.log('error');
    }
  }

  return (
      <View style={styles.mainContainer}>
          <Header text={"Метод Монте-Карло"}/>

          <Input value={sequenceInput} setter={setSequenceInput} text={'Введіть послідовність випадкових чисел'}/>
          <Input value={intervalInput} setter={setIntervalInput} text={'Введіть інтервал'}/>

          <ButtonPressable solver={solveMontecarlo}/>

          <View style={styles.tableView}> 
            <Text>Число</Text>
            <Text>Ймовірність</Text>
            <Text>Комутативна ймовірність</Text>
          </View>
          <View style={styles.container}>
              <View style={styles.innerContainer}>
                  <ScrollView>
                      <View>
                        {result.map((value, index) => (
                          <View style={styles.tableView} key={index}>
                            <Text style={styles.tableText}>{value[0]}</Text>
                            <Text style={styles.tableText}>|</Text>
                            <Text style={styles.tableText}>{value[1]}</Text>
                            <Text style={styles.tableText}>|</Text>
                            <Text style={styles.tableText}>{value[2]}</Text>
                          </View>
                        ))
                        }
                      </View>
                      <View>
                        <Text style={styles.finalText}>{finalString}</Text>
                      </View>
                      <View>
                        <Text style={styles.tableText}>Лінійний графік</Text>
                        {
                          data ? <LineChart
                            data={data}
                            width={300}
                            height={300}
                            chartConfig={{
                              backgroundColor: '#e26a00',
                              backgroundGradientFrom: '#fb8c00',
                              backgroundGradientTo: '#ffa726',
                              decimalPlaces: 2,
                              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                              style: {
                                borderRadius: 16,
                              },
                              propsForDots: {
                                r: '0',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                              }
                            }}
                            style={{
                              marginVertical: 8,
                              borderRadius: 16,
                            }}
                          /> : <Text style={styles.tableText}>Графік не побудовано</Text>
                        }
                      </View>
                  </ScrollView>
              </View>
          </View>
      </View>
  )
};

const styles = StyleSheet.create({
  mainContainer:{
    gap: 20, 
    marginTop: 25, 
    justifyContent: 'center', 
    flexDirection: 'column', 
    alignItems: 'center'
  },
  container:{
    height: '60%', 
    width: '85%'
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#55615f'
  },
  tableView:{
    display: 'flex',
    flexDirection: 'row',
    gap: 35
  },  
  tableText:{
    fontSize: 17,
    color: 'white'
  },
  finalText: {
    fontSize: 18,
    color: 'white'
  },
});

export default MonteCarlo;