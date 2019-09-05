// add event listender

const onFitGuide = document.getElementById('fit-guide')
// const onClick = document.querySelector('.details')
onFitGuide.addEventListener('click', (e) => {
    toggle(e);
})

const onCare = document.getElementById('care')
// const onClick = document.querySelector('.details')
onCare.addEventListener('click', (e) => {
    toggle(e);
})

const onMaterials = document.getElementById('materials')
// const onClick = document.querySelector('.details')
onMaterials.addEventListener('click', (e) => {
    toggle(e);
})

toggle = e => {
    console.log("clicked")
    e.currentTarget.classList.toggle('active');
}