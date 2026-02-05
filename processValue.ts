// function process(value:string | number): string | number{
//     if(typeof value === 'string'){
//         return value.toUpperCase()
//     }
//     else{
//         return value*2
//     }
// }
// console.log(process(5))
// console.log(process('Hello You!'))


// interface User{
//     name: string,
//     age: number,
// }
// const user = [
//     {name: 'louis', age: 23},
//     {name: 'mal', age: 21},
//     {name: 'john doe', age:17}
// ]
// function greater(user:User[]): string[]{
//     return user.filter(u => u.age > 20).map(u => u.name)
// }
// console.log(greater(user))


// interface Product {
//     readonly id: number,
//     name:string,
//     description? : string
//     price: number
// }

// const p1:Product={
//     id: 2,
//     name: 'lotion',
//     description: 'made in coconut',
//     price : 51
// }

// const p2:Product={
//     id: 7,
//     name: 'makeup',
//     price : 23
// }
// function info(product : Product): void{
//     console.log(`You are buying product with id :${product.id}, name: ${product.name}, Des: ${product.description||"No description"}, price: $${product.price}`)
// }
// info(p1)
// info(p2)


export enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer"
}

function getPermission(role: UserRole): string {
  switch (role) {
    case UserRole.Admin:
      return "Full access";
    case UserRole.Editor:
      return "Can edit the news";
    case UserRole.Viewer:
      return "Read only";
    default:
      return "No permission";
  }
}

console.log(getPermission(UserRole.Admin)); 