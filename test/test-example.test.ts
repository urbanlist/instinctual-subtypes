async function sleep(ms: number) {
  await _sleep(ms);
}

function _sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.time('start')
sleep(500).then(() => {
  console.timeEnd('start')
})

describe('Basic Types', () => {
  test('Enum#number', async () => {
    await sleep(4000);

    enum Color { Red, Green, Blue }
    let c: Color = Color.Green
    expect(c).toBe(1)
  })
})