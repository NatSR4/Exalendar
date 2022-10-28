

function validateForm()
{
    let x = document.forms["addevent-form"]["ename"].value;
    if(x == "")
    {
        alert("Must have a name for your event");
        return false;
    }
        console.log(x);
    return;
}