const currentData = new Date()
module.exports.date = currentData

module.exports.showMassage = function (name) {
    const hour = currentData.getHours()

    switch (true) {
        case hour >= 5 && hour < 11:
            return `Good morning, ${name}`
        case hour >= 11 && hour < 17:
            return `Good day, ${name}`
        case hour >= 17 && hour < 23:
            return `Good evening, ${name}`
        case hour >= 23 || hour < 5:
            return `Goodnight, ${name}`
    }
}