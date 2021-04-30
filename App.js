import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const [display, setDisplay] = useState('')
  const [result, setResult] = useState('')

  const char1 = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    [',','0','='],
  ]

  const char2 = ['C','/','*','-','+']


  const handleOp = (val) => {
    if(val === 'C'){
      setDisplay('')
      setResult('')
    }else if(val === '='){
      setDisplay(result)
      setResult('')      
    }else{
      setDisplay(display + val)
      let dis = display + val

      let result = ''

      try{
        result = new String(eval(dis.split(',').join('.'))).toString()
        setResult(result)
      }catch(e){}
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttons}>
        <View style={styles.col1}>
          {char1.map(lin => {
              return(
                <View key={lin} style={styles.line}>
                  {lin.map(val => {
                    return(
                      <TouchableOpacity key={val} style={styles.btn} onPress={() => handleOp(val)}>
                        <Text style={styles.btnText}>{val}</Text>
                      </TouchableOpacity>
                    )      
                  })}
                </View>
              )    
            })}
        </View>
        <View style={styles.col2}>
        {char2.map(val => {
            return(
              <TouchableOpacity key={val} style={styles.btn} onPress={() => handleOp(val)}>
                <Text style={styles.btnText}>{val}</Text>
              </TouchableOpacity>
            )      
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  display:{
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 70,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  result:{
    flex: 0.5,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10
  },
  buttons:{
    flex: 5,
    flexDirection: 'row'
  },
  col1:{
    flex: 3,
    backgroundColor: 'gray'
  },
  col2:{
    flex: 1,
    backgroundColor: '#0b0b0b'
  },
  btn:{
    flex: 1,
    justifyContent: 'center'
  },
  btnText:{
    textAlign: 'center',
    fontSize: 50,
    color: '#fff'
  },
  line:{
    flex: 1,
    flexDirection: 'row'
  }
})
