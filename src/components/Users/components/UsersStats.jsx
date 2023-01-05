export const UsersStats = ({ users }) => {

//находим пользователй у которых isOpenToWork is true и опредеялем их колво (length)
  const openToWorkCount = users.filter(user => user.isOpenToWork).length;

  return (
    <>
          <p>Total: { users.length}</p>
      <p>Open to work: {openToWorkCount}</p>
    </>
  );
};