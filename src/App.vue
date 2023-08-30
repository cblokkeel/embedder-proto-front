<template>
    <div class="links">
        <router-link to="/">Accueil</router-link>
        -
        <router-link to="/system">Systeme</router-link>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.links {
    margin-bottom: 3.2rem;
}
</style>
