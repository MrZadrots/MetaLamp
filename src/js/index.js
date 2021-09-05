// Main js file
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header')
    let selectItem = document.querySelectorAll('.select__item')
    let ButtonClear = document.querySelectorAll('.ButtonClear')
    let ButtonApplay = document.querySelectorAll('.ButtonApplay')

    //Открытие dropDown
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    //Очистка полей
    ButtonClear.forEach(item =>{
        item.addEventListener('click', clearFunction)
    })
    //Очистка полей
    ButtonApplay.forEach(item =>{
        item.addEventListener('click', applyFunction)
    })
    //Обработка кнопок добаление и удаления 
    selectItem.forEach(item=> {
        let elem = item.getElementsByClassName('Count')[0]
        let ButtonPlus = item.getElementsByClassName('dropDownPlus')
        let ButtonMinus = item.getElementsByClassName('dropDownMinus')
        ButtonPlus[0].addEventListener('click', ()=> ButtonClick(elem,"plus"))
        ButtonMinus[0].addEventListener('click', ()=> ButtonClick(elem,"minus"))
    })

    //Функция октрытия dropDown
    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }
    //Функция добаления и удаления
    function ButtonClick(elem,method){
        let count = Number(elem.innerHTML)
        if(method == "plus"){
            count=count+1
        }
        else if (count!=0){
            count=count-1
        }
        elem.innerHTML = count
    }
    //Функция очистки полей
    function clearFunction(){
        let elem = document.querySelectorAll('.Count')
        elem.forEach(item =>{
            item.innerHTML=0;
        })
        let text = document.querySelector('.select__current')
        text.innerHTML = "Сколько гостей"
    }
    //Функция "Применить"
    function applyFunction(){
        let elem = document.querySelectorAll('.Count')
        let count = 0
        elem.forEach(item =>{
            count = count + Number(item.innerHTML)
        })
        let text = document.querySelector('.select__current')
        if(count == 0)
            return
        if(count == 1){
            text.innerHTML = count + " гость"
        }
        else if(count == 2 || count ==3 || count == 4){
            text.innerHTML = count + " гостя"
        }
        else{
            text.innerHTML = count + " гостей"
        }
        let isActive = document.querySelector('.is-active')
        isActive.classList.remove('is-active')
    }
};


select();