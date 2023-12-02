// ? What is a test
// ! Test is something when the actual output does not match the expected output in an application

// * Example
const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFullName = getFullName("Bilal", "Khalid");
const expectedFullName = "Bilal Khalid";

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
} else {
  console.log(`${actualFullName} is  equal to ${expectedFullName}`);
}
