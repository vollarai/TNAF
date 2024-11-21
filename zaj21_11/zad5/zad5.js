function fib(num)
{
    let num1=0;
    let num2=0;
    let current=1;
    for(let i=1; i< num; i++)
    {
        num1=num2;
        num2=current;
        current=num1+num2;
    }

    return current;
}

console.log(fib(50))
