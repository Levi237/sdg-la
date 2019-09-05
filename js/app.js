//********************************************************************************//
//*****************************   ACCORDIAN TOGGLE   *****************************//
//********************************************************************************//
const onFitGuide    = document.getElementById('fit-guide')
const onCare        = document.getElementById('care')
const onMaterials   = document.getElementById('materials')
// const plustFitGuide = document.getElementsByClassName('plus-fit-guide')
// const plustCare     = document.getElementsByClassName('plus-care')
// const plusMaterials = document.getElementsByClassName('plus-materials')

onFitGuide.addEventListener('click', (e) => {
    toggle(e);
    onCare.classList.remove('active');
    onMaterials.classList.remove('active');
    // plustFitGuide.classList.add('test');
    // plustCare.classList.remove('test');
    // plusMaterials.classList.remove('test');
    // plustFitGuide.setAttribute("display", "none")
    // plustCare.setAttribute("display", "block")
    // plusMaterials.setAttribute("display", "block")
})

onCare.addEventListener('click', (e) => {
    toggle(e);
    onMaterials.classList.remove('active');
    onFitGuide.classList.remove('active');
    // plustFitGuide.classList.remove('test');
    // plustFitGuide.setAttribute("display", "block")
    // plustCare.setAttribute("display", "block")
    // plusMaterials.setAttribute("display", "block")
})
onMaterials.addEventListener('click', (e) => {
    toggle(e);
    onCare.classList.remove('active');
    onFitGuide.classList.remove('active');
    // plustFitGuide.classList.remove('test');
    // plustCare.classList.remove('test');
    // plusMaterials.classList.add('test');
    // plustFitGuide.setAttribute("display", "block")
    // plustCare.setAttribute("display", "block")
    // plusMaterials.setAttribute("display", "block")
})

toggle = e => {
    e.currentTarget.classList.toggle('active');
}