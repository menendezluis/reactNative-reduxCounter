import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {
  incrementByAmount,
  decrementByAmount,
} from '../features/counter/counterSlice';

const ButtonByAmount = ({title, amount}) => {
  const dispatch = useAppDispatch();
  const runFunction = () => {
    if (title === 'Increment') {
      dispatch(incrementByAmount(amount));
    } else {
      dispatch(decrementByAmount(amount));
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: title === 'Increment' ? 'purple' : 'orangered',
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
          {title} {title === 'Increment' ? '+' : '-'} {amount}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonByAmount;
