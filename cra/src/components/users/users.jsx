import React from "react";

const users = () => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = useState(null);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user) => user.name)))
      .catch(() => setError("Error fetching users"));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default users;
