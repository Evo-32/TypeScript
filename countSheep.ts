export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.filter(c => c === true).length
}