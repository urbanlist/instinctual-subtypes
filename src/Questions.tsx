export type Question = {
  description: string,
  subQuestions: SubQuestion[]
}

export type SubQuestion = {
  description: string,
  type: number, // 1: 자본, 2: 성본, 3: 사본
}

const Questions: Question[] = [{
  description: "내게 중요한 것",
  subQuestions: [{
      description: "나 자신의 기대에 부응하는 것",
      type: 1
    }, {
      description: "세상에 영향력을 끼치는 것",
      type: 3
    }, {
      description: "특별한 상대와 친밀함을 나누는 것",
      type: 2
    }]
  }, {
    description: "일상생활에서 추구하는 것",
    subQuestions: [{
      description: "짜릿한 일을 할 수 있는 기회",
      type: 2
    }, {
      description: "편안한 가정을 만들 방법",
      type: 1
    }, {
      description: "내 도움을 필요로 하는 과업",
      type: 3
    }]
  }, {
    description: "나를 은유적으로 표현한다면",
    subQuestions: [{
      description: "열정으로 불타오르는 용광로",
      type: 2
    }, {
      description: "작지만 강한 힘을 가진 씨앗",
      type: 1
    }, {
      description: "지능적인 자기조직 시스템",
      type: 3
    }]
  }, {
    description: "여행할 때 취하는 것",
    subQuestions: [{
      description: "집처럼 편안한 느낌",
      type: 1,
    }, {
      description: "큰 감명을 주는 무언가",
      type: 3,
    }, {
      description: "흥미로운 여행이 될만한 것",
      type: 2
    }]
  }, {
    description: "평화에 관해서 난 주로",
    subQuestions: [{
      description: "평화를 추구하는 사람",
      type: 1
    }, {
      description: "평화를 깨뜨리는 사람",
      type: 2
    }, {
      description: "평화를 만들어내는 중재자",
      type: 3
    }]
  }, {
    description: "파티에서 찾는 것",
    subQuestions: [{
      description: "흥미롭게 보이는 낯선 사람",
      type: 2
    }, {
      description: "교제할 수 있는 기회",
      type: 3,
    }, {
      description: "아는 사람들",
      type: 1
    }]
  }, {
    description: "특별히 만족하는 활동",
    subQuestions: [{
      description: "사람들을 연결해주는 것",
      type: 3,
    }, {
      description: "개인적인 책무를 완수하는 것",
      type: 1
    }, {
      description: "파트너로 하여금 특별한 느낌을 갖게 하는 것",
      type: 2,
    }]
  }, {
    description: "짜증나는 사람",
    subQuestions: [{
      description: "따분한 사람",
      type: 2,
    }, {
      description: "난처하게 하는 사람",
      type: 3
    }, {
      description: "믿음이 안 가는 사람",
      type: 1
    }]
  }, {
    description: "우주의 한 생명체로서 머무르고 싶은 곳",
    subQuestions: [{
      description: "지구",
      type: 1
    }, {
      description: "태양계",
      type: 3
    }, {
      description: "유성",
      type: 2
    }]
  }, {
    description: "나와 일치하는 표현",
    subQuestions: [{
      description: "당신의 열정을 따르라",
      type: 2
    }, {
      description: "나도 좋고 너도 좋고",
      type: 3
    }, {
      description: "집만한 곳은 없다",
      type: 1
    }]
  }, {
    description: "나의 내면아이가 드러내는 성향",
    subQuestions: [{
      description: "행동에 옮기고 한계를 넘어서는 것",
      type: 2
    }, {
      description: "지지해주는 사람들을 만족시키기",
      type: 3
    }, {
      description: "스스로에게 관대한 것",
      type: 1
    }]
  }, {
    description: "다른 사람들보다 더",
    subQuestions: [{
      description: "나만의 방식을 고수하며 살아간다.",
      type: 1,
    }, {
      description: "고난이 따르더라도 지고의 체험을 추구한다.",
      type: 2,
    }, {
      description: "현재의 이슈와 유행에 동조한다.",
      type: 3
    }]
  }, {
    description: "스트레스를 받으면 절실한 것",
    subQuestions: [{
      description: "혼자만의 시간",
      type: 1,
    }, {
      description: "사랑할 시간",
      type: 2
    }, {
      description: "친구와의 시간",
      type: 3
    }]
  }, {
    description: "정신적 지향점",
    subQuestions: [{
      description: "안분지족",
      type: 1,
    }, {
      description: "모두와의 우주적 교감",
      type: 3,
    }, {
      description: "합일의 무아경",
      type: 2
    }]
  }, {
    description: "내가 만일 한 권의 책이라면",
    subQuestions: [{
      description: "로맨스 소설",
      type: 2
    }, {
      description: "실용적 입문서",
      type: 1,
    }, {
      description: "품위있는 삶에 대한 글",
      type: 3
    }]
  }, {
    description: "관계에서 중시하는 대상",
    subQuestions: [{
      description: "공동체",
      type: 3
    }, {
      description: "영혼의 단짝",
      type: 2
    }, {
      description: "나와 내 가족",
      type: 1
    }]
  }, {
    description: "좋아하는 직장 환경",
    subQuestions: [{
      description: "팀워크를 촉진하는 직장",
      type: 3
    }, {
      description: "내가 뭔가를 이뤄낼 수 있는 곳",
      type: 1
    }, {
      description: "창조성을 발휘할 수 있는 곳",
      type: 2
    }]
  }, {
    description: "내가 생각하는 인생의 동반자",
    subQuestions: [{
      description: "같은 목표를 가진 이",
      type: 3
    }, {
      description: "가장 친한 친구",
      type: 1
    }, {
      description: "내 존재의 원천",
      type: 2
    }]
  }, {
    description: "상대가 비난해오면 난",
    subQuestions: [{
      description: "냉담하게 군다.",
      type: 3
    }, {
      description: "바로 쏘아붙인다.",
      type: 2
    }, {
      description: "조용히 움츠러든다.",
      type: 1
    }]
  }, {
    description: "일하면서 우수한 결과를 낼 때",
    subQuestions: [{
      description: "나만의 일을 할 때",
      type: 1
    }, {
      description: "서로 협력하는 팀에서 일할 때",
      type: 3
    }, {
      description: "활기를 주는 동료 한 명과 일할 때",
      type: 2
    }]
  }, {
    description: "절대 포기 못하는 것",
    subQuestions: [{
      description: "자율성",
      type: 1,
    }, {
      description: "중요한 사람과의 관계",
      type: 2
    }, {
      description: "사람들과의 교제",
      type: 3
    }]
  }, {
    description: "옷을 입을 때 신경쓰는 점",
    subQuestions: [{
      description: "상황에 맞는가",
      type: 3,
    }, {
      description: "입기 편한가",
      type: 1,
    }, {
      description: "독특하고 주목을 끄는가",
      type: 2
    }]
  }, {
    description: "친구들이 인정하는 내 장점",
    subQuestions: [{
      description: "예술가적 재능",
      type: 2
    }, {
      description: "신뢰성",
      type: 1
    }, {
      description: "세련된 취향",
      type: 3
    }]
  }, {
    description: "사람들로 가득찬 방에 들어설 때 먼저 주목하는 것",
    subQuestions: [{
      description: "발을 넓히는 기회",
      type: 3
    }, {
      description: "방안 분위기의 안락함",
      type: 1
    }, {
      description: "친밀해질 수 있는 가능성",
      type: 2
    }]
  }, {
    description: "가끔 난",
    subQuestions: [{
      description: "너무 순응적이다.",
      type: 3
    }, {
      description: "너무 터무니없다.",
      type: 2
    }, {
      description: "너무 모험심이 없다.",
      type: 1
    }]
  }, {
    description: "동일시하는 것",
    subQuestions: [{
      description: "내가 느끼는 열정",
      type: 2
    }, {
      description: "내가 얻는 인정",
      type: 3
    }, {
      description: "내가 처신하는 방법",
      type: 1
    }]
  }, {
    description: "친구를 사귈 때 난",
    subQuestions: [{
      description: "비밀을 공유한다.",
      type: 2
    }, {
      description: "함께 할 만한 활동을 찾는다.",
      type: 3
    }, {
      description: "친구를 지키고 챙긴다.",
      type: 1
    }]
  }, {
    description: "좋아하는 일을 통해 드러나는 것",
    subQuestions: [{
      description: "예술성과 독창성",
      type: 2
    }, {
      description: "질적 측면의 개인적 공헌",
      type: 1
    }, {
      description: "공동 목표에 대한 공헌",
      type: 3
    }]
  }, {
    description: "불편한 것",
    subQuestions: [{
      description: "많이 모이는 자리",
      type: 1
    }, {
      description: "책상에만 앉아있기",
      type: 2
    }, {
      description: "혼자 지내기",
      type: 3
    }]
  }, {
    description: "대화 방식",
    subQuestions: [{
      description: "자연스러움",
      type: 2,
    }, {
      description: "외교적",
      type: 3
    }, {
      description: "직선적",
      type: 1
    }]
  }, {
    description: "가정에 대한 생각",
    subQuestions: [{
      description: "나만을 위한 장소",
      type: 1
    }, {
      description: "충전하는 장소",
      type: 3
    }, {
      description: "마음을 나누는 장소",
      type: 2
    }]
  }, {
    description: "사람들이 보는 나",
    subQuestions: [{
      description: "지루하지 않고 상상력이 풍부하다.",
      type: 2,
    }, {
      description: "애매하지 않고 분별력이 있다.",
      type: 1
    }, {
      description: "냉담하지 않고 관심이 많다.",
      type: 3
    }]
  }, {
    description: "나를 나타내는 새",
    subQuestions: [{
      description: "부지런한 울새",
      type: 1
    }, {
      description: "우아한 백조",
      type: 3
    }, {
      description: "미친 앵무새",
      type: 2
    }]
  }, {
    description: "최선을 다하는 때",
    subQuestions: [{
      description: "새롭고 특이한 일",
      type: 2
    }, {
      description: "삶의 책무들",
      type: 1
    }, {
      description: "매우 공식적인 상황",
      type: 3
    }]
  }, {
    description: "나의 개선점",
    subQuestions: [{
      description: "우월감에 빠지는 점",
      type: 3
    }, {
      description: "감정을 터뜨리는 점",
      type: 2,
    }, {
      description: "완고하고 융통성 없는 점",
      type: 1
    }]
  }
]


export default Questions;