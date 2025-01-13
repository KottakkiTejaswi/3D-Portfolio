function ExperienceEducation() {
    return (

      <div className="page-front" >
        <h1 className="title">Experience</h1>
        <br></br>
        <div className="workedu-b1">
          <div className="workedu-box">
            <span className="year">
              <box-icon name="calendar" type="solid"></box-icon> Jul 2024 - Present
            </span>
            <h3>Software Development Engineer - JPMC</h3>
          </div>
          <div className="workedu-box">
            <span className="year">
              <box-icon name="calendar" type="solid"></box-icon> Jan 2024 - Jun 2024
            </span>
            <h3>Intern - JPMC</h3>
          </div>
        </div>
        <h1 className="title">Education</h1><br></br>
        <div className="workedu-b1">
          <div className="workedu-box">
            <span className="year">
              <box-icon name="calendar" type="solid"></box-icon> 2020 - 2024
            </span>
            <h3>Bachelor of Technology, Computer Science - KL University</h3>
          </div>
          <div className="workedu-box">
            <span className="year">
              <box-icon name="calendar" type="solid"></box-icon> 2018 - 2020
            </span>
            <h3>Intermediate, MPC - Sri Chaitanya Junior College</h3>
          </div>
          <div className="workedu-box">
            <span className="year">
              <box-icon name="calendar" type="solid"></box-icon> 2018
            </span>
            <h3>High School, 10th SSC - Sri Chaitanya School</h3>
          </div>
        </div>
        <span className='number-page'>1</span>
              <span className="nextprev-btn" data-page="turn-1">
                <box-icon name='chevron-right'></box-icon>
        </span>
              
      </div>
    );
  }
  
  export default ExperienceEducation;
  