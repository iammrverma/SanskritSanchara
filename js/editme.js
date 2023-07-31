const uname = document.getElementById("name");
const age = document.getElementById("age");
const gender = document.getElementById("gender");

const sancharaUser = JSON.parse(localStorage.getItem("sancharaUser")) || {
  name: "Mohan",
  xp:0,
  gems:100,
  streak:0,
  
};

uname.setAttribute("placeholder", sancharaUser.name);

const handleSaveInfo = () => {
  if (
    uname.value === ""
  ) {
    alert("Please Provide Your Name");
    return;
  }
  localStorage.setItem(
    "sancharaUser",
    JSON.stringify({
      name: uname.value,
      xp: sancharaUser.xp,
      gems: sancharaUser.gems,
      streak: sancharaUser.streak
    })
  );
  window.location.href = "./index.html";
};
