const fibonacciNumbers = (num) => {
    if (Number.isInteger(num)){
        const fib = [0,1];
        for (let i = 2; i < num; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[fib.length - 1] + fib[fib.length - 2];
    } else {
        return 'Passed argument is not a number';
    }
};
