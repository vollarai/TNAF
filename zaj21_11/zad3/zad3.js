function range(start, end)
{
    const array =[];
    if(start<end)
    {
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    }
    else
    {
        for (let i = end; i <= start; i++) {
            array.push(i);
        }
    }

    array.forEach(element => {
        console.log(element);
    });
}

console.log(range(10,2));