function addingEventListener() {
    const clickAlert = () => alert("I was clicked!");
    const input = document.getElementById("button");
    input.addEventListener('click', clickAlert);
}

addingEventListener();
