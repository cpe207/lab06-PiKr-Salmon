// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/" + todoId);
    const id = res.data;
    const findname = await axios.get("https://jsonplaceholder.typicode.com/users/" + id.userId)
    const usersname = findname.data;
    
    return{
      owner : `${usersname.name}`,
      title : `${id.title}`,
      completed : id.completed
    }

  } catch(err){
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
