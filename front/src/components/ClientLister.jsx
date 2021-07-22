import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Client from './Client';

function ClientLister() {
  const [clientList, setClientList] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/clients`;
  useEffect(() => {
    axios.get(url)
      .then((response) => (setClientList(response.data)));
  }, []);
  return (
    <>
      {clientList && clientList.map((client) => <Client key={client.id} client={client} />)}
    </>
  );
}

export default ClientLister;
