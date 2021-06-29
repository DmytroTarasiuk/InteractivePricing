const range = document.getElementById('range')
const toggles = document.querySelectorAll('.toggle')
const year = document.querySelector('#yearly')
const month = document.querySelector('#monthly')
const mainContainer = document.getElementById('main')
const btnEl = document.querySelector('.btn')

btnEl.addEventListener('click', ()=> {
    mainContainer.innerHTML = `
    <h2>Created for educational purpose only</h2>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
    Coded by <a href="#">Dmytro Tarasiuk</a>.
    
    <a href="index.html">Back</a>
    `
})

range.addEventListener('input', (e)=> {
    const value = +e.target.value
    const label = e.target.nextElementSibling
    label.innerHTML = `
    <span>$</span>${value}<span class="choice">/month</span>
    `
    const numberEl = document.querySelector('.number')
    if(value === 4) {
        numberEl.innerHTML = '40'
    } else if (value === 8) {
        numberEl.innerHTML = '60'
    }
    else if (value === 12) {
        numberEl.innerHTML = '80'
    }
    else if (value === 16) {
        numberEl.innerHTML = '100'
    }
    else if (value === 20) {
        numberEl.innerHTML = '120'
    }
    else if (value === 24) {
        numberEl.innerHTML = '140'
    }
    else if (value === 28) {
        numberEl.innerHTML = '160'
    }
    else if (value === 32) {
        numberEl.innerHTML = '180'
    }
    let percentage = +value * 100 / 32
    range.style.background = `linear-gradient(to right, rgb(27, 184, 171) 0%, rgb(27, 184, 171) ${percentage-8}%, ${percentage-4}%, lightgray 100%)`
})


toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(month.checked && year.checked) {
        if(month === theClickedOne) {
            year.checked = false
            range.addEventListener('input', (e)=> {
                const value = +e.target.value
                const label = e.target.nextElementSibling
                label.innerHTML = `
                <span>$</span>${value}<span class="choice">/month</span>
                `
                let percentage = +value * 100 / 32
                range.style.background = `linear-gradient(to right, rgb(27, 184, 171) 0%, rgb(27, 184, 171) ${percentage-8}%, ${percentage-4}%, lightgray 100%)`
            })
        }

        if(year === theClickedOne) {
            month.checked = false
            range.addEventListener('input', (e)=> {
                const value = +e.target.value
                const label = e.target.nextElementSibling
                label.innerHTML = `
                <span>$</span>${value*12*0.25}<span class="choice">/year</span>
                `
                let percentage = +value * 100 / 32
                range.style.background = `linear-gradient(to right, rgb(27, 184, 171) 0%, rgb(27, 184, 171) ${percentage-8}%, ${percentage-4}%, lightgray 100%)`
            })
        }
    }
}