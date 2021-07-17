import { getZeroOrOne, makeRandom, getRandom } from './index'

describe('getZeroOrOne 을 테스트 합니다', () => {
  it('getZeroOrOne 은 0 또는 1 을 반환해야합니다', () => {
    const num = getZeroOrOne()

    if (num === 0) {
      return expect(num).toBe(0)
    }

    if (num === 1) {
      return expect(num).toBe(1)
    }

    if (num !== 0 && num !== 1) {
      return expect(() => num).toThrow(Error)
    }
  })
})

describe('makeRandom 을 테스트합니다', () => {
  it('파라미터로 받은 배열의 길이가 2 보다 작을 경우 그 배열의 0 번째 index 값을 리턴합니다', () => {
    expect(makeRandom([1])).toBe(1)
    expect(makeRandom([2])).toBe(2)
    expect(makeRandom([3])).toBe(3)
    expect(makeRandom([4])).toBe(4)
    expect(makeRandom([5])).toBe(5)
  })

  it('파라미터로 받은 배열 중 무작위 값 하나를 리턴합니다', () => {
    expect(makeRandom([0, 1, 2, 3])).toBeGreaterThanOrEqual(0)
    expect(makeRandom([0, 1, 2, 3])).toBeLessThanOrEqual(3)

    expect(makeRandom([0, 1, 2, 3, 4, 5])).toBeGreaterThanOrEqual(0)
    expect(makeRandom([0, 1, 2, 3, 4, 5])).toBeLessThanOrEqual(5)

    expect(makeRandom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeGreaterThanOrEqual(0)
    expect(makeRandom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeLessThanOrEqual(10)

    expect(makeRandom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBeGreaterThanOrEqual(0)
    expect(makeRandom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBeLessThanOrEqual(20)
  })
})

describe('getRandom 을 테스트 합니다', () => {
  it('파라미터로 받은 값보다 작고 0 과 같거나 큰 수를 리턴합니다', () => {
    expect(getRandom(10)).toBeGreaterThanOrEqual(0)
    expect(getRandom(10)).toBeLessThan(10)

    expect(getRandom(5000)).toBeGreaterThanOrEqual(0)
    expect(getRandom(5000)).toBeLessThan(5000)

    expect(getRandom(2200)).toBeGreaterThanOrEqual(0)
    expect(getRandom(2200)).toBeLessThan(2200)

    expect(getRandom(369)).toBeGreaterThanOrEqual(0)
    expect(getRandom(369)).toBeLessThan(369)
  })
})
