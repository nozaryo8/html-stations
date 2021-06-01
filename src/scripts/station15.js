async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // const result = await test()
  const result = new Promise(resolve => {
    setTimeout(resolve, 3000, test());
  });

  result.then(value => {
    console.log({ value })
  })

  return await result

}

function test() {
  const test = [
    { id: 1, first_name: '優', family_name: '大木', full_name: "大木 優", affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', full_name: "山田 太郎", affilication: 'HogeHoge大学', is_student: true }
  ];
  return test.map(buildFullName)
}

function buildFullName(data) {
  // Station14の問題はこちらです。想定する答えをここを書いてください。
  // 氏名がわかるようにしつつ、半角スペースで繋いでください。
  // またtest配列のそれぞれのオブジェクトに対して、full_nameのプロパティが追加されるように実装すること
  const full_name = data.family_name + ' ' + data.first_name
  data["full_name"] = full_name;
  return data
}

