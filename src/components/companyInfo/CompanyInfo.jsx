import React from 'react'
import companyData from "../../data/companyInfo.json"
import { Highlight,HighlightContainer } from './companyInfo-style';

const CompanyInfo = () => {
    const {info} = companyData;
  return (
    <HighlightContainer>
       {info.map((val) => ( <Highlight key={val.id} >
           <h2>{val.value}</h2>
           <p>{val.title}</p>
       </Highlight>))}
    </HighlightContainer>
  )
}

export default CompanyInfo