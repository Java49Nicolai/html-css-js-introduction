function checkTeudatZehut (teudatStrNumber) {
    let sum = 0;
    let arrayID = Array.from(teudatStrNumber);

    let check = arrayID.map(function(element, index) {
        if (index % 2 != 0) {
            let oddsIndex = element * 2;

            if(oddsIndex > 9) {
               oddsIndex = oddsIndex % 10 + Math.trunc(oddsIndex / 10);
            }
            sum += oddsIndex;
        
        } else {
            sum += parseInt(element);
        }

    })
    return sum % 10 == 0 ? console.log(true) : console.log(false);
}
checkTeudatZehut("338473178");
checkTeudatZehut("336273172");

