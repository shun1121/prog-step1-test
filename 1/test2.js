const sumArray = array => {
    let sum = 0;
    for (let i = 0, len = array.length; i < len; i++) {
      sum += array[i];
    }
    return sum;
  };
  
  const array = [1,2,3]
  
  console.log(sumArray(array))