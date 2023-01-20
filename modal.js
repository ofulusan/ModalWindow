window.onload = function() {
// モーダルウィンドウ
var modal = document.getElementById("my-modal");

// モーダルウィンドウを表示
modal.style.display = "block";

// 閉じるボタン
var closeButton = document.getElementsByClassName("close-button")[0];

// 閉じるボタンをクリックした時の処理
closeButton.onclick = function() {
    modal.style.display = "none";
}

// モーダルウィンドウ以外の部分をクリックした時の処理
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}