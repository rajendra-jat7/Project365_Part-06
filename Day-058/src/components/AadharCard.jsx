import Header from './Header';
import PropTypes from 'prop-types';
import '../App.css';

const generateRandomAadhaar = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join(
    ''
  );
};

const AadhaarCard = ({ name, dob, gender, image }) => { //issueDate
  const aadhaarNumber = generateRandomAadhaar();

  return (
    <div className='aadhaar-card'>
      <Header />

      <div className='card-body'>
        {/* <div className='issue-date'>Issue Date: {issueDate}</div> */}
        <img src={image} alt='Profile' className='profile-pic' />
        <div className='left-section'></div>

        <div className='right-section'>
          <p>
            <strong>{name}</strong>
          </p>
          <p>जन्म तिथि / DOB: {dob}</p>
          <p>
            {gender === 'Male'
              ? 'पुरुष / Male'
              : gender === 'Female'
              ? 'महिला / Female'
              : 'अन्य / Other'}
          </p>
        </div>
      </div>
      <h1 className='aadhaar-number'>
        {aadhaarNumber.replace(/(\d{4})/g, '$1 ')}
      </h1>
      <hr className='red-line' />
      <h2 className='footer'>मेरा <span>आधार</span>, मेरी पहचान</h2>
    </div>
  );
};

AadhaarCard.propTypes = {
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['Male', 'Female', 'Other']).isRequired,
  image: PropTypes.string.isRequired,
  issueDate: PropTypes.string.isRequired,
};

export default AadhaarCard;
