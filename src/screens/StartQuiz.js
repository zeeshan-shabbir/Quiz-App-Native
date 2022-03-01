import React, { useState, useEffect,useContext } from "react";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormButton from "../components/FormButton.js";
import { COLORS } from '../theme/theme.js'
import { GlobalContext } from '../context/context';
import {level1}  from '../assets/questions';
import * as ALL  from '../assets/questions';

// console.log(b,"ALl");

const StartQuiz = ({navigation}) => {
    const { state, dispatch } = useContext(GlobalContext);
    let number=state?.level
    console.log(number,"number when conacting");
    let level=`level${number}`
    // var b = ALL.level1
    console.log(level,"level when conacting");
    const myQuestions=level1;
    const [SelectedIndex, setSelectedIndex] = useState(null);
    
    const [questionIndex, setquestionIndex] = useState(0);
    const totalQues = myQuestions.length
    const correctCount = state.correctCount
    const currentQue = myQuestions[questionIndex]





    const checkAns = () => {
        if (SelectedIndex == currentQue.correctAnswer) {
            console.log("true");    
            dispatch({
                type: 'SET_SCORE',
                payload: correctCount + 1,
              })
            } 
    }
    
    const Next = () => {
        checkAns()
        setquestionIndex(questionIndex + 1)
        setSelectedIndex(null)
    }
    const handleOnSubmit = () => {
      
        checkAns()
        navigation.replace('ShowAnswer')
    }
    // const Previous = () => {
    //     setquestionIndex(questionIndex - 1)
    //     let a = userSelectArray.pop()
    //     console.log(a, "previous ");
    //     setSelectedIndex(a)
    // }
    return (
        <View style={styles.container}>
            <Text style={styles.questionIndex}>Question {questionIndex + 1}</Text>
            <Text style={styles.question}>
                {

                    currentQue.question
                }
            </Text>
            <View style={styles.answersContainer}>
                {
                    currentQue.options.map((item, i) => {
                        const backgroundColor = SelectedIndex === i ? "grey" : "transparent";
                        const color = SelectedIndex === i ? "white" : "black";
                        const bgColor = {
                            backgroundColor: backgroundColor,
                        };
                        const textColor = {
                            color: color,
                        };
                        return (
                            <TouchableOpacity activeOpacity={.8} onPress={() => setSelectedIndex(i)} style={[styles.item, bgColor]} key={i}>
                                <Text style={[styles.title, textColor]}>{item + i}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.btnContainer}>
                {/* {
                    questionIndex != 0 ? (
                        <FormButton
                            labelText="Previous"
                            handleOnPress={Previous}
                            style={{ width: '40%' }}
                            fontsize={{ fontSize: 25 }}
                        />
                    ) : null
                } */}

                {
                    questionIndex < (totalQues - 1) ? (
                        <FormButton
                            labelText="Next"
                            handleOnPress={Next}
                            style={{ width: '40%' }}
                            fontsize={{ fontSize: 25 }}
                        />

                    ) : (
                        <FormButton
                            labelText="submit"
                            handleOnPress={handleOnSubmit}
                            style={{ width: '40%' }}
                            fontsize={{ fontSize: 25 }}
                        />
                    )
                }


            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: COLORS.primary
    },
    title: {
        fontSize: 20,
    },
    question: {
        fontSize: 23,
        fontWeight: "bold",
        color: "black",
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 5,
        lineHeight: 40,
        marginTop: 20,
    },
    questionIndex: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    answersContainer: {
        marginVertical: 20,

    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        justifyContent: "space-around",


    },
    answer: {
        backgroundColor: "none",
        padding: 10,
        width: '80%',
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.primary
    },
    answerText: {
        fontSize: 17,
    },
});

export default StartQuiz;