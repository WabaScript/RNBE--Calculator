import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';

export default function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const prev = parseFloat(prevValue);
  const curr = parseFloat(currentValue);

  const handleTap = (type, value) => {
    if (type === "number") {
      if (currentValue === "0") {
        return setCurrentValue(`${value}`);
      }
      return setCurrentValue(`${currentValue}${value}`);
    }
    if (type === "operator") {
      setOperator(value);
      setPrevValue(currentValue);
      setCurrentValue("0");

      if (operator === "/") {
        setPrevValue(prev / curr);
      }
      if (operator === "*") {
        setPrevValue(prev * curr);
      }
      if (operator === "+") {
        setPrevValue(prev + curr);
      }
      if (operator === "-") {
        setPrevValue(prev - curr);
      }
    }
    if (type === "equal") {
      const reset = () => { 
        setOperator(null); 
        setPrevValue(null);
      }
      if (operator === "/") {
        setCurrentValue(prev / curr);
        reset();
      }
      if (operator === "*") {
        setCurrentValue(prev * curr);
        reset();
      }
      if (operator === "+") {
        setCurrentValue(prev + curr);
        reset();
      }
      if (operator === "-") {
        setCurrentValue(prev - curr);
        reset();
      }
    }
    //Clear Button
    if (type === "clear") {
      setCurrentValue(0);
      setPrevValue(0);
    }
    //Positive or Negative Button
    if (type === "pn") {
      setCurrentValue(`${parseFloat(currentValue) * -1}`);
    }
    //Percentage Button
    if (type === "percentage") {
      setCurrentValue(`${parseFloat(currentValue) * 0.01}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
      <Text style={styles.value}>
        {parseFloat(currentValue).toLocaleString()}
      </Text>
      <Row>
        <Button text="C" theme="top" onPress={() => handleTap("clear")} />
        <Button text="+/-" theme="top" onPress={() => handleTap("pn")} />
        <Button text="%" theme="top" onPress={() => handleTap("percentage")} />
        <Button text="/" theme="accent" onPress={() => handleTap("operator", "/")} />
      </Row>
      <Row>
        <Button text="7" onPress={() => handleTap("number", 7)} />
        <Button text="8" onPress={() => handleTap("number", 8)} />
        <Button text="9" onPress={() => handleTap("number", 9)} />
        <Button text="X" theme="accent" onPress={() => handleTap("operator", "*")} />
      </Row>
      <Row>
        <Button text="4" onPress={() => handleTap("number", 4)} />
        <Button text="5" onPress={() => handleTap("number", 5)} />
        <Button text="6" onPress={() => handleTap("number", 6)} />
        <Button text="-" theme="accent" onPress={() => handleTap("operator", "-")} />
      </Row>
      <Row>
        <Button text="1" onPress={() => handleTap("number", 1)} />
        <Button text="2" onPress={() => handleTap("number", 2)} />
        <Button text="3" onPress={() => handleTap("number", 3)} />
        <Button text="+" theme="accent" onPress={() => handleTap("operator", "+")} />
      </Row>
      <Row>
        <Button size="double" text="0" onPress={() => handleTap("number", 0)} />
        <Button text="." onPress={() => handleTap("number", ".")} />
        <Button text="=" theme="accent" onPress={() => handleTap("equal")} />
      </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 90,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});
