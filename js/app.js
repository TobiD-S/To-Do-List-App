loadEvents();
// loads every event in the page
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);

}
// submits data function
function submit(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.value);
    input.value = '';
}