<template>
    <div>
        <h1 class="text-center font-2xl font-bolder">User Profile</h1>
        <div class="flex justify-between mt-4">
            <h2>Name:</h2>
            <p>{{user.name}}</p>
        </div>

        <div class="flex justify-between mt-4">
            <h2>Email:</h2>
            <p>{{user.email}}</p>
        </div>

        <div class="flex justify-between mt-4">
            <h2>Mobile Number:</h2>
            <p>{{user.mobile_number}}</p>
        </div>

        <div class="flex justify-between mt-4">
            <h2>Date of Birth:</h2>
            <p>{{user.date_of_birth}}</p>
        </div>

        <div class="flex justify-between mt-4">
            <h2>Gender:</h2>
            <p>{{user.gender}}</p>
        </div>

        <div class="flex justify-between mt-4">
            <h2>Nationality:</h2>
            <p>{{user.country_name}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "UserProfile",
        props: ["user"]
    }
</script>


<style scoped>
    h2{
        font-weight: 500;
    }

    h1{
        font-weight: 600;
        font-size: 1.42rem;
    }
</style>