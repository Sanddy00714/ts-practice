# Network Tab Notes

## Exercise 23: Login request on the-internet.herokuapp.com/login

Tested in Chrome DevTools → Network, with "Preserve log" ticked.

| What | Successful login (tomsmith) | Wrong password |
|------|-----------------------------|----------------|
| Request | `authenticate` | `authenticate` |
| Method | POST | POST |
| Status | 303 See Other | Not yet verified |
| Payload | `username` and `password`, visible in plain text | Not yet verified |
| `Location` header | Not yet verified (expected: `/secure`) | Not yet verified |
| Next request | Not yet verified (expected: GET `/secure`) | Not yet verified |
| Message on page | Not yet verified | Not yet verified |

### What I learned

- **POST** sends data to the server to log in.
- **303 See Other** is a redirect: "your POST worked, now load the result page with a GET." It's not 200 because the server doesn't send the page itself; the browser makes a second request for it. 303 also stops the form being re-submitted on refresh.
- **The password is visible in DevTools**, because DevTools shows what the browser sends before encryption. The site uses HTTPS, so it's encrypted on the network. Tests should never use real passwords or print them in logs.
- **"Preserve log" is needed** because a successful login navigates to a new page, which would otherwise clear the Network list and lose the evidence.

## Exercise 24: Sauce Demo login

I logged in to Sauce Demo with a wrong password while watching the Network tab.

| What | Observed |
|------|----------|
| Error shown | "Epic sadface: Username and password do not match any user in this service" |
| Requests in the Network tab | 1 |
| That request | POST to `submit.backtrace.io/UNIVERSE/TOKEN/json`, 503 Service Unavailable |

### Conclusion

- The only request went to **backtrace.io**, a third-party error-reporting service, not to Sauce Demo. It isn't a login request.
- **No login request was sent at all.** The error appeared without asking a server, so Sauce Demo checks the username and password inside the browser, in its JavaScript.
- On a real website this would be a serious security problem: anyone could read the JavaScript to find valid users or skip the check. Sauce Demo is a practice site, so it's acceptable there.
- **Lesson:** not every request in the Network tab belongs to the app. Check the domain before drawing conclusions. A 503 from a third-party service doesn't mean the app's login is broken.