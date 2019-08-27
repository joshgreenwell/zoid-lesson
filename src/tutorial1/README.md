# Tutorial 1 : The Basics

Create a basic zoid component to connect a parent and child page

### Step 1:

If you open `parent.html`, you will notice it is just a div element.<br/>
This is where we will render the `child.html`.<br/>

Let's create a zoid component in `parent.js`. To do this we need<br/>
to call [`zoid.create`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#zoidcreate-options-).

```javascript
const helloWorld = zoid.create({
  tag: 'hello-world', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}/child.html`
})
```

The child component you are trying to load is always the [`url`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#url-string---props---string-required), in<br/>
this case the `child.html` is being loaded *into* the `parent.html`.

### Step 2:

Now we can run our yarn command to build and serve the files.

```bash
yarn run b:1
```

Now you can go to `http://lcoalhost:3000/parent.html` and you should<br/>
see a `console.log`.

### Step 3:

We have created the zoid component, but we haven't rendered it yet.<br/>
The `parent.html` has a div with the id of [`#zoid-component`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#container-string--htmlelement). We will<br/>
use that as a place to render our child.

This will go in `parent.js`.

```javascript
// Element can be either an string id or a dom element
const element = '#zoid-component'
const options = {}

helloWorld(options).render(element)
```

Calling [`zoid.create`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#zoidcreate-options-) returns a zoid component object, which has to be<br/>
initialised with [`props`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#props-object) first by calling it, this returns another object<br />
with a [`render`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#componentpropsrendercontainer-context) function in it.

Now when you go to refresh the webpage, you should see a spinner.<br/>
This will spin endlessly because it can't make a connection to the child.<br/>

Zoid requires a two way connection, a component on the parent and a<br/>
component on the child.

### Step 4:

Now we move on to building our child component. We have our parent trying<br/>
to connect to our child, but no child component accepting the connection.

Using the exact same code as above, we are able to create this connection.

This will go in `child.js`.

```javascript
const helloWorld = zoid.create({
  tag: 'hello-world', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}/child.html`
})
```

The key thing to note here is that the [`tag`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#tag-string-required) and [`url`](https://github.com/krakenjs/zoid/blob/master/docs/api.md#url-string---props---string-required) are **exactly**<br/>
the same in both the parent and child components.