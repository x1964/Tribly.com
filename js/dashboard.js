const data = JSON.parse(localStorage.getItem("userProfile"));

if(!data){
  window.location.href = "profile.html";
}

document.getElementById("profileName").innerText = data.name;
document.getElementById("profileBio").innerText = data.bio || "";

const interestsBox = document.getElementById("profileInterests");
data.interests.forEach(i=>{
  const span = document.createElement("span");
  span.innerText = i;
  interestsBox.appendChild(span);
});

// صورة افتراضية
const avatar = "https://via.placeholder.com/150";
document.getElementById("profileAvatar").src = avatar;
document.getElementById("navAvatar").src = avatar;
