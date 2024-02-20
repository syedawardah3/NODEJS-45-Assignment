// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Array of people I'd like to invite to dinner
let invitees: string[] = ['Albert Einstein', 'Marie Curie', 'Leonardo da Vinci'];

// Printing invitation messages to each person
for (let person of invitees) {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
}
