const express = require('express');
const app = express();
const config = require('./config.json');

const fs = require('fs');

const mime = require('mime-types');
const upload = require('express-fileupload');
const rateLimit = require('express-rate-limit')({ windowMs: config.rateLimit.minutes * 60, max: config.rateLimit.requests, message: { error: config.rateLimit.error } });
const rand = require('random-id');

app.use(upload({ preserveExtension: true, safeFileNames: true, limits: config.maxUploadMB > 0 ? { fileSize: config.maxUploadMB * 1024 * 1024 } : null }));
app.use(express.json());
if (config.rateLimit.minutes > 0) app.use(rateLimit);

app.get('/:file', async (req, res) => { 
    if (!fs.existsSync('files/' + req.params.file)) return res.status(404).json({ error: config.errors.notFound });
    res.status(200).sendFile(__dirname + '/files/' + req.params.file);
});

app.post('/files', async (req, res) => {
    if (config.authorization !== '' && req.headers.authorization !== config.authorization) return res.status(401).json({ error: config.errors.unauthorized });
    if (!req.files) return res.status(400).json({ error: config.errors.missingFile });

    const file = req.files.file;
    const extention = mime.extension(file.mimetype);
    const name = rand(6, 'aA0') + '.' + extention;

    if (config.postMessage !== '') console.log(config.postMessage.replace(/\$url/g, name));

    file.mv('files/' + name);
    return res.status(200).json({ file: name });
});

app.listen(config.port, () => { 
    console.log('Listening on port ' + config.port + '!');
    if (!fs.existsSync('./files')) {
        fs.mkdirSync('./files');
        console.log('Created missing /files directory.');
    }
});