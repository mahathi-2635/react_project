import React from 'react';
import appImage from './assets/Pic-2.png';
import docImage from './assets/Pic-3.png';
import creditImage from './assets/Pic-4.png';
import approvalImage from './assets/Pic-5.png';

const HowWeWork = () => {
  const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#1B424C',
    textAlign: 'center',
    marginBottom: '10px',
    marginLeft: '30px',
  };

  const descriptionStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'regular',
    fontSize: '18px',
    color: '#000',
    textAlign: 'center',
    marginBottom: '100px',
    marginLeft: '25px',
  };

  const stepsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  };

  const stepStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  };

  const reverseStepStyle = {
    flexDirection: 'row-reverse',
  };

  const imageStyle = {
    width: '280px',
    height: '220px',
  };

  const textContainerStyle = {
    maxWidth: '600px',
  };

  const stepTitleStyle = {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '33px',
    color: '#1B424C',
    marginBottom: '10px',
    textAlign: 'justify',
  };

  const stepDescriptionStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 'regular',
    fontSize: '18px',
    color: '#000',
    textAlign: 'justify',
    paddingLeft: '25px',
  };

  const applicationPadding = {
    paddingLeft: '30px',
  };

  return (
    <div id="how-we-work">
      <section style={sectionStyle}>
        <h2 style={titleStyle}>How we work?</h2>
        <p style={descriptionStyle}>This is a process, how you can get a loan for yourself.</p>
        <div style={stepsStyle}>
          <div style={{ ...stepStyle, ...applicationPadding }}>
            <img src={appImage} alt="Application" style={imageStyle} />
            <div style={textContainerStyle}>
              <h3 style={stepTitleStyle}>01. Application</h3>
              <p style={stepDescriptionStyle}>
                The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan.
              </p>
            </div>
          </div>
          <div style={{ ...stepStyle, ...reverseStepStyle }}>
            <div style={textContainerStyle}>
              <h3 style={stepTitleStyle}>02. Documentation and Verification</h3>
              <p style={stepDescriptionStyle}>
                The borrower submits necessary documentation for verification, including proof of income, identity, and other relevant documents. The bank verifies the authenticity and accuracy of the provided information.
              </p>
            </div>
            <img src={docImage} alt="Documentation and Verification" style={imageStyle} />
          </div>
          <div style={{ ...stepStyle, ...applicationPadding }}>
            <img src={creditImage} alt="Credit Assessment" style={imageStyle} />
            <div style={textContainerStyle}>
              <h3 style={stepTitleStyle}>03. Credit Assessment</h3>
              <p style={stepDescriptionStyle}>
                The bank conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors.
              </p>
            </div>
          </div>
          <div style={{ ...stepStyle, ...reverseStepStyle }}>
            <div style={textContainerStyle}>
              <h3 style={stepTitleStyle}>04. Loan Approval</h3>
              <p style={stepDescriptionStyle}>
                Upon successful verification and credit assessment, the bank approves the loan. The borrower is then informed about the loan approval, along with the terms and conditions of the loan.
              </p>
            </div>
            <img src={approvalImage} alt="Loan Approval" style={imageStyle} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
