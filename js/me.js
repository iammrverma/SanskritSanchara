const sancharaUser = JSON.parse(localStorage.getItem("sancharaUser"));
if (sancharaUser) {
  const uname = sancharaUser.name;

  const namespan = document.querySelector("#namespan");
  namespan.innerHTML = uname;
} else {
  window.location.href = "editme.html";
}
