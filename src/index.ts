import express from 'express';
import fs from 'fs';
import mime from 'mime-types';
import upload from 'express-fileupload';
import rand from 'random-id';
import config from '../config.json';

const app = express();

app.use(upload({ preserveExtension: true, safeFileNames: true }));

app.get('/', (req, res) => {
    res.send('hello.');
});

app.get('/file/:file', (req, res) => {
    if (fs.readdirSync('./files').includes(req.params.file)) {
        res.status(200).sendFile(req.params.file, { root: './files' });
    } else {
        res.status(404).sendFile('./404.jpg', { root: './files' });
    }
});

app.get('/files', async (req, res) => {
    res.sendFile('index.html', { root: './src/' });
});

app.post('/files', async (req, res) => {
    if (req.headers.authorization !== config.authorization) return res.status(401).send('Unauthorized.');

    // @ts-ignore
    if (!req.files) return res.status(400).send('Missing File.');

    // @ts-ignore
    const file = req.files.file;
    const extention = mime.extension(file.mimetype);
    const name = req.headers['auto-generate'] ? rand(6, 'aA0') + '.' + extention : file.name;

    file.mv(`files/${name}`);
    return res.status(200).json({ url: `${config.url}/file/${name}`});
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});