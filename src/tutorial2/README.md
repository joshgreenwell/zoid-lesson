# tutorial 2: Customizing the Create

Building off tutorial 1, we will now look at how you can<br/>
customize you component shape and style with the `create` call

`Create` should only ever be called once per a page, per tag!<br/>
if you try to call create again in the `parent.js` it will<br />
throw an error. `Render`, however, can we called any number<br/>
of times.

### Step 1:

First, let's look at the changing the size of the child on the<br/>
parent page. To do this we can use the `dimensions` key.

If you build the tutorial now, `yarn run b:2`, you will see<br/>
visually we have an issue!

This should be done in `parent.js`.

```javascript
const helloWorld = zoid.create({
  tag: 'hello-world',
  url: `${config.baseUrl}/child.html`,
  dimensions: {
    width: '600px',
    height: '400px'
  }
})
```

Adding the dimensions key to the create, we are able to change<br/>
the size of the zoid component. Only px and % strings are supported.

### Step 2:

Next, let's look at `prerendering`. Zoid adds a nice little<br/>
spinner by default, but if you want to have your own prerender<br />
we can use the prerender function in the create call.

Again, this should be done in `parent.js`.

```javascript
const helloWorld = zoid.create({
  tag: 'hello-world',
  url: `${config.baseUrl}/child.html`,
  dimensions: {
    width: '600px',
    height: '400px'
  },
  prerenderTemplate() {
    const html = document.createElement('html')
    html.innerHTML = '<body>Pre-render</body>'
    return html
  }
})
```

Now you will see `Pre-render` before `Hello World` renders.<br/>
Obviously you can make this more complex and add styles and<br/>
more elements. Generally though, you won't add scripts, otherwise<br/>
it sort of defeats the purpose of the prerender.

### Step 3:

Now, we will look at types of zoid components, the obvious two are<br/>
`iframe` and `popup`. By default, zoid renders the child component<br/>
as an iframe. Let's change it to a popup.

In zoid, these are called `contexts` and can be implemented like below.

```javascript
const helloWorld = zoid.create({
  tag: 'hello-world',
  url: `${config.baseUrl}/child.html`,
  dimensions: {
    width: '600px',
    height: '400px'
  },
  prerenderTemplate() {
    const html = document.createElement('html')
    html.innerHTML = '<body>Pre-render</body>'
    return html
  },
  contexts: {
    popup: true
  }
})
```

### Step 4:

Finally, we will look forward to the next tutorial and talk about<br/>
`props`. In your create call, you can also add validation and<br/>
documentation for the props that are required or optional. In zoid,<br/>
props are like options.

```javascript
const helloWorld = zoid.create({
  tag: 'hello-world',
  url: `${config.baseUrl}/child.html`,
  dimensions: {
    width: '600px',
    height: '400px'
  },
  contexts: {
    popup: true
  },
  props: {
    username: {
        type: 'string',
        required: true
    },
    onLogin: {
        type: 'function',
        required: true
    },
    somethingElse: {
      type: 'string',
      required: false
    }
  }
})
```

If you run this, you will see that it fails to load the component.<br/>
This is because no props are being passed during the render. This<br/>
is just a spec for how the zoid component should act.