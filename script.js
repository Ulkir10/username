document.getElementById("changeUserBtn").addEventListener("click", async function () {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        document.getElementById("userName").textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById("userEmail").textContent = user.email;
        document.getElementById("userImage").src = user.picture.large;
    } catch (error) {
        console.error("Ошибка загрузки пользователя:", error);
    }
});