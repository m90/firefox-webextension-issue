# firefox-webextension-issue
> issue with messaging in web extensions

### Install

```
$ sudo npm install
```

### Build

```
$ npm run bundle
```

This will generate `/dist/pingpong.xpi` and `/dist/backnforth.xpi`

Now, when you install one built add-on in FF Developer Edition 44, this will work fine, yet once you install its sibling, things stop working in both extensions. Chrome and Opera can handle this just fine.