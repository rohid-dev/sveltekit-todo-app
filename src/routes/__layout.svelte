<script>
  import Nav from '../components/Nav.svelte';

  import '../app.css';
</script>

<div class="flex h-screen w-screen overflow-hidden">
  <div class="w-64 bg-gray-100">
    <Nav />
  </div>
  <div class="flex-1 overflow-hidden">
    <slot />
  </div>
</div>
