
<script>
    function validateForm() {
    var nameInput = document.getElementById("nameInput");
    var priceInput = document.getElementById("priceInput");
    var inventoryInput = document.getElementById("inventoryInput");

    var nameError = document.getElementById("nameError");
    var priceError = document.getElementById("priceError");
    var inventoryError = document.getElementById("inventoryError");

    if (nameInput.value === "") {
        nameError.innerText = "Campo requerido";
            } else {
        nameError.innerText = "";
            }

    if (priceInput.value === "") {
        priceError.innerText = "Campo requerido";
            } else {
        priceError.innerText = "";
            }

    if (inventoryInput.value === "") {
        inventoryError.innerText = "Campo requerido";
            } else {
        inventoryError.innerText = "";
            }

    if (nameInput.value !== "" && priceInput.value !== "" && inventoryInput.value !== "") {
        alert("¡Producto creado con éxito!");
            }
        }
</script>