const factorial = (number) => {
    let result = 1;
    if (number === 0) {
      return result;
    }
    for (let i = 1; i <= number; i++) {
      result = result * i;
    }
    return result;
  }

  module.exports = factorial;