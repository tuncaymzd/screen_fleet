import React,  {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Droppable } from 'react-drag-and-drop'


const MyModalComponent = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [itemHover, setItemHover] = useState("");
  const [data, setData] = useState([]);
  const [itemSelected, setItemSelected] = useState('');

  const toggle = () => {
    setModal(!modal);
  }

  const item = (e) => {

    setItemSelected(e.target.id);

    var index = data.findIndex(x => x.name === e.target.id);
    var array = data;

    array.forEach(function(el) {
      el.class="font"
    });

    array[index].class = "selected font";
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

  const onDrop = (data) => {
    console.log(data.item + " -> "+itemHover)
  }

  const onHoverItem = (data) => {
    setItemHover(data.target.id);
  }

  return (
    <div>
        <h1>Tvs</h1>
        <center>
          <div className="list">
          {data.map(el => <Droppable onDragEnter={onHoverItem} onClick={item} id={el.name} className={el.class} key={el.name} types={['item']} onDrop={onDrop}>{el.name}</Droppable>)}
          </div>
        </center>
        <div className="row buttons  ">
          <div className="col left">
            <Button color="success" onClick={toggle}> + </Button>
          </div>
          <div className="col right">
            <Button color="danger" onClick={remove}> - </Button>
          </div>
        </div>
        <Modal isOpen={modal}>
          <ModalHeader>Add tv</ModalHeader>
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