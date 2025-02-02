# learning Outcome
---
1) In event lister the object  we get while performing event like click, mouseover,mousein, mouseout, keypress these all action give a different event.

## for example
```

let main=document.getElementById("main");
    main.addEventListener("mousemove",function(event)
    {
        console.log("hello you clicked onmain");
        console.log(event);
    });

```

* here we are performing `mouseover` and object we got in return will be `mouseevent`
* if we give `click` event to capture then we will get `pointer event`

---
## this is an example as event changes the output will chnage
---

# using event listner we try to give values of cursor movement,to gsap.
using following code