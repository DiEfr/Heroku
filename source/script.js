function AddNewComment() {
    text = addComment.value;
    el = document.createElement('textarea');
    el.className = "c";
    el.value = text;
    el.readOnly = true;
    comments.appendChild(el);
}