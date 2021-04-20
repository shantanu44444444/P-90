function addUser() {
    player1_name = document.getElementById("Player_1_ti").value;
    player2_name = document.getElementById("Player_2_ti").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name)

    window.location = "game_page.html";

  }