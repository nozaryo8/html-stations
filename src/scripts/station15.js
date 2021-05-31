async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // const result = await test()
  const result = new Promise(resolve => {
    setTimeout(resolve, 3000, test());
  });

  result.then(value => {
    console.log({ value }); // {value: 'foo'}
  })

  return await result

}

function test() {
  const test = [
    { id: 1, first_name: '優', family_name: '大木', full_name: "大木 優", affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', full_name: "山田 太郎", affilication: 'HogeHoge大学', is_student: true }
  ];
  return test
}


