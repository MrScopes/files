# setup
make config.json in root directory with authorization code:
```
{
    "authorization": "epicgamer",
    "url": "https://mrscopes.me"
}
```

# sharex
in order to upload images from your computer easily (like imgur) I recommend ShareX:

- Add a new Custom Uploader (Under Destinations). 
- Set it's destination type to Image Uploader and URL to `(yoururl)/files`.
- Make sure the body type is Form Data (multipart/form-data). Also add file to the File from name: section on the bottom right.
- add `Authorization:` auth key here to the `Headers:` section on the bottom left.
- Set `URL:` to yoururl/$json:file$.
