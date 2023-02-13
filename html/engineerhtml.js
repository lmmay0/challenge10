const Engineer = require("../lib/Engineer");

const engineerHTML = (engineer =>{
return`

<p>name: ${engineer.getName()}</p>
<p>email: ${engineer.getEmail()}</p>
<p>github: ${engineer.getGithub()}</p>

`
})
module.exports=EngineerHTML