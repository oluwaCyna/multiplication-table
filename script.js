for (let i = 1; i <= 12; i++) {
    
    let newp;
    switch (i) {
        case 1:
            newp = "p1"
            break;
            case 2:
            newp = "p2"
            break;
            case 3:
            newp = "p3"
            break;
            case 4:
            newp = "p4"
            break;
            case 5:
            newp = "p5"
            break;
            case 6:
            newp = "p6"
            break;
            case 7:
            newp = "p7"
            break;
            case 8:
            newp = "p8"
            break;
            case 9:
            newp = "p9"
            break;
            case 10:
            newp = "p10"
            break;
            case 11:
            newp = "p11"
            break;
            case 12:
            newp = "p12"
            break;
    
        default:
            break;}

    document.getElementById(newp).innerHTML += "Multiplication table " + i + "<hr><br>";  
    for (let j = 1; j <= 12; j++) {
        document.getElementById(newp).innerHTML += i + " x " + j + " = " + i*j + "<br>";
    }
}