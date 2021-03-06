define({
  "status": 200,
  "responseType": "json",
  "response": {
    "stateToken": "00_sxrUO9R5qFiSy5bb7vbyjftsAAMJDSGIHYvs_88",
    "expiresAt": "2015-10-03T23:28:59.000Z",
    "status": "RECOVERY_CHALLENGE",
    "factorType": "sms",
    "recoveryType": "PASSWORD",
    "_links": {
      "next": {
        "name": "verify",
        "href": "https:\/\/rain.okta1.com:80\/api\/v1\/authn\/recovery\/factors\/SMS\/verify",
        "hints": {
          "allow": [
            "POST"
          ]
        }
      },
      "cancel": {
        "href": "https:\/\/rain.okta1.com:80\/api\/v1\/authn\/cancel",
        "hints": {
          "allow": [
            "POST"
          ]
        }
      },
      "resend": {
        "name": "sms",
        "href": "https:\/\/rain.okta1.com:80\/api\/v1\/authn\/recovery\/factors\/SMS\/resend",
        "hints": {
          "allow": [
            "POST"
          ]
        }
      }
    }
  }
});
