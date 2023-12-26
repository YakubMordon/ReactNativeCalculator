import { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text } from 'react-native';
import ButtonPressable from './UI/ButtonPressable';
import Header from './UI/Header';
import Input from './UI/Input';

const Stochastic = () => {
  const [matrix, setMatrix] = useState({row1: '', row2: '', row3: '', row4: '', row5: ''});
  const [arr, setArr] = useState('');
  const [tacts, setTacts] = useState('');
  const [results, setResults] = useState([]);

  const rowPlaceholders = ['перший', 'другий', 'третій', 'четвертий', "п'ятий"];

  const handleInputChange = (inputName, text) => {
    setMatrix((prevValues) => ({
      ...prevValues,
      [inputName]: text,
    }));
  };

  const solveStochastic = () =>{
    try{
      let matrixOfNumbers = [];

      for (let i = 1; i <= 5; i++) {
        const array = matrix[`row${i}`].split(' ').map(Number);
        matrixOfNumbers.push(array);
      }

      let states = arr.split(' ').map(Number)
      
      let tact = Number(tacts)

      let row = 0;

      let stateNumber = 0;

      let array = []
  
      for(let i = 0; i < tact; i++){
        if(stateNumber == states.length){
          stateNumber = 0;
        }

        let equation = `${states[stateNumber]} <= `;

        let counter = 0;

        for(let j = 0; j < matrixOfNumbers[row].length; j++){
          counter += matrixOfNumbers[row][j];

          if(counter >= states[stateNumber]){
            equation += `${matrixOfNumbers[row][j]}`
            array = [...array,{stateOfSystem: `${j}`, equation: equation}];
            row = j;
            break;
          } 

          equation += `${matrixOfNumbers[row][j]} + `;
        }
        stateNumber++;
      }

      setResults(array);
    }catch(e){
      console.log('error');
    }

  }

  return (
    <View>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Header text={"Переходи станів за тактами"}/>

        {rowPlaceholders.map((placeholder, index) => (
          <TextInput
            key={`row${index + 1}`}
            value={matrix[`row${index + 1}`]}
            onChangeText={(text) => handleInputChange(`row${index + 1}`, text)}
            style={styles.input}
            placeholder={`Введіть ${placeholder} рядок з матриці`}
          />
        ))
        }
        <Input value={arr} setter={setArr} text={"Введіть стани"}/>

        <Input value={tacts} setter={setTacts} text={"Введіть кількість тактів"}/>
          
        <ButtonPressable solver={solveStochastic}/>

        <View style={styles.container}>
              <View style={styles.innerContainer}>
                  {results.map((value, index) => (
                      <View style={styles.innerContainer} key={index}>
                        <Text style={styles.tableText}>{(index + 1) + ' )'} {value.equation}</Text>
                        <Text style={styles.tableText}>Перекладемо у стан z{value.stateOfSystem}</Text>
                      </View>
                    ))
                  }
              </View>
          </View>
      </ScrollView>
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
    width: '80%'
  },
  innerContainer: {
    backgroundColor: '#55615f',
    display: 'flex',
    flexDirection: 'column'
  },
  input:{
    borderWidth: 0.5, 
    width: '75%', 
    textAlign: 'center'
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


export default Stochastic;