function uploadImageOne() {
  document.getElementById("uploadOne").click();
}
function uploadImageTwo() {
  document.getElementById("uploadTwo").click();
}


function previewFileOne() {
  const preview = document.querySelector('#imageOne');
  const file = document.querySelector('#uploadOne').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}

function previewFileTwo() {
  const preview = document.querySelector('#imageTwo');
  const file = document.querySelector('#uploadTwo').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}