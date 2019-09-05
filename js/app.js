//********************************************************************************//
//*****************************   ACCORDIAN TOGGLE   *****************************//
//********************************************************************************//
const onFitGuide = document.getElementById('fit-guide')
onFitGuide.addEventListener('click', (e) => {
    toggle(e);
    onCare.classList.remove('active');
    onMaterials.classList.remove('active');
})

const onCare = document.getElementById('care')
onCare.addEventListener('click', (e) => {
    toggle(e);
    onMaterials.classList.remove('active');
    onFitGuide.classList.remove('active');
})

const onMaterials = document.getElementById('materials')
onMaterials.addEventListener('click', (e) => {
    toggle(e);
    onCare.classList.remove('active');
    onFitGuide.classList.remove('active');
})

toggle = e => {
    e.currentTarget.classList.toggle('active');
}