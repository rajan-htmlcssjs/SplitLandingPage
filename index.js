const splits = document.querySelectorAll('.split')

splits.forEach((split)=>{
    split.addEventListener('mouseenter',() => split.classList.add("split-active"))
    split.addEventListener('mouseleave',() => split.classList.remove("split-active"))
})