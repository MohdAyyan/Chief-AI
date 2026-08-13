'use strict';

module.exports = {
  async check(ctx) {
    ctx.status = 200;
    ctx.body = {
      status: 'ok',
      message: 'Strapi backend is healthy and running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  },
};
