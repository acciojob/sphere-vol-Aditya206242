function volume_sphere() {
    // Get radius value
    let radius = document.getElementById("radius").value;

    radius = parseFloat(radius);

    // If input invalid → set volume to 0
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = 0;
        return false;
    }

    // Calculate volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Set volume rounded to 4 decimal places
    document.getElementById("volume").value = volume.toFixed(4);

    return false; // prevent form from reloading
}

window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
