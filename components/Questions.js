import React, { useContext, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { QuestionContext } from '../providers/QuestionContext';
import Header from './UI/Header';
import Input from './UI/Input';

const Questions = () => {
    const [questionInput, setQuestionInput] = useState("");
    const [answersList, setAnswersList] = useState([]);

    const questionContext = useContext(QuestionContext);

    const findQuestion = (str) => {
        const filteredArray = questionContext.filter((value) => {
            return value.question.toLowerCase().includes(str.toLowerCase());
        });
        setQuestionInput(str);
        setAnswersList(filteredArray);
    };

    return (
        <View style={styles.mainContainer}>
            <Header text={"Відповіді на запитання"}/>

            <Input value={questionInput} setter={findQuestion} text={'Введіть запитання'}/>

            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <ScrollView>
                        {
                            answersList.length !== 0 ? (
                                answersList.map((element, index) =>(
                                    <View style={styles.questionView} key={index}>
                                        <Text style={styles.tableText}>{"Запитання: \n\n" + element.question}</Text>
                                        <Text style={styles.tableText}>{"Відповідь: \n\n" + element.answer}</Text>
                                    </View>
                                ))
                            ):(
                                <Text style={styles.tableText}>Відповідей не було знайдено</Text>
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default Questions;

const styles = StyleSheet.create({
    mainContainer:{
      gap: 20, 
      marginTop: 25, 
      justifyContent: 'center', 
      flexDirection: 'column', 
      alignItems: 'center'
    },
    container:{
      height: '75%', 
      width: '90%'
    },
    innerContainer: {
      flex: 1,
      backgroundColor: '#55615f'
    },
    tableText:{
      fontSize: 18,
      fontWeight: '700',
      marginVertical: 10,
      color: 'white'
    },
    questionView:{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 20
    }
});