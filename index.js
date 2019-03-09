/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.dummySiteSpeed = (req, res) => {
  // let message = req.query.message || req.body.message || 'Hello World!';
  siteSpeed = Math.floor(Math.random() * 1000 + 200);
  cacheHitRate = Math.floor(Math.random() * 60 + 20) / 100;
  res.status(200).json({
    "siteSpeed": siteSpeed,
    "cacheHitRate": cacheHitRate
  });
};

const request = require('request');

exports.dummyUptime = (req, res) => {
  if (req.method === "GET") {
    time = Math.floor(Math.random() * 5000000 + 100000);
    errorRate = Math.floor(Math.random() * 80) / 10000;
    res.status(200).json({
      "time": time,
      "errorRate": errorRate
    });
  } else if (req.method === "POST") {
    request(req.param("endpoint"));
    res.status(200).send("sent\n");
  }
}