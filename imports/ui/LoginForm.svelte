<script>
    import { Meteor } from 'meteor/meteor';

    let username = "";
    let password = "";

    // Authenticate the user
    const handleSubmit = () => {
        Meteor.loginWithPassword(username, password);
    }
</script>

<form class="login-form" on:submit|preventDefault={handleSubmit}>
    <div>
        <label htmlFor="username">Username</label>
        <!-- Create an input field for username -->
        <input
                type="text"
                placeholder="Username"
                name="username"
                required bind:value={username}
        />
    </div>

    <div>
        <label htmlFor="password">Password</label>
         <!-- Create an input field for password -->
        <input
                type="password"
                placeholder="Password"
                name="password"
                required
                bind:value={password}
        />
    </div>
    <div>
        <button type="submit">Log In</button>
    </div>
</form>