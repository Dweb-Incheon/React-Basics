const list = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: false },
];

export default function List() {
  const nextList = [...list];
  console.log(`😡 ${list[0].seen}`);

  nextList[0].seen = true; // Problem: mutates list[0]

  console.log(`😯 ${list[0].seen}`);
  console.log(`👿 ${nextList[0].seen}`);
}
