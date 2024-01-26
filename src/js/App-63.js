const list = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: false },
];

export default function List() {
  const nextList = [...list];
  nextList.reverse();
  console.log(`😯 ${list[0].title}`);
  console.log(`👿 ${nextList[0].title}`);
}
