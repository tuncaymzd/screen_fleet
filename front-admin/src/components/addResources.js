import React, { useState } from 'react';
import { Button } from 'reactstrap';

const AddResources = () => {
  const [file, setFile] = useState("");

  const fileName = (data) => {
    setFile(data.target.files[0])
  }

  const validate = () => {

    var formData = new FormData();
    formData.append("file", file);

    var blob = new Blob([''], { type: "text/xml" });

    formData.append("file", blob);

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/api/ScreenFiles/upload");
    request.send(formData);
  }

  return (
    <div>
      <center>
        <h1>Add</h1>
        <div class="chooseFile">
          <input type="file" onChange={fileName} name="datafile" size="80"></input>
        </div>
        <Button color="success" className="btnValidate" onClick={validate}>VALIDATE</Button>
      </center>
    </div>
  );
}

export default AddResources