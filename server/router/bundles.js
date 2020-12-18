const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2, service3, service4,
} = require('../config/services.js');

const router = Router();

//router.get('/loaderio-bb01281c979c276e3230dd2b69ce318d.txt', (res, req) => {
//	res.send('loaderio-bb01281c979c276e3230dd2b69ce318d');
//});

router.use('/service1.js', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundles/service1.js': service1.bundle,
  },
  changeOrigin: true,
}));

router.use('/service2.js', createProxyMiddleware({
  target: service2.url,
  pathRewrite: {
    '^/bundles/service2.js': service2.bundle,
  },
  changeOrigin: true,
}));

router.use('/service3.js', createProxyMiddleware({
  target: service3.url,
  pathRewrite: {
    '^/bundles/service3.js': service3.bundle,
  },
  changeOrigin: true,
}));

router.use('/service4.js', createProxyMiddleware({
  target: service4.url,
  pathRewrite: {
    '^/bundles/service4.js': service4.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;
