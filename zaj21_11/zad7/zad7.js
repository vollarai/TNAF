function isHappyNumber(num) {
    const seen = new Set(); 

    while (num !== 1 && !seen.has(num)) 
        {
        seen.add(num); 

        let wynik = 0; 
        while (num > 0) 
        {
            let reszta = num % 10; 
            wynik += reszta * reszta; 
            num = Math.floor(num / 10); 
        }
        num = wynik; 
    }

    return num === 1; 
}

console.log(isHappyNumber(19))
