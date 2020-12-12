Using this requires [ShareX](https://getsharex.com/). It's pretty easy to setup.\
_You are expected to host this yourself. My instance is private and requires an auth token._

### Step 1
Visit your Custom Uploaders

![Step 1](https://i.mrscopes.me/PAjqrk.png)

### Step 2
Add a new Custom Uploader. Set it's destination type to `Image Uploader` and `URL` to `yoururl/files`.\
Make sure the body type is `Form Data (multipart/form-data`. Also add `file` to the `File from name:` section on the bottom right.\
If you added an auth key in the config, add `Authorization: auth key here` to the `Headers:` section on the bottom left.

![Step 2](https://i.mrscopes.me/BMh9Dk.png)\
![Step 2 Part 2](https://i.mrscopes.me/JJrTTl.png)

### Step 3
Click the `Response` button adjacent to `Request`.\
Set `URL:` to `yoururl/$json:file$`.

![Step 3](https://i.mrscopes.me/Amllvy.png)

**You've completed the setup.**\
You should now run the 'test' button under 'Image Uploader:' located on the bottom left of the ShareX window.