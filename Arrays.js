const arr = [
  { id: 1, name: "Praveen", role: "Developer" },
  { id: 2, name: "Ravi", role: "Tester" },
  { id: 3, name: "Anjali", role: "Manager" }
]

res = {}

arr.forEach((item,index)=>{
    res[item.id] = item
})
console.log(res[1])

const res = arr.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});