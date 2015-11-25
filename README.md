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

 When you install the bundled .crx in Chrome, the popup will display "Pong", in Firefox (latest Developer edition as well as v42) will wait for a response infinitely. I debugged this down to knowing that the response is sent from the background script, yet will never arrive in the popup.

