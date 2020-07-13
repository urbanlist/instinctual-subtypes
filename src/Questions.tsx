export type Question = {
  description: string,
  subQuestions: SubQuestion[]
}

export type SubQuestion = {
  description: string
}

const Questions: Question[] = [{
  description: "내게 중요한 것",
  subQuestions: [{
    description: "나 자신의 기대에 부응하는 것"
  }, {
    description: "세상에 영향력을 끼치는 것"
  }, {
    description: "특별한 상대와 친밀함을 나누는 것"
  }]}
]


export default Questions;