<script lang="ts">
  import { Router } from '@roxi/routify/runtime'
  // eslint-disable-next-line node/no-missing-import
  import { routes } from '../.routify/routes'
  
  const config = {
    urlTransform: { apply: url => `/portfolio${url}` }
  }
</script>

<Router {routes, config} />
