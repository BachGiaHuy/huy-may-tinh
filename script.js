// Lay cac gia tri

// dung ham eval()) de tinh gia tri bieu thuc


function GetOldValue () {
    return document.getElementById("value_prev").innerText
}
function PrintOldValue (number) {
    const valueOld = document.getElementById("value_prev");
    console.log(valueOld)
    valueOld.innerText = number
}
PrintOldValue('10');
function getResult () {
    return document.getElementById("value_current").innerText
}
function printValue (number) {
    const value = document.getElementById('value_current');
    value.innerText = number
}
// Viết 1 hàm nếu vượt quá thì có dấu chấm 
function formatNumber (number) {
    var n = Number(number);
    var value = n.toLocaleString("en")

    return value
}
function deleteFormat (number) {
    return Number(number.replace(/,/g,''))
}


// làm cho con số hoạt ododng

const number = document.getElementsByClassName('con_so');
for (var i = 0 ; i < number.length ; i ++) {
    number[i].addEventListener('click',function(){
        var value = deleteFormat(getResult())
        if (value != NaN) {
            value = value + this.id
            printValue(value);
        }
    })
}

var defau = document.getElementsByClassName('he_thong');
for (var i = 0 ; i < defau.length ; i ++) {
    defau[i].addEventListener('click',function() {
        if (this.id == "xoa_tat_ca") {
            printValue("");
            PrintOldValue("");
        } 
        else if (this.id == "xoa_tung_so"){
            let value = getResult();
            if (value) {
                value =value.substring(0,value.length -1);
                printValue(value)
            }
        }
        else {
            var value = getResult();
            var oldValue = GetOldValue();
            if (value !="") {
                value = deleteFormat(value);
                oldValue = oldValue + value;
                if (this.id == "=") {
                    var endValue = eval(oldValue);
                    printValue(endValue);
                    PrintOldValue("");
                } else {
                    oldValue = oldValue + this.id;
                    PrintOldValue(oldValue);
                    printValue("");
                }
            }
        }
    })
}
// In ket qua
// function printUI (number) {
//     if (number ="")
// }