const input = document.getElementById("input");
function reverseString(str) {
  return str.split("").reverse().join("");
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myButton").click();
  }
});
function check() {
  const value = input.value;
  const revers = reverseString(value);
  if (value === revers) {
    alert("palindrome!");
  } else {
    alert("not palindrome");
  }
  input.value = "";
}
