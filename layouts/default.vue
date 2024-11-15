<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" aria-current="page" href="#"
              >Home</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/room" class="nav-link" href="#">Features</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" href="#">Pricing</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container">
    <slot />
  </main>
</template>

<style scoped></style>
