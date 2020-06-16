module.exports = {
    
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        //month "getMonth" counts from 0 to 11, so add 1.

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            iso:`${year}-${month}-${day}`,
            birthDay: `${month}/${day}`
        }
    }

}