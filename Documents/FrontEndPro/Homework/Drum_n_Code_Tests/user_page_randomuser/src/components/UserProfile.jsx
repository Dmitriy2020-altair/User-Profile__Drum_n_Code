import './UserProfile.scss';

const UserProfile = ({ user }) => {
  let {
    name,
    picture,
    nat,
    gender,
    location,
    cell,
    phone,
    email,
    dob,
    registered,
  } = user;

  return (
    <li className="user-profile">
      <img className="user-profile__avatar" src={picture.large} alt="user avatar" />
      <ul className="user-profile__info">
        <li>
          <span className="user-profile__title">Name:</span>
          <span className="user-profile__value">{ `${name.title}. ${name.first} ${name.last}` }</span>
        </li>
        <li>
          <span className="user-profile__title">Gender:</span>
          <span className="user-profile__value">{ gender }</span>
        </li>
        <li>
          <span className="user-profile__title">Nationality:</span>
          <span className="user-profile__value">{ nat }</span>
        </li>
        <li>
          <span className="user-profile__title">Location:</span>
          <span className="user-profile__value">{ `${location.country}, ${location.state} , ${location.city}` }</span>
        </li>
        <li>
          <span className="user-profile__title">Street:</span>
          <span className="user-profile__value">{ `${location.street.name}, apt.№${location.street.number}` }</span>
        </li>
        <li>
          <span className="user-profile__title">Phones:</span>
          <span className="user-profile__value">{ `Cell: ${cell}, Phone: ${phone}` }</span>
        </li>
        <li>
          <span className="user-profile__title">Email:</span>
          <span className="user-profile__value">{ email }</span>
        </li>
        <li>
          <span className="user-profile__title">Date of birth:</span>
          <span className="user-profile__value">{ new Date(dob.date).getFullYear()}</span>
        </li>
        <li>
          <span className="user-profile__title">Age:</span>
          <span className="user-profile__value">{ dob.age }</span>
        </li>
        <li>
          <span className="user-profile__title">Date of Registration:</span>
          <span className="user-profile__value">{ `${new Date(registered.date).getFullYear()}, sum of registered years: ${registered.age} ` }</span>
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
