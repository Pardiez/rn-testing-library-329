import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Dummy from '../';

describe('Dummy component', () => {
  test('renders correctly', () => {
    const { queryByTestId } = render(<Dummy />);

    fireEvent.changeText(queryByTestId('text-input'), 'stage');
    fireEvent.press(queryByTestId('touchable-opacity'));
    expect(queryByTestId('text-input')).toBeTruthy();

  });
});
