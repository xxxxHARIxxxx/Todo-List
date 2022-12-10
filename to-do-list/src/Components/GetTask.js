import React from "react";
import Card from "./Card";
import { CardContext } from "./CardContext";

export default function GetTask() {
    const [card,setCard] = React.useContext(CardContext)
  const [taskData, setTaskDate] = React.useState({
    heading: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskDate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function setData(){
    setCard(prevState => [...prevState,taskData])
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTaskDate({
      heading: "",
      description: "",
      startDate: "",
      endDate: "",
    })
  }

  return (
    <div className="get-task--container col-md-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-heading" className="task-heading label">
          Task Heading : 
        </label>
        <input
          id="task-heading"
          type="text"
          name="heading"
          className="get-task--input-heading"
          value={taskData.heading}
          onChange={handleChange}
          // required
        />
        <label htmlFor="task-desc" className="task-desc label">
          Task Description : 
        </label>
        <textarea
          type="textarea"
          id="task-desc"
          name="description"
          className="get-task--input-description"
          value={taskData.description}
          onChange={handleChange}
          // required
        />

        <label htmlFor="start-date" className="start-date label">
          Start Date : 
        </label>
        <input
          type="date"
          id="start-date"
          name="startDate"
          className="get-task--start-date"
          value={taskData.startDate}
          onChange={handleChange}
          // required
        />

        <label htmlFor="end-date" className="end-date label">
          End Date :
        </label>
        <input
          type="date"
          id="end-date"
          name="endDate"
          className="get-task--end-date"
          value={taskData.endDate}
          onChange={handleChange}
          // required
        />
        <button className="btn get-task--submit" onClick={setData}>submit</button>
      </form>
    </div>
  );
}
