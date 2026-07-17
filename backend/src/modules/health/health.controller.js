const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "HospitalOS API is Running",
    timeStamp: new Date().toISOString(),
  });
};

module.exports = {
  healthCheck
};
