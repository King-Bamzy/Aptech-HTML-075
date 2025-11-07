import React from 'react';
import './PricingTable.css';

const PricingTable = () => {
  const plans = [
    {
      name: "FREE",
      price: "$0",
      period: "/month",
      users: "Single User",
      storage: "5GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReports: "Monthly Status Reports",
      buttonText: "BUTTON",
      featured: false
    },
    {
      name: "PLUS",
      price: "$9",
      period: "/month",
      users: "5 Users",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReports: "Monthly Status Reports",
      buttonText: "BUTTON",
      featured: true
    },
    {
      name: "PRO",
      price: "$49",
      period: "/month",
      users: "Unlimited Users",
      storage: "150GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Unlimited Free Subdomains",
      statusReports: "Monthly Status Reports",
      buttonText: "BUTTON",
      featured: false
    }
  ];

  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`pricing-card ${plan.featured ? 'featured' : ''}`}
        >
          <h3 className="plan-name">{plan.name}</h3>
          <div className="plan-price">
            {plan.price}<span className="period">{plan.period}</span>
          </div>
          <ul className="plan-features">
            <li>{plan.users}</li>
            <li>{plan.storage}</li>
            <li>{plan.publicProjects}</li>
            <li>{plan.communityAccess}</li>
            <li>{plan.privateProjects}</li>
            <li>{plan.phoneSupport}</li>
            <li>{plan.subdomain}</li>
            <li>{plan.statusReports}</li>
          </ul>
          <button className="plan-button">{plan.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;