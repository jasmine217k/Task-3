# Task-3<br/>
<h3>CRUD api using node.js ,express , javascript and mongodb.</h3><br />
<h4>Using this api,user can perform the following operations:</h4>
<ol>
<li>Create a user having username,password,name and phonnumber.</li>
<li>Get details of any user on the basis of username.</li>
<li>Make changes in the user-details on the basis of username.</li>
  <li>Delete a user on the basis of username.</li>
  <br>


<h3>GET Request Initially.</h3>
http://localhost:8000/jas

  <h4>Response.</h4>
  <div>[]       </div>

  <h3>POST Request to generate users</h3>
  <p>
  <div>http://localhost:8000/jas</div>
  <div>
    
    {
    "username":"jasmine",
    "password":"1233536",
    "name":"jas",
    "phonenumber":"13436772"}
  </div>
  <div>http://localhost:8000/jas</div>
  <div>
    
    {
    "username":"ravi",
    "password":"de3535",
    "name":"rav",
    "phonenumber":"566674"}
  </div>
  <div>http://localhost:8000/jas</div>
  <div>
    
    {
    "username":"simran",
    "password":"1233536533",
    "name":"sim",
    "phonenumber":"44674923"}
  </div>
  <h3>Get request by username to get details of any user</h3>
  <div>http://localhost:8000/jas/ravi</div>
  <h4>Response from GET request</h4>
  <div>
    
    {
    "_id": "62356145ca0a70858e81b533",
    "username": "ravi",
    "password": "de3535",
    "name": "rav",
    "phonenumber": "566674",
    "__v": 0}
  </div>
  <h3>Patch request to change data on the basis of username</h3>
  <div>http://localhost:8000/jas/ravi</div>
  <div>
    
    {
    "name":"rahul"
    }
  </div>
  <h4>Response</h4>
  <div>
    
    {
    "_id": "62356145ca0a70858e81b533",
    "username": "ravi",
    "password": "de3535",
    "name": "rahul",
    "phonenumber": "566674",
    "__v": 0
    }
  </div>
  <h3>Delete user on the basis of username</h3>
  <div>http://localhost:8000/jas/simran</div>
  <h4>Response</h4>
  <div>
    
    User has been deleted successfully
  </div>
  <h3>Final get request</h3>
  <div>http://localhost:8000/jas</div>
  <h4>Response</div>
  <div>
    
    [
    {
        "_id": "62356145ca0a70858e81b533",
        "username": "ravi",
        "password": "de3535",
        "name": "rahul",
        "phonenumber": "566674",
        "__v": 0
    },
    {
        "_id": "62356169ca0a70858e81b535",
        "username": "jasmine",
        "password": "1233536",
        "name": "jas",
        "phonenumber": "13436772",
        "__v": 0
    }]
  </div>
  
  
    

