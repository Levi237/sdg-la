const data = [{
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Caterpie",
    damage: 40
  }]




//********************************************************************************//
//*****************************   ACCORDIAN TOGGLE   *****************************//
//********************************************************************************//
const onFitGuide    = document.getElementById('fit-guide')
const onCare        = document.getElementById('care')
const onMaterials   = document.getElementById('materials')

onFitGuide.addEventListener('click', (e) => {
    toggle(e);
    onCare.classList.remove('active');
    onMaterials.classList.remove('active');
})

onCare.addEventListener('click', (e) => {
    toggle(e);
    onMaterials.classList.remove('active');
    onFitGuide.classList.remove('active');
})
onMaterials.addEventListener('click', (e) => {
    toggle(e);
    onCare.classList.remove('active');
    onFitGuide.classList.remove('active');
})

toggle = e => {
    e.currentTarget.classList.toggle('active');
}