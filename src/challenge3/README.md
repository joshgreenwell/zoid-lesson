# Challenge 3: Passing Props

Building off challenge 2, we will now look at how you can<br/>
customize you component's props and how to pass data between<br/>
windows.

### Step 1:

Props are added as the first parameter of the `render` function.<br/>
We won't use props validation in this portion until `step 4`.

In `parent.js` we have an options object that is being passed<br />
into our render function. Let's populate that with some values.

**Note:** render is only called from the parent, therefore, our<br/>
props will only evvery be passed to the child. We will cover more<br/>
on that later.

```javascript
const options = {
  alternateText: 'People'
}
```

It's as simple as that! Now you are passing props whenever you render.

### Step 2:

Building off setp 1, let's access this `alternateText` value in<br/>
the child component.

In `child.js` add the below.

```javascript
const element = document.querySelector('#hello')
hello.innerHTML = `Hello ${window.xprops.alternateText}`
```

Zoid adds `xprops` to the child window object, so we can access<br/>
all passed data here.

### Step 3:

So, now you masy be wondering, if zoid only passes data one way,<br/>
how do you do two way messaging? The asnwer is callbacks.

Just like above we will add a key to our options object, but this<br/>
time the value will be a function.

```javascript
const options = {
  alternateText: 'People',
  updateBackgroundColor: (elementId, color) => {
    const el = document.querySelector(`#${elementId}`)
    el.style.backgroundColor = color
  }
}
```

When the child calls this function, it will reference the parent's<br/>
dom tree, not the childs. This way we can do almost anything to the<br/>
parent page from within the child, assuming there is a function passed<br/>
from the parent.

To use this function, we refrence the xpropx in the `client.js`.

```javascript
document.addEventListener('click', () => {
  window.xprops.updateBackgroundColor('bgDiv', 'black')
}, false)
```

Now when we click in the client component, we see a black box appear.<br/>
The next challenge will focus on using all that you have learned.

