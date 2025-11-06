import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readUsers(): users.txt-ээс унших
function readUsers() {
  // 👉 Хэрэглэгчийн мэдээллийг унших код
}

// writeUsers(): users.txt-д бичих
function writeUsers(users) {
  // 👉 Хэрэглэгчийн мэдээллийг хадгалах код
}

// logTransaction(): transactions.txt-д бичих
function logTransaction(username, type, amount) {
  // 👉 Гүйлгээний лог бичих код
}

// =======================
// Register (шинэ хэрэглэгч)
// =======================
function register() {
  // 👉 Шинэ хэрэглэгчийн нэр асуух
  // 👉 PIN код асуух
  // 👉 Эхний үлдэгдэл асуух
  // 👉 users.txt-д хадгалах
}

// =======================
// Login + Menu
// =======================
function login() {
  console.log(
     "1. Үлдэгдэл шалгах 2. Мөнгө нэмэх 3. Мөнгө авах 4. Гарах"
    );

 
//   const name  = await askQuetion("Nasaa oruulna uu");

//     const nas = await askQuetion("Nasaa oruulna uu");


  // 👉 Нэвтрэх нэр асуух
  // 👉 PIN код асуух
  // 👉 Хэрэглэгчийн мэдээллийг шалгах
  // 👉 showMenu дуудаж ажиллуулах
}

function showMenu(user) {
  // 👉 Menu-г харуулах
  // 1. Үлдэгдэл шалгах
  // 2. Мөнгө нэмэх
  // 3. Мөнгө авах
  // 4. Гарах
  // 👉 Хэрэглэгчийн сонголтоор switch case ашиглах
}

// =======================
// Main
// =======================
console.log(
"1. Нэвтрэх 2. Бүртгүүлэх"
);


rl.question("Сонголтоо оруулна уу: ", (startChoice) => {
  if (startChoice === "1") {
    login();
  } else if (startChoice === "2") {
    register();
  } else {
    console.log("⚠️ Буруу сонголт!");
    rl.close();
  }
});
