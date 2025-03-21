const users = [
  { id: 1, name: "Lucas", active: true },
  { id: 2, name: "Ana", active: false },
  { id: 3, name: "Pedro", active: true },
];

function ActiveUsers() {
  const activeUsers = users.filter(user => user.active);

  return (
    <ul>
      {activeUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return <ActiveUsers />;
}
