interface Question {
  ask: string,
  answer: string[]
}

export interface TestBuild {
  id: number
  name: string
  questions: Question[]
  testList: number[]
}