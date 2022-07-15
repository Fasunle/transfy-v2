<template>
  <header>
    <nav>
        <div>
            <div>
                <img src="../assets/menu-icon.svg" alt="menu icon">
            </div>
            <h1>Transfy</h1>
        </div>
        <ul>
            <li>
                <router-link to="/">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <li>
                <router-link to="/logout">Logout</router-link>
            </li>
        </ul>
        <div>
            <img src="../assets/user.png" alt="Current User">
        </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>