# Tracking Google Analytics Form Abandonment with `beforeunload` [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This is a simple example to illustrate how to use the `beforeunload` in Javascript to track form abandonment with Google Analytics' Tag Manager (`gtag`).

**Note: I am in no way affiliated with Google and do not offer official advice. This is just some code that might help some folks out there**

## Idea
An important part of understanding your users bevavior and improving conversion rates is to understand when they started to fill out a form but then closed the window or navigated somewhere else.

This script tracks every field the user enters data in. Before the window or tab is closed or the user leaves the page a summary is sent to Google Analytics as an event containing all fields the user touched.

This way you don't have to fire an event whenever a user touches a field but still get a detailed report on what might have thrown the user off.

## Usage

- Add the Google Analytics gtag snippet to your page. Check [this site](https://developers.google.com/analytics/devguides/collection/gtagjs/) for more info.
- Make sure you set the `transport_type` to `beacon`. See `example.html` and find more info [here](https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data).
- Include `form_abandonment_tracker.js` in the head of your page.
- Initialize `FormAbandonmentTracker` by adding this snippet below your form and passing in the necessary parameters:
  ```javascript
  <script type="text/javascript">
    (function(){
      FormAbandonmentTracker.init(gtag, 'YOUR_FORM_ID', 'EVENT_CATEGORY', 'EVENT_ACTION');
    })();
  </script>
  ```
- Example for `EVENT_CATEGORY`: `Signup Form`
- Example for `EVENT_ACTION`: `FormAbandonment`

*This is a quick example and not meant to be used in production.*

## License

Copyright © 2018 Ole Spaarmann <os@ospaarmann.com>

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
