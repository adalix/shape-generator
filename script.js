
const form = document.querySelector('.form');
const monitor = document.querySelector('.monitor');
const toastBox = document.getElementById('toastBox');


let data = [];


function createAlert(){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Isleminiz Basariyla Gerceklesti`;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove()
    }, 5000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const boxWidth = +form.boxWidth.value;
    const boxHeight = +form.boxHeight.value;
    const color = form.color.value;

    const shapes = {
        width: boxWidth ,
        height: boxHeight, 
        color: color
    }
   
    const div = document.createElement('div');
    monitor.appendChild(div);
    div.style.width = boxWidth + 'px';
    div.style.height = boxHeight + 'px';
    div.style.backgroundColor = color;
    console.log(boxHeight, boxWidth, color)
    form.reset();
    

    data.push(shapes)

   createAlert()

    localStorage.setItem('shapes', JSON.stringify(data))
});

   