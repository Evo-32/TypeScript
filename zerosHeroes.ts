export function noBoringZeros(n: number): number {
    let num = String(n)
    while(num.endsWith('0')){
    num = num.slice(0,-1)
    }
    return Number(num)
}