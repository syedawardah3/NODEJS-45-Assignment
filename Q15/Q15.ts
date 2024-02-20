// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Original guest list
let guests: string[] = ['Albert Einstein', 'Marie Curie', 'Leonardo da Vinci'];

// Print statement about the guest who can't make it
console.log(`${guests[1]} can't make it to dinner.`);

// Replace the guest who can't make it with a new invitee
guests[1] = 'Nikola Tesla';

// Print a second set of invitation messages
for (let person of guests) {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
}
