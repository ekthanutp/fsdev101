import React, { useEffect, useState } from 'react';

const ActorList = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5050/api/actors')
      .then(res => res.json())
      .then(data => {
        setActors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching actors:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading actors...</p>;

  return (
    <div>
      <h2>Actor List</h2>
      <ul>
        {actors.map(actor => (
          <li key={actor.actor_id}>
            {actor.first_name} {actor.last_name} ({actor.nationality}) - {actor.birth_date}
            {actor.is_active !== null ? (actor.is_active ? 'Active' : 'Inactive') : 'Not Set'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorList;
