import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setUser(res.data);
    };

    fetchUserDetail();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Detail</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt={user.name} />
    </div>
  );
};

export default UserDetail;
