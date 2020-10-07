const $display = $("content-container");

class Calc {
    constructor(prevOpTxt, currOpTxt){
        this.prevOpTxt = prevOpTxt
        this.currOpTxt= currOpTxt
        this.clr()
    }

    clr(){
        this.currOp = ''
        this.prevOp = ''
        this.op = undefined
    }

    del(){
        this.currOp = this.currOp.toString().slice(0, -1)
    }

    addNum(int){
        if (int === '.' && this.currOp.includes('.')) return
        this.currOp = this.currOp.toString() + int.toString()
    }

    chooseOp(op){
        if (this.currOp === '') return
        if (this.prevOp !== ''){
            this.calculate()
        }
        this.op = op
        this.prevOp = this.currOp
        this.currOp = ''
    }

    calculate(){
        let result
        const prev = parseFloat(this.prevOp)
        const curr = parseFloat(this.currOp)
        if (isNaN(prev) || isNaN(curr))return
        switch (this.op){
            case '+':
                result = prev + curr
                break
            case '-':
                result = prev - curr
                break
            case '*':
                result = prev * curr
                break
            case '÷':
                result = prev / curr
                break
            default:
                return
        }
        this.currOp = result
        this.op = undefined
        this.prevOp = ''
    }

    getDispNum(number){
        const strNum = number.toString()
        const intDig = parseFloat(strNum.split('.')[0])
        const decDig = strNum.split('.')[1]
        let intDisp

        if (isNaN(intDig)) {
            intDisp = ''
        } else{
            intDisp = intDig.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }

        if (decDig != null){
            return `${intDisp}.${decDig}`
        } else{
            return intDisp
        }
    }

    dispUpdate(){
        this.currOpTxt.innerText = this.getDispNum(this.currOp)
        if (this.op != null){
            this.prevOpTxt.innerText = `${this.getDispNum(this.prevOp)} ${this.op}`
        } else {
            this.prevOpTxt.innerText = ''
        }
    }
}

const intBtns = document.querySelectorAll('[data-int]')
const opBtns = document.querySelectorAll('[data-op]')
const eqBtn = document.querySelector('[data-eq]')
const delBtn = document.querySelector('[data-del]')
const clrBtn = document.querySelector('[data-clr]')
const currOpTxt = document.querySelector('[data-currop]')
const prevOpTxt = document.querySelector('[data-prevop]')

const calc = new Calc(prevOpTxt, currOpTxt)

intBtns.forEach(button => { 
    button.addEventListener('click', () => {
        calc.addNum(button.innerText)
        calc.dispUpdate()
    })
})

opBtns.forEach(button => { 
    button.addEventListener('click', () => {
        calc.chooseOp(button.innerText)
        calc.dispUpdate()
    })
})

eqBtn.addEventListener('click', button => {
    calc.calculate()
    calc.dispUpdate()
})

clrBtn.addEventListener('click', button => {
    calc.clr()
    calc.dispUpdate()
})

delBtn.addEventListener('click', button => {
    calc.del()
    calc.dispUpdate()
})

export const renderCalc = () =>{
    $display.append(`
    <div class="row items calculator w-50">
        <div data-prevop class="col text-right"></div>
        <div class="w-100"></div>
        <div data-currop class="col text-right"></div>
        <div class="w-100"></div>
        <button data-clr class="col-6">AC</button>
        <button data-del class="col">DEL</button>
        <button data-op class="col">÷</button>
        <div class="w-100"></div>
        <button data-int class="col">1</button>
        <button data-int class="col">2</button>
        <button data-int class="col">3</button>
        <button data-op class="col">*</button>
        <div class="w-100"></div>
        <button data-int class="col">4</button>
        <button data-int class="col">5</button>
        <button data-int class="col">6</button>
        <button data-op class="col">+</button>
        <div class="w-100"></div>
        <button data-int class="col">7</button>
        <button data-int class="col">8</button>
        <button data-int class="col">9</button>
        <button data-op class="col">-</button>
        <div class="w-100"></div>
        <button data-int class="col">.</button>
        <button data-int class="col">0</button>
        <button data-eq class="col-6">=</button>
    </div>
    `)
}


