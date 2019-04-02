const user = require('init.js').user
const csgo = require('init.js').csgo

function getRank(steamID){
    if(csgo == undefined || user = undefined){
        console.error("Problem connecting to CS:GO servers")
        return undefined
    }
    csgo.requestPlayersProfile(steamID, profile=>{
        console.log(profile.ranking)
        console.log(profile.ranking.rank_id)

    })
}

