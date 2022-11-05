function checkTeudatZehut (teudatStrNumber) {
    let sum = 0;
    let arrayID = Array.from(teudatStrNumber);

    let check = arrayID.map(function(element, index) {
        if (index % 2 != 0) {
            let oddsIndex = element * 2;

            if(oddsIndex > 9) {
                let num1 = oddsIndex % 10;
                let num2 = Math.trunc(oddsIndex / 10);
                oddsIndex = num1 + num2;
            }
            sum = sum += oddsIndex;
        
        } else {
            sum += parseInt(element);
        }

    })
    return sum % 10 == 0 ? console.log(true) : console.log(false);
}
checkTeudatZehut("123456782");
checkTeudatZehut("338473178");
