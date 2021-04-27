
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArgoMembers from './ArgoMembers'

function ArgoList() {
  const [argo, setArgo] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/argo/membre')
      .then(res => res.data)
      .then(res => setArgo(res))
      .catch(e => {
        console.error(e);
        alert(`Erreur rencontrée lors de la récupération des membres d'équipage ${e.message}`);
      });
  }, []);

  return (
    <div className="ArgoList">
        <h3>Membres de l'équipage</h3>
      {argo.map(member => {
        return <ArgoMembers member={member} key={member.id} />;
      })}
    </div>
  );
}

export default ArgoList;