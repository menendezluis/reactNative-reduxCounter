import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {increment, decrement} from '../features/counter/counterSlice';

const ButtonRedux = ({title}) => {
  const dispatch = useAppDispatch();
  const runFunction = () => {
    if (title === 'Increment') {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: title === 'Increment' ? 'black' : '#29938f',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        onPress={runFunction}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonRedux;
