function displaySelectAnimal(){
    var dropdown = document.getElementById("animalselect");
    var menu = dropdown.options[dropdown.selectedIndex].value;

    if (menu === "dogs"){
        document.getElementById("dogs").style.display = "block";
        document.getElementById("cats").style.display = "none";
        document.getElementById("both").style.display = "none";
    } else if (menu === "cats") {
        document.getElementById("dogs").style.display = "none";
        document.getElementById("cats").style.display = "block";
        document.getElementById("both").style.display = "none";
    } else if (menu === "both") {
        document.getElementById("dogs").style.display = "none";
        document.getElementById("cats").style.display = "none";
        document.getElementById("both").style.display = "block";
    } else {
        document.getElementById("dogs").style.display = "none";
        document.getElementById("cats").style.display = "none";
        document.getElementById("both").style.display = "none";
    }
}
