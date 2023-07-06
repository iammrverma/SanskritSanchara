const uname = document.getElementById("name");
const age = document.getElementById("age");
const gender = document.getElementById("gender");

const me = JSON.parse(localStorage.getItem("me")) || {
  uname: "Mohan",
  age: 19,
  gender: "Select Gender",
};

uname.setAttribute("placeholder", me.uname);
age.setAttribute("placeholder", me.age);
gender.value = me.gender;

const handleSaveInfo = () => {
  if (
    uname.value === "" ||
    age.value === "" ||
    gender.value === "Select Gender"
  ) {
    alert("Please Fill all inputs");
    return;
  }
  localStorage.setItem(
    "me",
    JSON.stringify({
      uname: uname.value,
      age: age.value,
      gender: gender.value,
    })
  );
  window.location.href = "me.html";
};
