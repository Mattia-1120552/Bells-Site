<template>
  <div class="flex flex-col items-center">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/social">Social</RouterLink>
    </nav>
    (๑✪ᆺ✪๑)
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: rgb(100, 105, 104);
  cursor: default;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    padding: 1rem 0;
  }
}
</style>
