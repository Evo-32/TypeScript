export class Kata {
  static disemvowel(str: string): string {
      let vowels = 'aeiouAEIOU'
    return str.split('').filter(chr => !vowels.includes(chr)).join('');
  }
}
