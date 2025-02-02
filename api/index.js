//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Game } = require('./src/loadGamesDB/loadGame.js')
const { genresToDb } = require('./src/loadGamesDB/loadGenre.js')
require('dotenv').config();
const {PORT} = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  genresToDb().then(()=>{
    Game().then(()=>{
      server.listen(PORT, () => {
        console.log('%s listening at',process.env.PORT ); // eslint-disable-line no-console
      });
    });
  });
});
