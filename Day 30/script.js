console.log(document);

const name = document.querySelector(".name");
console.log(name);
name.innerText = "ABCD";

const box = document.querySelector("#box");
console.log(box);
box.innerText = "Abhishek Nayak";

const containers = document.querySelectorAll(".container");
console.log(containers);

let friends = ["Rahul", "Srikanth", "Mohit", "Dev"];
console.log(friends[0]);
console.log(friends[2]);
console.log(friends[3]);

containers[0].innerText = "box1";
containers[1].innerText = "box2";
containers[2].innerText = "box3";

let a = 20;
a = "Abhishek";
a = ["a", "b", "c"];
a = { name: "Abhishek" };
console.log(a);

// Homeworks
// 1. Create a container with multiple div having same classes and try selecting all using querySelectorAll and change the inner text of each div

// 2. Create 4 arrays based on real world things
