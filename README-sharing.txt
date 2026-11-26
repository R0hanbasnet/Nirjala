Birthday Surprise Website — fixes

Files:
- index.html
- script.js
- style.css

Mobile shaking:
The CSS patch prevents horizontal overflow and disables heavy 3D/scroll effects on small/touch screens.

Shared photos:
The previous code used localStorage, so images were only stored in the browser/device where they were added. This version adds Firebase Realtime Database sharing. Firebase configuration for project birthday-vault-505b2 is already inserted in script.js. Cloud sharing still requires the Realtime Database to be created/enabled and its rules published.

Setup (one-time):
1. Go to https://console.firebase.google.com/ and create a project.
2. This website is already configured with your project’s web app details.
3. In Build → Realtime Database, create/enable the database if you have not already. Confirm its URL is the one in script.js.
4. For this link-based shared gallery, configure Realtime Database rules as:
   {
     "rules": {
       "birthdayMemories": {
         ".read": true,
         ".write": true
       }
     }
   }
   These rules allow anyone who can access the database to read/write the gallery. Only upload photos you are comfortable sharing with people who have the link. Do not use this for private or sensitive photos.
5. Do not replace the Firebase config; your provided values are already inserted.
6. Upload index.html, script.js, and style.css together to your hosting provider (keep their filenames), then open the hosted link and test adding a photo.

Important:
- Photos already saved only in your old browser's localStorage do not automatically exist in the cloud. Add them again from the updated site to share them.
- Both you and the recipient must open the same hosted website URL. A local file or localhost URL is not shareable.
- The shared gallery stores compressed photos as data in Realtime Database. Keep images reasonably sized.
