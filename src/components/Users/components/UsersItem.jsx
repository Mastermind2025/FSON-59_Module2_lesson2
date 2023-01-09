import { PropTypes } from 'prop-types';

export const UsersItem = ({ user, onDelete }) => {
  const { id, name, email, bio, skills, isOpenToWork } = user;
 
  // Метод handleDelete удаляет одного usera
    const handleDelete = () => {
      //выводим id удаляемого usera
      console.log(id);
      onDelete(id);
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title d-flex">
          {name}
          {isOpenToWork && (
            <p className="badge bg-success ms-3">Open to work</p>
          )}
        </h5>

        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <p className="card-text">{bio}</p>

        <div className="d-flex mb-2">
          {skills.map(skil => (
            <span key={skil} className="badge bg-dark me-1">
              {skil}
            </span>
          ))}
        </div>

              <div className="d-flex">
                  
{/* //Кнопка. Удалем usera нажатием delete                 */}
          <button
            type="button"
                      className="card-link btn-link"
 // Метод handleDelete удаляет одного usera                     
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired),
    isOpenToWork: PropTypes.bool.isRequired,
  }).isRequired,
};