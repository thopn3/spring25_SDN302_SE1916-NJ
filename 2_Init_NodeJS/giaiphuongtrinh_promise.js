const ptbn_pm = (a,b) => {
    return new Promise((resolve, reject) => {
        if(a==0)
            if(b==0)
                reject("PT có vô số nghiệm")
            else
                reject("PT vô nghiệm")
        else
            resolve((-b/a).toFixed(2))
    })
}

module.exports = {ptbn_pm}