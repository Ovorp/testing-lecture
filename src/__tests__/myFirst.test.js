import bankAccount from './../bankAccount';

function inAscOrder(arr) {
  let orgArr = [...arr];
  let answer = true;
  orgArr
    .sort((a, b) => a - b)
    .forEach((val, i) => {
      if (val !== arr[i]) {
        return (answer = false);
      }
    });
  return answer;
}

describe('isAscOder', () => {
  test('`isAscOder` should return a boolean', () => {
    expect(typeof inAscOrder([])).toBe('boolean');
  });

  test('`isAscOrder` check to see if all elements are ascending', () => {
    expect(inAscOrder([1, 2, 8])).toBe(true);
  });
});

describe('bankAccount', () => {
  test('balance should be a number', () => {
    expect(typeof bankAccount.balance).toBe('number');
  });
  test('balance defaults to 1000', () => {
    expect(bankAccount.balance).toBe(1000);
  });
  test('`depositMoney` should increase balance by X amount', () => {
    let amount = 300;
    let newBalance = 1300;
    bankAccount.depositMoney(amount);
    expect(bankAccount.balance).toBe(newBalance);
  });
});

// how does jest.spyOn know what get call to target.
