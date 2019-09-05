//********************************************************************************//
//*****************************   ACCORDIAN TOGGLE   *****************************//
//********************************************************************************//
const onFitGuide = document.getElementById('fit-guide')
onFitGuide.addEventListener('click', (e) => {
    toggle(e);
})

const onCare = document.getElementById('care')
onCare.addEventListener('click', (e) => {
    toggle(e);
})

const onMaterials = document.getElementById('materials')
onMaterials.addEventListener('click', (e) => {
    toggle(e);
})

toggle = e => {
    e.currentTarget.classList.toggle('active');
}