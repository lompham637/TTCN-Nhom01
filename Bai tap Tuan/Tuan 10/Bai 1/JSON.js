// Tạo một đối tượng JSON
var employee = {
    name: "John Doe",
    age: 30,
    position: "Developer",
    salary: 5000
  };
  
  // Chuyển đổi đối tượng JSON thành chuỗi JSON
  var jsonString = JSON.stringify(employee);
  console.log(jsonString);
  // Kết quả: {"name":"John Doe","age":30,"position":"Developer","salary":5000}
  
  // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
  var jsonStr = '{"name":"Jane Smith","age":28,"position":"Designer","salary":4500}';
  var parsedObj = JSON.parse(jsonStr);
  console.log(parsedObj);
  // Kết quả: { name: 'Jane Smith', age: 28, position: 'Designer', salary: 4500 }
  
  // Thêm thuộc tính mới vào đối tượng JavaScript
  parsedObj.location = "New York";
  console.log(parsedObj);
  // Kết quả: { name: 'Jane Smith', age: 28, position: 'Designer', salary: 4500, location: 'New York' }