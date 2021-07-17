export function getZeroOrOne(): number {
  return Math.floor(Math.random() * 2)
}

export function getRandom(num: number) {
  const numArray = []

  for (let i = 0; i < num; i += 1) {
    numArray.push(i)
  }

  const result = makeRandom(numArray)

  return result
}

export function makeRandom(array: Array<number>): number {
  const pivot = Math.floor(array.length / 2)

  const left = array.slice(0, pivot)
  const right = array.slice(pivot, array.length)

  const selected = getZeroOrOne() ? left : right

  if (array.length < 2) return array[0]

  return makeRandom(selected)
}

console.log(getRandom(20))
