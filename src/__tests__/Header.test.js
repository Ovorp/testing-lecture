import React from 'react';

import Header from './../components/Header';

import { fireEvent, render } from '@testing-library/react';

describe('Header component', () => {
  it('should start with dropdown closed', () => {
    const header = render(<Header />);
    const dropdown = header.queryByTestId('dropdown');
    expect(dropdown).toBeNull();
  });
  it('should show dropdown if the hamburger is click', () => {
    const header = render(<Header />);
    const btn = header.queryByTestId('hamburger-button');
    fireEvent.click(btn);
    const dropdown = header.queryByTestId('dropdown');
    expect(dropdown).not.toBeNull();
  });
});
