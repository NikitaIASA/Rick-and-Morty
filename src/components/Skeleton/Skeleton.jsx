import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={319}
    viewBox="0 0 240 319"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="0" rx="0" ry="0" width="240" height="240" /> 
    <rect x="11" y="252" rx="0" ry="0" width="212" height="17" /> 
    <rect x="12" y="278" rx="0" ry="0" width="122" height="17" />
  </ContentLoader>
)

export default MyLoader