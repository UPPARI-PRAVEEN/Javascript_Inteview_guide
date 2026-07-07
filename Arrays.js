const arr = [
  { id: 1, name: "Praveen", role: "Developer" },
  { id: 2, name: "Ravi", role: "Tester" },
  { id: 3, name: "Anjali", role: "Manager" },
];

res = {};

arr.forEach((item, index) => {
  res[item.id] = item;
});
console.log(res[1]);

const res = arr.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

const obj = {
  user: {
    name: "Praveen",
    address: {
      city: "Hyderabad",
      location: {
        area: "Madhapur",
        pincode: 500081,
      },
    },
  },
  company: {
    name: "TechCorp",
    details: {
      founded: 2010,
      address: {
        city: "Bangalore",
        country: "India",
      },
    },
  },
};

function fn(obj, target, path, res) {
  for (let [key, val] of Object.entries(obj)) {
    // console.log(key, val);
    if (key == target) {
      res.push(path + "." + key);
    }
    if (typeof val === "object") {
      let result = fn(
        val,
        target,
        path === "" ? path + key : path + "." + key,
        res,
      );
    }
  }
  return res;
}
console.log(fn(obj, "city", "", []));
