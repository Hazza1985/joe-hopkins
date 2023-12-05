function calc(mpmInput, mpgInput, calcName) {

    // Shared variables
    let mpm = mpmInput
    let mpy = mpm * 12
    let pounds = Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    // ICE variables
    let mpg = mpgInput
    let mpl = mpg * .22
    let costPerLitre = 1.69
    let costPerIceMile = costPerLitre / mpl
    let costPerIceMonth = costPerIceMile * mpm
    let costPerIceYear = costPerIceMile * mpy

    // EV variables
    let mpkwh = 3
    let costPerKwh  = .075
    let costPerEvMile = costPerKwh / mpkwh
    let costPerEvMonth = costPerEvMile * mpm
    let costPerEvYear = costPerEvMile * mpy


    // Difference variables
    let diffForMile = costPerIceMile - costPerEvMile
    let diffForMonth = costPerIceMonth - costPerEvMonth
    let diffForYear = costPerIceYear - costPerEvYear


    switch(calcName) {
        case "diffForMile": return "difference per mile: " + pounds.format(diffForMile)
        case "diffForMonth": return "difference per month: " + pounds.format(diffForMonth)
        case "diffForYear": return "difference per year: " + pounds.format(diffForYear)
        default: return "error"
    }
    
}
// console.log("difference per mile: " + pounds.format(diffForMile))
// console.log("difference per month: " + pounds.format(diffForMonth))
// console.log("difference per year: " + pounds.format(diffForYear))



console.log(calc(100,100,"diffForYear"))