const users = [
    { username: "usuario1", password: "contraseña1" },
    { username: "usuario2", password: "contraseña2" },
    // Agrega más usuarios según sea necesario
];

function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica las credenciales
    const isValidCredentials = users.some(user => user.username === username && user.password === password);

    if (isValidCredentials) {
        // Redirecciona a la página del buscador si las credenciales son correctas
        window.location.href = "search.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
}
