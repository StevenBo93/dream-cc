export function useRandomNumbers() {
  function generate(from: number, to: number, count: number) {
    const possibleValues = to - from + 1
    const safeCount = Math.min(count, possibleValues)

    const generatedNumbers = new Set<number>()
    while (generatedNumbers.size < safeCount) {
      const randomNum = Math.floor(Math.random() * possibleValues) + from
      generatedNumbers.add(randomNum)
    }

    return Array.from(generatedNumbers)
  }

  return { generate }
}
