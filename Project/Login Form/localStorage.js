// Keys for localStorage
const KEY_NAME = "keyName";
const KEY_EMAIL = "keyMail";
// Helper
function $(id) {
  return document.getElementById(id);
}

// Load saved data on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem(KEY_NAME) || "";
  const savedEmail = localStorage.getItem(KEY_EMAIL) || "";

  $("getFullname").value = savedName;
  $("getEmail").value = savedEmail;

  $("outputName").textContent = savedName;
  $("outputEmail").textContent = savedEmail;
});

// Save function
function store() {
  const name = $("getFullname").value.trim();
  const mail = $("getEmail").value.trim();

  localStorage.setItem(KEY_NAME, name);
  localStorage.setItem(KEY_EMAIL, mail);

  $("outputName").textContent = name;
  $("outputEmail").textContent = mail;

  console.log("Saved:", { name, mail });
}

// Clear function
function clearData() {
  localStorage.removeItem(KEY_NAME);
  localStorage.removeItem(KEY_EMAIL);

  $("getFullname").value = "";
  $("getEmail").value = "";
  $("outputName").textContent = "";
  $("outputEmail").textContent = "";

  console.log("Cleared localStorage.");
}

// Example: attach both functions to multiple buttons
["saveBtn1", "saveBtn2", "saveBtn3"].forEach((id) => {
  $(id).addEventListener("click", store);
});

["clearBtn1", "clearBtn2"].forEach((id) => {
  $(id).addEventListener("click", clearData);
});
