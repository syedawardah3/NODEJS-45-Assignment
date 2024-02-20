// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Array of friends' names
let names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];

// Printing personalized greeting message for each person
for (let name of names) {
    console.log(`Hello, ${name}! Have a wonderful day!`);
}
