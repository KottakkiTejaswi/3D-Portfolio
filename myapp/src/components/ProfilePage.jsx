import mee from '../mee.jpg';
import 'boxicons';

function ProfilePage() {
  return (
    <div className="profile-page">
      <img src={mee} alt="profile" />
      <h1>Tejaswi Kottakki</h1>
      <h3>Software Development Engineer</h3>
      <div className="social-media">
        <a href="#"><box-icon type="logo" name="gmail"></box-icon></a>
        <a href="#"><box-icon name="linkedin-square" type="logo"></box-icon></a>
        <a href="#"><box-icon name="github" type="logo"></box-icon></a>
      </div>
      <p>
        I’m Tejaswi Kottakki, a Software Development Engineer with a degree in Computer Science. 
        Currently navigating the corporate world, I’m learning and contributing to impactful projects. 
        I’m passionate about building projects that allow me to explore creativity, bring my ideas to life, 
        and deepen my skills.
      </p>
      <div className="btn-box">
        <a href="#" className="btn">Download Resume</a>
      </div>
    </div>
  );
}

export default ProfilePage;
