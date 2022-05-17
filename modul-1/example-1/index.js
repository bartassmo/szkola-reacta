const year = 2348;

function checkYear(year) {
    const leap = new Date(year, 1, 29).getDate() === 29;
    leap ? console.log(`${year} to rok przestępny!`) : console.log(`${year} to nie jest rok przestepny.`);
}

checkYear(year);