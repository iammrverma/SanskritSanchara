

const me = JSON.parse(localStorage.getItem("me"));
if (me){
    const uname = me.uname;
    const gender = me.gender;

    const namespan = document.querySelector("#namespan");
    const genderspan = document.querySelector("#genderspan");
    namespan.innerHTML = uname;
    genderspan.innerHTML = (gender === "Male")? "पुरुषः":"स्त्री";    
}
else{
    window.location.href = "editme.html"
}



