import React from "react";

const Section = ({ users }) => {
  return (
    <div className="section">
      <table style={{ width: "500px" }} className="table">
        <tr style={{ textAlign: "center" }} className="table-header">
          <td>
            <strong> name </strong>
          </td>
          <td>
            <strong> surname </strong>
          </td>
          <td>
            <strong> age </strong>
          </td>
          <td>
            <strong> number </strong>
          </td>
        </tr>
        {users.map(item => (
          <tr className="table-content">
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>{item.number}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Section;
