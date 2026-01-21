const avatarInput = document.getElementById("avatarInput");
const avatarPreview = document.getElementById("avatarPreview");
const interestInput = document.getElementById("interestInput");
const interestsBox = document.getElementById("interests");
const saveBtn = document.getElementById("saveBtn");

document.querySelector(".avatar-wrapper span").onclick = () =>{
  avatarInput.click();
};

avatarInput.onchange = () =>{
  const file = avatarInput.files[0];
  if(file){
    avatarPreview.src = URL.createObjectURL(file);
  }
};

interestInput.addEventListener("keydown", e=>{
  if(e.key === "Enter" && interestInput.value.trim()){
    e.preventDefault();
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = interestInput.value;
    interestsBox.appendChild(chip);
    interestInput.value = "";
  }
});

saveBtn.onclick = () =>{
  const data = {
    name: name.value,
    bio: bio.value,
    interests: [...document.querySelectorAll(".chip")].map(c=>c.textContent)
  };

  localStorage.setItem("userProfile", JSON.stringify(data));
  window.location.href = "dashboard.html";
};
