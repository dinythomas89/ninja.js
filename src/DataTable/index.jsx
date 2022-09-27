import React, { useEffect, useState } from 'react';

import Row from './Row';
import Search from './Search';
import Pagination from './Pagination';

const DataTable = ({ usersData, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState(usersData);
  const [pagination, setPagination] = useState(true);

  const numberOfPages = Math.ceil(usersData.length / rowsPerPage);

  const handleSearchInput = (e) => {
    const query = e.target.value;
    console.log(query);
    if (query === '') setPagination(true);
    setPagination(false);
    const filteredData = usersData.filter((userData) => {
      return (
        userData.name1.toLowerCase().search(query.toLowerCase()) > -1 ||
        userData.email.toLowerCase().search(query.toLowerCase()) > -1
      );
    });
    setUsers(filteredData);
    //setCurrentPage(1);
  };

  //Get users in a page
  const indexOfLastRecord = currentPage * rowsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - rowsPerPage;
  const currentData = usersData.slice(indexOfFirstRecord, indexOfLastRecord);

  useEffect(() => {
    setUsers(currentData);
  }, [currentPage]);

  return (
    <div>
      <Search handleSearchInput={handleSearchInput} />
      <table>
        <tbody>
          {users.map((userData) => (
            <Row key={userData.per_id} userData={userData} />
          ))}
        </tbody>
      </table>
      {pagination ? (
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default DataTable;
