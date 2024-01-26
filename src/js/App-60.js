export default function List() {
  const myString = "hello!";
  // 🌟 Non-Mutating Method
  // 새로운 string을 return함. 기존의 값은 전혀 바꾸지 않음.
  let a1 = myString.replace("!", "");
  console.log(`⓪ ${myString}`);
  console.log(`① ${a1}`);

  const originalArray = [1, 2, 3];
  // 🔥 Mutating Method
  // originalArray를 그대로 변경하여 객체의 값이 [1, 2, 3, 4]가 되었음.
  originalArray.push(4);
  console.log(`② ${originalArray}`);

  // 🌟 Non-Mutating Method
  // 새로운 array를 return 함. 기존의 array는 전혀 변경하지 않음.
  let a2 = originalArray.concat(5);
  console.log(`③ ${originalArray}`);
  console.log(`④ ${a2}`);
}
