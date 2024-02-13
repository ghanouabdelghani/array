let Array = [];
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumbers.length);
console.log(arrayNumbers[0]);
console.log((arrayNumbers.length - 1) / 2);
console.log(arrayNumbers.length - 1);

let mixedDataTypes = ["hi", "how are you", 123, null, true, undefined];
console.log(mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);

let middle = (itCompanies.length - 1) / 2;
console.log(middle);
console.log(itCompanies[3]);

let last = itCompanies.length - 1;
console.log(last);
console.log(itCompanies[6]);

for (let index = 0; index < itCompanies.length; index++) {
  console.log(itCompanies[index].toLocaleUpperCase());
}
console.log(` ${itCompanies}Oracle and Amazon are big IT companies.`);

const check = (companyName) => {
  if (
    itCompanies.includes(
      companyName.charAt(0).toUpperCase() + companyName.toLowerCase().slice(1)
    )
  ) {
    console.log(companyName);
  } else {
    console.log("company is not found");
  }
};
check("facebook");

let OCompanies = [];

for (let index = 0; index < itCompanies.length; index++) {
  const company = itCompanies[index];

  const count = company.split("o").length - 1;

  if (count > 1) {
    OCompanies.push(company);
  }
}
console.log(OCompanies);

//console.log(itCompanies.sort());

//console.log(itCompanies.reverse());
console.log("ranni hna ");

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(4, 7));

console.log((itCompanies.length - 1) / 2);

console.log(itCompanies[3]);
