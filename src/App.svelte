<script>
  import Navaid from "navaid";
  import { onMount } from "svelte";
  import { Router } from "./router.js";

  let Route,
    params = {};

  function draw(m, params) {
    params = params || {};
    Route = m.default || m;

    // track on google analytic for every page changed
    track();
  }

  function track(obj) {
    if (window.ga) {
      ga.send("pageview", { dp: obj.uri });
    }
  }

  const router = Router(draw);

  onMount(() => {
    router.listen();
    addEventListener("replacestate", track);
    addEventListener("pushstate", track);
    addEventListener("popstate", track);

    return () => {
      removeEventListener("replacestate", track);
      removeEventListener("pushstate", track);
      removeEventListener("popstate", track);
      router.unlisten();
    };
  });
</script>

<div class="app">
  <main class="wrapper">
    <svelte:component this={Route} {params} />
  </main>
</div>
