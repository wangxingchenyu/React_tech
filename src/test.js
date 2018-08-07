let arr = [
    {id: 1, content: "添加crm"},
    {id: 2, content: "添加crm"},
    {id: 3, content: "添加crm"},
    {id: 4, content: "添加crm"},
]

let item = arr.find(item => item.id = 3);
console.log(item);
item.content = "aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
console.log(arr);

