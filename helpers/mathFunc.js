function generateNprimeNumber(n) {
  //  looping dimulai dari angka 2
  let totalPrime = 0;
  let init = 2;
  let primeNum = 0;
  while (totalPrime < n) {
    if (realPrime(init)) {
      totalPrime++;
      if (totalPrime === n) {
        primeNum = init;
      }
    }
    init++;
  }
  return primeNum;
}

function realPrime(n) {
  let result = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

// console.log(realPrime(12));

module.exports = { generateNprimeNumber, realPrime };
