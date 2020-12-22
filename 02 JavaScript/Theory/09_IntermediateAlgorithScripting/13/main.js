/*Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

function sumPrimes(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        console.log(i);
        if (checkIfIsPrime(i)) {
            console.log('here')
            sum += i;
        }
    }

    return sum;
}

function checkIfIsPrime(num) {
    let divisors = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisors++;
            if (divisors === 3) {
                break;
            }
        }
    }
    if (divisors === 2) {
        return true;
    } else {
        return false;
    }

}

console.log(sumPrimes(10));