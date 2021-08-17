class Contestant{
    constructor(){
        this.index = null;
        this.answer = null;
        this.name = null;
    }
    getCount(){
        var contestantCountref = database.ref("contestantCount")
        contestantCountref.on("value",function(data ){
            contestantCount = data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            contestantCount : count
        })
    }
    static getPlayerInfo(){
        var contestantInforef = database.ref("contestants")
        contestantInforef.on("value",function(data ){
            allContestants = data.val()
        })
    }
}