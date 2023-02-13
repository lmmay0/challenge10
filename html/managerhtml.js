const Manager = require("../lib/Manager")

const ManagerHTML = (Manager=>{
    return`

<p>name: ${Manager.getName()}</p>
<p>email: ${Manager.getEmail()}</p>
<p>officenumber: ${Manager.getOfficeNumber()}</p>

`
})

module.exports=ManagerHTML