import React, { useEffect, useState } from 'react';

import Row from './Row';
import Search from './Search';
import Pagination from './Pagination';

const DataTable = ({ usersData, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState(usersData);
  const [pagination, setPagination] = useState(true);

  const numberOfPages = () => Math.ceil(usersData.length / rowsPerPage);

  //search event hander
  const handleSearchInput = (e) => {
    const query = e.target.value;
    if (!query) setPagination(true);
    setPagination(false);

    const filteredData = usersData.filter((userData) => {
      return (
        userData.name1.toLowerCase().search(query.toLowerCase()) > -1 ||
        userData.email.toLowerCase().search(query.toLowerCase()) > -1
      );
    });
    if (filteredData) setUsers(filteredData);
  };

  //Get users in current page
  const getCurrentPageData = () => {
    const indexOfLastRecord = currentPage * rowsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - rowsPerPage;
    const currentData = usersData.slice(indexOfFirstRecord, indexOfLastRecord);
    setUsers(currentData);
  };

  useEffect(() => {
    getCurrentPageData();
  }, [currentPage,rowsPerPage]);

  const noUserDataError = 'There is no user to display!..';

  return (
    <div>
      <Search handleSearchInput={handleSearchInput} />
      {users.length > 0 ? (
        <table>
          <tbody>
            {users.map((userData) => (
              <Row key={userData.per_id} userData={userData} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>{noUserDataError}</div>
      )}

      {pagination ? (
        <Pagination
          numberOfPages={numberOfPages()}
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
