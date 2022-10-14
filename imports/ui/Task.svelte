<script>
  
    export let task;
    
    // Calls the relevant api for setisChecked and changes property .isChecked to opposite of exsiting value
    const toggleChecked = () =>
    Meteor.call('tasks.setIsChecked', task._id, !task.isChecked);

    // Calls the relevant api for deleting the task and removes task from task collection
    const deleteThisTask = () => Meteor.call('tasks.remove', task._id);
   
  </script>

<li>
    <!-- Structure of task is checkbox-tast_text-delete -->
    <input
            type="checkbox"
            readonly
            checked={!!task.isChecked}
            on:click={toggleChecked}
    />
    <span>{ task.text }</span>
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>