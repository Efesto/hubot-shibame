// Description:
//   Shibame is the hubot script for improving quality of your life with shibas pics
// Dependencies:
//   None
// Configuration:
//   None
// Commands:
//   hubot shiba me - Receive a shiba

module.exports = (robot) => {
  robot.respond(/shiba me/i, msg => {
    msg.http("https://shiba-me.herokuapp.com/random")
      .get((err, res, body) => {
        msg.send(JSON.parse(body).shiba);
      }
    )
  })
}
