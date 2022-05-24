const year = 2348;

function checkYear(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    console.log(`${year} to rok przestępny!`);
  } else {
    console.log(`${year} to nie jest rok przestepny.`);
  }
}

checkYear(year);
