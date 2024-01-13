import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonPressable from './UI/ButtonPressable';
import ScrollWithHeader from './UI/ScrollWithHeader';
import Input from './UI/Input';
import Header from './UI/Header';


const Kolgomorov = () => {
    const [sequenceInput, setSequenceInput] = useState('');
    const [result, setResult] = useState({modular: [], diff: 0, arr: [], distribution: []});

    function findMaxDifference(arr) {
      if (arr.length < 2) {
        return null; 
      }
    
      let minElement = arr[0];
      let maxElement = arr[0];
    
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minElement) {
          minElement = arr[i];
        }
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    
      const maxDifference = maxElement - minElement;
    
      return maxDifference;
    }

    const solveKolgomorov = () =>{
        try{
            const numbers = sequenceInput.split(' ').map((elem) => Number(elem)).sort((a,b) => a - b);

            let distributionArr = [];

            const modular = numbers.map((value, index) => {
                value = Math.abs(value - Number((index + 1) * 2));
                distributionArr.push((index + 1) * 2);
                return value;
            });
            
            setResult({modular: modular, arr: numbers, distribution: distributionArr, diff: findMaxDifference(modular)});
      
          }catch(e){
            console.log('error');
          }
    }

    return (
        <View style={styles.mainContainer}>
            <Header text={"Критерій Колгоморова-Смірнова"}/>

            <Input value={sequenceInput} setter={setSequenceInput} text={'Введіть послідовність випадкових чисел'}/>
            
            <ButtonPressable solver={solveKolgomorov}/>

            <View style={styles.container}>
              <View style={styles.innerContainer}>
                  <ScrollView>
                      <View style={styles.distributionView}>
                        <ScrollWithHeader text={"Рівномірний закон розподілу після сортування:"} array={result.arr}/>
                        <ScrollWithHeader text={""} array={result.distribution}/>
                      </View>
                      <View>
                      <ScrollWithHeader text={"Віднімаємо числа по модулю і знаходимо найбільшу різницю:"} array={result.modular}/>
                      </View>
                      <View>
                        <Text style={styles.tableText}>Отже, найбільша різниця {result.diff}</Text>
                        <Text style={styles.tableText}>Критерій Колгоморова-Смірнова: k = {result.diff}√{result.arr.length} / {(result.arr.length * 2)} = {((result.diff * Math.sqrt(result.arr.length)) / (result.arr.length * 2)).toFixed(3)}</Text>
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
    flexDirection: 'column', 
    alignItems: 'center'
  },
  container:{
    height: '70%', 
    width: '85%'
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#55615f'
  },
  distributionView:{
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 10
  },  
  tableText:{
    fontSize: 17,
    marginVertical: 10,
    color: 'white'
  },
  finalText: {
    fontSize: 18,
    color: 'white'
  },
});

export default Kolgomorov;
