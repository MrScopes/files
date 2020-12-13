Using this like imgur requires [ShareX](https://getsharex.com/). It's pretty easy to setup.\
There's also other ways. Such as making the request via `node-fetch` or something similar.\
_You are expected to host this yourself. My instance is private and requires an auth token._

___

# ShareX
- Add a new Custom Uploader (Under Destinations). Set it's destination type to `Image Uploader` and `URL` to `yoururl/files`.\
- Make sure the body type is `Form Data (multipart/form-data`. Also add `file` to the `File from name:` section on the bottom right.\
- If you added an auth key in the config, add `Authorization: auth key here` to the `Headers:` section on the bottom left.
- Click the `Response` button adjacent to `Request`.\
- Set `URL:` to `yoururl/$json:file$`.
- Final Result should look something like this: 
![](https://i.mrscopes.me/final1.png)\
![](https://i.mrscopes.me/peXylY.png)