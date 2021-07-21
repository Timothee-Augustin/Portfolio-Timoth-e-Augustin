const uploadRoute = require('express').Router();

const multer = require('multer');

const upload = multer({ dest: 'tmp/' });

const fs = require('fs');

// define the index route
uploadRoute.post('/', upload.fields([{ name: 'firstPic' }, { name: 'secondPic' }]), (req, res) => {
  if (req.files.firstPic[0].size <= 1000000 && req.files.secondPic[0].size <= 1000000) {
    fs.renameSync(req.files.firstPic[0].path, `uploads/${req.files.firstPic[0].originalname}`);
    fs.renameSync(req.files.secondPic[0].path, `uploads/${req.files.secondPic[0].originalname}`);
    res.status(200).json({
      picture1: req.files.firstPic[0],
      picture2: req.files.secondPic[0],
    });
  } else if (req.files.firstPic[0].size > 1000000 && req.files.secondPic[0].size <= 1000000) {
    fs.rmSync(req.files.firstPic[0].path);
    fs.renameSync(req.files.secondPic[0].path, `uploads/${req.files.secondPic[0].originalname}`);
    res.json({ error: 'Premiere image trop volumineuse! Seconde image bien uploadée!', picture2: req.files.secondPic[0] });
  } else if (req.files.secondPic[0].size > 1000000 && req.files.firstPic[0].size <= 1000000) {
    fs.rmSync(req.files.secondPic[0].path);
    fs.renameSync(req.files.firstPic[0].path, `uploads/${req.files.firstPic[0].originalname}`);
    res.json({ error: 'Seconde image trop volumineuse! Premiere image bien uploadée !', picture1: req.files.firstPic[0] });
  } else {
    fs.rmSync(req.files.firstPic[0].path);
    fs.rmSync(req.files.secondPic[0].path);
    res.status(400).json({ error: 'Les deux images sont trop volumineuses !!' });
  }
});

module.exports = uploadRoute;
