import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Draggable } from 'react-drag-and-drop'
import logoPlus from '../pictures/plus.png'
import logoMinus from '../pictures/minus.png'

const MyModalComponent = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [itemSelected, setItemSelected] = useState('');

  const toggle = () => {
    setModal(!modal);
  }

  const item = (e) => {

    setItemSelected(e.target.id);

    var index = data.findIndex(x => x.name === e.target.id);
    var array = data;

    array.forEach(function (el) {
      el.class = "font"
    });

    array[index].class = "font selected";
    setData(array);
  }

  const validate = () => {
    setData([...data, { name, class: "font" }]);
    setModal(!modal);
    setName('');
  }

  const remove = () => {
    var index = data.findIndex(x => x.name === itemSelected);
    const _data = [...data];
    if (index > -1) {
      _data.splice(index, 1);
    }
    setData(_data);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <center>
        <h1>Composition</h1>
        <div className="list">
          {data.map(el => <Draggable id={el.name} className={el.class} onClick={item} type="item" key={el.name} data={el.name}>{el.name}</Draggable>)}
        </div>
      </center>
      <div className="row buttons ">
        <div className="col left">
          <Button color="success" className="testic"  onClick={toggle}><img src={logoPlus} width="50"></img></Button>
        </div>
        <div className="col right">
          <Button color="danger" onClick={remove}><img src={logoMinus} width="50"></img></Button>
        </div>
      </div>
      <Modal isOpen={modal}>
        <ModalHeader>Add composition</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
              <label>Name:</label>
              <input type="text" value={name} with="100" onChange={handleChangeName} className="form-control" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={validate}>Validate</Button>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyModalComponent