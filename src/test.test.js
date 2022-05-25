function checkFive(num){
    let result = '';
    if (num < 5){
        result = num + " is less than 5.";
    } else if (num === 5){
        result = num + " is equal to 5.";
    } else {
        result = num + " is greater than 5.";
    }

    return result;
}

test('check rusult for 5 given',() => {
    expect(checkFive(5)).toBe('5 is equal to 5.')
});
test('check rusult for 3 given',() => {
    expect(checkFive(3)).toBe('3 is less than 5.')
});
test('check rusult for 11 given',() => {
    expect(checkFive(11)).toBe('11 is greater than 5.')
});