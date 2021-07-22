import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

function Client({ client }) {
  const [clientProjectList, setClientProjectList] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/clients/${client.id}`;
  useEffect(() => {
    axios.get(url)
      .then((response) => setClientProjectList(response.data));
  }, []);
  return (
    <div className="client-content">
      <h2>{client.name}</h2>
      {clientProjectList && clientProjectList.map(
        (clientProject) => (
          <>
            <Link to={`/projects#${clientProject.project_name}`}>{clientProject.project_name}</Link>
            <br />
          </>
        ),
      )}
    </div>
  );
}

Client.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Client.defaultProps = {
  client: undefined,
};

export default Client;
