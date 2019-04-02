require('dotenv').config()
const SteamUser = require('steam-user')
const SteamTotp = require('steam-totp');
const GlobalOffensive = require('globaloffensive')

var user = new SteamUser()
var csgo = new GlobalOffensive(user)
var auth = SteamTotp.getAuthCode(process.env.STEAM_SECRET)

csgo.on('debug', console.log)


user.logOn({
    "accountName": process.env.STEAM_HANDLE,
    "password": process.env.STEAM_PASSWORD,
    "twoFactorCode": auth,
    "rememberPassword": true,
    "logonID": 1603,
    "machineName": "NodeJs"
})

console.log('Logging into Steam...')

user.on('loggedOn', (details, parental) => {
    var hostSteamID = user.steamID.getSteamID64()
    user.getPersonas([hostSteamID],(err,persona)=>{
        if(err) console.error("Logged into Steam, however:\n",err)
        else console.log('Logged into Steam as '+ persona[hostSteamID].player_name + " - " + hostSteamID)
        //
        user.setPersona(1) //online
        user.gamesPlayed([730],true)
        csgo.on('connectionStatus', console.log);
        csgo.on('connectedToGC', () => {
            console.log('Connected to GC!');
        })
    })
})

user.on('appLaunched', (appid) => {
    // 730 - CS:GO
    console.log("launched");

})

user.on('receivedFromGC', (appid, msgType, payload) => {
    console.log(`Received message ${msgType} from GC ${appid} with ${payload.length} bytes`)
})

module.exports = {
    csgo,
    user
}