import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState, useEffect} from 'react';


const ListResources = () => {
  const port = "5000"
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [nameFile, setNameFile] = useState("");
  const [printTag, setPrintTag] = useState([]);

  const toggle = (data) => {
    var link = "http://localhost:"+port+"/api/ScreenFiles/getFile/"+data.target.id;

    if(data.target.id.split('.')[1] == 'mp3' || data.target.id.split('.')[1] == 'mp4'){
      setPrintTag([<div><video width="400" controls><source src={link} type={"video/"+data.target.id.split('.')[1]}></source></video></div>])
    }else{
      setPrintTag([<img className="pictureModal" src={link}/>])
    }

    setNameFile(data.target.id.split('.')[0])
    setModal(!modal);
  }

  function runList() {
    useEffect(() => {
      fetch("http://localhost:"+port+"/api/ScreenFiles/getResource")
        .then(res => res.json())
        .then(
          (result) => {
            var arr = [];
            result.resources.forEach(element => {
              if(element.split('.')[1] == 'mp4' || element.split('.')[1] == 'mp3'){
                arr.push({type:"video",link:element})
              }else{
                arr.push({type:"picture",link:element})
              }
            });

            setData(arr)
          }
        )
      }, []);
    }

    runList()
    return (
    <div>
      <center>
        <h1>Resources</h1>
        <div className="listComposition">
          {data.map(el =>
          <div id={el.link} key={el.link} className="fontResource" onClick={toggle} ><span class="floatLeft">[{el.type}]</span>{el.link.split('.')[0]}</div>
          )}
        </div>
      </center>

      <Modal isOpen={modal}>
        <ModalHeader>{nameFile}</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="form-group col-md-12">
                 {printTag}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListResources