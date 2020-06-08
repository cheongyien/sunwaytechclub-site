# Contribute to Sunway Tech Club website

We split the team into 2, component team and page building team to have a clearer role and better efficiency.

## 📝 Table of Contents

- [Component Team](#component)
- [Page building Team](#page_building)

## 🧱 Component Team <a name="component"></a>

If you are Component team (Team that creates all frequently used components):

This is the bencemark that we are looking into:

[https://svelte-mui.ibbf.ru/button](https://svelte-mui.ibbf.ru/button)

Create all the components inside `src/components` root folder.

## 🏠 Page building Team <a name="page_building"></a>

If you are Page building Team (Team that creates all the pages):

Create all the pages inside `src/pages` folder, create a folder inside with your page name if you are writing with sub-pages as below:

```
root
|__src
|   |__pages
|       |__<your page name>
|           |_Index.svelte
|           |_<your other sub-pages>
```

else, just create it without folder like this:

```
...
pages
|__<your page name>.svelte
```

If you would like to create a component specific to your own page, create a folder with your page name in `/component` like this:

```
...
|__components
|  |_<your page name>
|    |_<Your local components>
```

That's it! If you are not familiar with Sveltejs, do go to the sveltejs official tutorial [here](https://svelte.dev/tutorial/basics) (can be completed around an hour with prior knowledge of little html, css, js)
