function sum(tab) {
    let s = 0; 
    tab.forEach(element => {
        s += element;
    });
    return s; 
}

console.log(sum([3, 6, 1])); 
