interface User {
    name: string;
    age: number;
    nickname?: string;
}

const user1: User = {
    name: 'Alice',
    age: 17
}

const user2: User = {
    name: 'John',
    age: 23,
    nickname: 'Jo'
}


function greetUser(user: User): string {
    // Use optional chaining + nullish coalescing for default
    const nameToUse = user.nickname ?? "Guest";
    return `Hello, ${nameToUse}`;
}

console.log(greetUser(user1)); // Hello, Guest
console.log(greetUser(user2)); // Hello, Jo
