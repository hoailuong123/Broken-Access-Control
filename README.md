# OWASP Top-10

## Warning

These demos contain intentionally vulnerable code.

Do not run any of them on a machine which can be accessed by external users.

## Prerequisites
1. [Git](https://git-scm.com/) - For cloning the repo
2. [npm](https://www.npmjs.com/get-npm)

## Installation

Clone the repository:
```
git clone https://github.com/mureinik/owasp-top10-demo.git
```

Install the dependencies:
```
npm install
```

## Demos

### A5:2017 Broken Access Control

Run the session demo:
```
node session.js
```

If you use your browser to navigate to http://localhost:3000/data you'll get an error stating `not logged in`, which is 
expected.

You can navigate to http://localhost:3000/session.html and use the credentials `user1`/`password1` to log in, after
which you'll be redirected to http://localhost:3000/data?username=user1 and we that user's data. Similarly, you can use
the credentials `user2`/`password2`, and will see a different set of data. However, if you log in as `user1`, you could
manually navigate to http://localhost:3000/data?username=user2, and will see that user's data.

In other words, this demo implements **authentication**, but does not implement **authorization**.

