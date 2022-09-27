import React from 'react';

const Row = ({ userData }) => {
  return (
    <tr>
      <td>
        <a href={userData.edit_path}>{userData.name1}</a>
        <br />
        <small>{userData.email}</small>
      </td>
    </tr>
  );
};

export default Row;
