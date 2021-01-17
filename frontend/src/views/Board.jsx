import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/dist/v4";
import map from '../img/map.png';
import Card from "react-bootstrap/esm/Card";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Popup from "./Popup";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import { setPriority } from "os";

const itemsFromBackend = [
  { id: uuid(), content: "Create Wireframe for Hack The North 2020++" },
  { id: uuid(), content: "Research Frameworks" },
  { id: uuid(), content: "Configure Database" },
  { id: uuid(), content: "Build Frontend" },
  { id: uuid(), content: "Add API Calls" },
  { id: uuid(), content: "Connect to Database" }
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};




function Board(props) {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [task_name, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [time_to_start, setStartTime] = useState("");
  const [time_to_complete, setCompleteTime] = useState("");
  const [date_to_complete, setCompleteDate] = useState("");

  return (
    <div>
    <Card.Img src= {map} alt="Card image" style={{backgroundColor: 'white'}} height='100%' width='100%'/>
    <Card.ImgOverlay>
    <div style={{marginTop: '100px'}} className="container">
      <div className="d-grid gap-2 d-md-block">
        <button style={{marginRight: 10}} className="btn btn-primary" onClick={handleShow}>Add Task</button>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group size="lg" controlId="task_name" className="text-left">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            autoFocus
            type="task_name"
            value={task_name}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Form.Group >


        <Form.Group size="lg" controlId="status" className="text-left">
          <Form.Label>Status</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="Select"             
     
            type="status"
            value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>CREATED</option>
            <option>TO_DO</option>
            <option>IN_PROGRESS</option>
            <option>COMPLETED</option>

          </Form.Control>
        </Form.Group >

        <Form.Group size="lg" controlId="priority" className="text-left">
          <Form.Label>Priority</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="Select"             
     
            type="priority"
            value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </Form.Control>
        </Form.Group >

        <Form.Group size="lg" controlId="description" className="text-left">
          <Form.Label>Description</Form.Label>
          <Form.Control
   
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group >

        <Form.Group size="lg" controlId="time_to_start" className="text-left">
          <Form.Label>Time to Start (HH:MM:SS)</Form.Label>
          <Form.Control
     
            type="time_to_start"
            value={time_to_start}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </Form.Group >

        <Form.Group size="lg" controlId="time_to_complete" className="text-left">
          <Form.Label>Time to Start (HH:MM:SS)</Form.Label>
          <Form.Control
     
            type="time_to_complete"
            value={time_to_complete}
            onChange={(e) => setCompleteTime(e.target.value)}
          />
        </Form.Group >


        <Form.Group size="lg" controlId="date_to_complete" className="text-left">
          <Form.Label>Date to Complete (YYYY/MM/DD)</Form.Label>
          <Form.Control
     
            type="date_to_complete"
            value={date_to_complete}
            onChange={(e) => setCompleteDate(e.target.value)}
          />
        </Form.Group >


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>





        <button className="btn btn-primary">Run Analytics</button>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center", height: "100%", marginTop:"10px" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
          
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h3 style={{fontWeight:'bold', color:"black"}} >{column.name}</h3>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "darkgrey"
                            : "lightgrey",
                          padding: 4,
                          width: 300,
                          minHeight: 500,
                          borderRadius: '7px'
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      borderRadius: '3px',
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#0a4968",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
    </Card.ImgOverlay>

    
    </div>

    
  );
}

export default Board;
