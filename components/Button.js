import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = Math.floor(screen.width / 4);

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
      buttonStyles.push(styles.buttonDouble);
  }

  if (theme === 'top') {
    buttonStyles.push(styles.buttonTop);
    textStyles.push(styles.textTop)
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent)
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
        <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: buttonWidth - 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: buttonWidth,
    margin: 5
  },
  buttonDouble: {
      width: screen.width / 2 - 10,
      flex: 0,
      alignItems: "flex-start",
      paddingLeft: 30
  },
  textTop: {
    color: "steelblue"
  },
  buttonTop: {
      backgroundColor: "snow"
  },
  textAccent: {
    color: "snow"
  },
  buttonAccent: {
    backgroundColor: "steelblue",
  }
});