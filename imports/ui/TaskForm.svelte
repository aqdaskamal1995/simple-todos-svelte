<!-- Form is used by user to input a task -->
<script>

    export let user = null; 
    let newTask = '';

    const handleSubmit = () => {
        // Insert a task into the collection
        if (!newTask) return;
        // Calling relevant api for or inserting task
        Meteor.call('tasks.insert', newTask);
        // Clear form
        newTask = '';
        }
</script>

<form class="task-form" on:submit|preventDefault={handleSubmit}>
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    <button type="submit">Add Task</button>
</form>