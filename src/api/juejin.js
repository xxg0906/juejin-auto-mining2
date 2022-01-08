const request = require('../utils/request');
const { COOKIE } =  require('../utils/config.js');

module.exports = function () {
  return {
    /**
     * 签到
     */
    checkIn: function () {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/check_in',
        method: 'post',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    /**
     * 抽奖
     */
    drawApi: function () {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/lottery/draw',
        method: 'post',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    dipLucky: function (params, uuid) {
      return request({
        url: `https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=2608&uuid=${uuid}`,
        method: 'post',
        params,
        headers: {
          cookie: COOKIE,
        },
      });
    },
  }
};
