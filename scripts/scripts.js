const inputFN = document.getElementById('input1')
const inputLN = document.getElementById('input2')
const inputC = document.getElementById('input3')
const inputS = document.getElementById('input4')
const btn = document.getElementById('btn')
// const wrapper = document.getElementsByClassName('wrapper')
const wrapper = document.getElementsByClassName('wrapper')[0]


btn.addEventListener('click', save)
inputS.addEventListener('keydown', e => {
    if(e.keyCode == 13) {
        save()
    }
})



function save() {
    let valueFn = inputFN.value
    let valueLn = inputLN.value
    let valueC = inputC.value
    let valueS = inputS.value
    if (valueFn.trim() != '' && valueLn.trim() != '' && valueC.trim() != '' && valueS.trim() != '') {
        let wrapperDiv = document.createElement('div')
        wrapperDiv.classList.add('wrapper-div')

        let divFn = document.createElement('div')
        divFn.classList.add('p-div')
        divFn.style.flexDirection = 'column'
        let divC = document.createElement('div')
        divC.classList.add('p-div')
        let divS = document.createElement('div')
        divS.classList.add('p-div')
        divS.setAttribute('id', 'number')
        let divBoard = document.createElement('div')
        divBoard.classList.add('board-div')

        let spanDiv1 = document.createElement('div')
        spanDiv1.classList.add('span-board')
        spanDiv1.innerHTML = '<i class="fa-solid fa-trash"></i>'
        spanDiv1.addEventListener('click', remove)
        let spanDiv2 = document.createElement('div')
        spanDiv2.classList.add('span-board')
        spanDiv2.textContent = '+5'
        spanDiv2.addEventListener('click', () => {
            let value = Number(valueS)
            value += 5
            valueS = value
            pS.textContent = value
        })
        let spanDiv3 = document.createElement('div')
        spanDiv3.classList.add('span-board')
        spanDiv3.textContent = '-5'
        spanDiv3.addEventListener('click', () => {
            let value = Number(valueS)
            value -= 5
            valueS = value
            pS.textContent = value
        })


        let pF = document.createElement('p')
        let fullName = valueFn + ' ' + valueLn
        pF.textContent = fullName.toUpperCase()
        let pTime = document.createElement('p')
        pTime.textContent = time()
        pTime.style.fontSize = '14px'
        pTime.style.marginTop = '3px'
        pTime.style.color = 'gray'
        let pC = document.createElement('p')
        pC.textContent = valueC.toUpperCase()
        let pS = document.createElement('p')
        pS.textContent = valueS

        divBoard.appendChild(spanDiv1)
        divBoard.appendChild(spanDiv2)
        divBoard.appendChild(spanDiv3)

        divFn.appendChild(pF)
        divFn.appendChild(pTime)
        divC.appendChild(pC)
        divS.appendChild(pS)

        wrapperDiv.appendChild(divFn)
        wrapperDiv.appendChild(divC)
        wrapperDiv.appendChild(divS)
        wrapperDiv.appendChild(divBoard)

        wrapper.appendChild(wrapperDiv)

    }
    inputFN.value = ''
    inputLN.value = ''
    inputC.value = ''
    inputS.value = ''

}

function remove() {
    this.parentElement.parentElement.remove()
}

function time() {
    let aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    let tarih = new Date()
    let ayinGunu = tarih.getDate()
    let year = tarih.getFullYear()
    let month = tarih.getMonth()
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()

    if (saniye < 10) {
        saniye = '0' + saniye
    }
    if (saat < 10) {
        saat = String(0) + saat
    }
    dakika = (dakika < 10) ? String(0) + dakika : dakika


    return `${ayinGunu} ${aylar[month]} ${year} ${saat}:${dakika}`
}

function addNum() {
    let valueS = inputS.value
    let value = Number(valueS)
    value += 5
    pS.textContent = value
}
