const data = [{
    id: "fit-guide",
    title: "FIT GUIDE",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi proin sed. Malesuada bibendum arcu vitae elementum. Nulla posuere sollicitudin aliquam ultrices. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut venenatis tellus in metus vulputate eu scelerisque. Adipiscing commodo elit at imperdiet dui. Risus feugiat in ante metus. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Eget est lorem ipsum dolor. Tempor orci eu lobortis elementum nibh tellus. Odio tempor orci dapibus ultrices in iaculis. Id diam maecenas ultricies mi eget mauris. Mattis nunc sed blandit libero volutpat sed. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis."
  }, {
    id: "care",
    title: "CARE",
    paragraph: "Auctor elit sed vulputate mi sit amet mauris. Ultricies integer quis auctor elit sed. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tincidunt dui ut ornare lectus. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Sed risus pretium quam vulputate dignissim suspendisse in est. In egestas erat imperdiet sed euismod nisi porta. Eget duis at tellus at urna condimentum mattis pellentesque. Adipiscing elit ut aliquam purus. Nulla pharetra diam sit amet nisl suscipit. Magna eget est lorem ipsum dolor sit amet consectetur. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tortor aliquam nulla facilisi cras fermentum odio eu. Gravida cum sociis natoque penatibus et magnis dis parturient. Tortor consequat id porta nibh venenatis. Blandit massa enim nec dui nunc mattis. Penatibus et magnis dis parturient montes nascetur ridiculus."
  }, {
    id: "materials",
    title: "MATERIALS",
    details: [{
        name: "cashmere",
        percentage: 50
    }, {
        name: "wool",
        percentage: 46
    }, {
        name: "modal",
        percentage: 4
    }],
    paragraph: "Sit amet mattis vulputate enim nulla aliquet. Non pulvinar neque laoreet suspendisse interdum consectetur. Tellus in metus vulputate eu. Consectetur lorem donec massa sapien. Tellus id interdum velit laoreet id. In dictum non consectetur a. Lacus suspendisse faucibus interdum posuere lorem ipsum. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Senectus et netus et malesuada fames ac turpis egestas integer. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Volutpat consequat mauris nunc congue. Ac tortor vitae purus faucibus ornare suspendisse sed. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Suspendisse interdum consectetur libero id faucibus nisl. Sit amet venenatis urna cursus. Vestibulum lectus mauris ultrices eros in cursus turpis. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida."
  }]

const thisContainer = document.getElementById('container')
//********************************************************************************//
//*********************************  CREATE      *********************************//
//*********************************  DATA LIST   *********************************//
//********************************************************************************//

// next goal is to loop through details??????????

const launchData = () => {
    data.map(data => {
        if (!data.details) {
            thisContainer.insertAdjacentHTML('afterbegin', `<div id="${data.id}" class="title"><section>${data.title}</section><span class="plus">+</span><span class="minus">-</span><div class="details"><div class="detail-section"></div><p>${data.paragraph}</p></div></div>`);
        } else {
            thisContainer.insertAdjacentHTML('afterbegin', `<div id="${data.id}" class="title"><section>${data.title}</section><span id="" class="plus">+</span><span id="" class="minus">-</span><div class="details"><div class="detail-section"><section>${data.details[0].percentage}%<div>${data.details[0].name}</div></section><section>${data.details[1].percentage}%<div>${data.details[1].name}</div></section><section>${data.details[2].percentage}%<div>${data.details[2].name}</div></section></div><hr style="width: 40px; margin: 0 auto 3px auto"><p>${data.paragraph}</p></div></div>
            `);
        }
    });
}
launchData();

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





