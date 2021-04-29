import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const char = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    [',','0','='],
  ]

  const char2 = ['C','/','*','-','+']
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Display</Text>
      <Text style={styles.result}>Result</Text>
      <View style={styles.buttons}>
        <View style={styles.col1}>
          {char.map(lin => {
              return(
                <View style={styles.line}>
                  {lin.map(val => {
                    return(
                      <View style={styles.btn}>
                        <Text style={styles.btnText}>{val}</Text>
                      </View>
                    )      
                  })}
                </View>
              )    
            })}
          {
          /* <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>1</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>2</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>3</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>4</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>5</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>6</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>7</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>8</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>9</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>,</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>0</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>=</Text>
            </View>
          </View> */
          }
        </View>
        <View style={styles.col2}>
        {char2.map(val => {
            return(
              <View style={styles.btn}>
                <Text style={styles.btnText}>{val}</Text>
              </View>
            )      
          })}
          
          {
          /* <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>C</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>/</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>*</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>+</Text>
            </View>
          </View> */
          }
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
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  result:{
    flex: 0.4,
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
    backgroundColor: 'red'
  },
  btn:{
    flex: 1,
    justifyContent: 'center'
  },
  btnText:{
    textAlign: 'center',
    fontSize: 50
  },
  line:{
    flex: 1,
    flexDirection: 'row'
  }
})
