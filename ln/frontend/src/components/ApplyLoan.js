import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ApplyLoan = () => {
  const [completedSteps, setCompletedSteps] = useState({
    personalInfo: false,
    professionalInfo: false,
    currentLoansAssets: false,
    bankDetails: false,
    kycDocuments: false,
    loanAmount: false,
    loanAgreement: false,
  });

  const handleCompleteStep = (step) => {
    setCompletedSteps((prevSteps) => ({
      ...prevSteps,
      [step]: true,
    }));
  };

  return (
    <PageContainer>
      <Container>
        <h2>Apply for Loan</h2>
        <ButtonGroup>
          <StyledLink
            to="/personal-info"
            onClick={() => handleCompleteStep('personalInfo')}
          >
            Personal Information
          </StyledLink>
          <StyledLink
            to="/professional-info"
            onClick={() => handleCompleteStep('professionalInfo')}
            disabled={!completedSteps.personalInfo}
          >
            Professional Information
          </StyledLink>
          <StyledLink
            to="/current-loans-assets"
            onClick={() => handleCompleteStep('currentLoansAssets')}
            disabled={!completedSteps.professionalInfo}
          >
            Current Loans & Assets
          </StyledLink>
          <StyledLink
            to="/bank-details"
            onClick={() => handleCompleteStep('bankDetails')}
            disabled={!completedSteps.currentLoansAssets}
          >
            Bank Details
          </StyledLink>
          <StyledLink
            to="/kyc-documents"
            onClick={() => handleCompleteStep('kycDocuments')}
            disabled={!completedSteps.bankDetails}
          >
            KYC Documents
          </StyledLink>
          <StyledLink
            to="/loan-amount"
            onClick={() => handleCompleteStep('loanAmount')}
            disabled={!completedSteps.kycDocuments}
          >
            Loan Amount
          </StyledLink>
          <StyledLink
            to="/loan-agreement"
            onClick={() => handleCompleteStep('loanAgreement')}
            disabled={!completedSteps.loanAmount}
          >
            Loan Agreement
          </StyledLink>
        </ButtonGroup>
      </Container>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e8f6eb; /* Same background color as Login component */
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  background: ${({ disabled }) => (disabled ? '#ccc' : '#1B424C')};
  color: ${({ disabled }) => (disabled ? 'black' : 'white')};
  padding: 12px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &:hover {
    background: ${({ disabled }) => (disabled ? '#ccc' : '#e8f6eb')};
    color: ${({ disabled }) => (disabled ? 'black' : '#1B424C')};
  }
`;

export default ApplyLoan;
