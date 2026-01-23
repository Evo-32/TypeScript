export function solution(nums: number[]): number[] {
  if(nums === null) return []
  return nums.sort((a,b) => a-b)
}