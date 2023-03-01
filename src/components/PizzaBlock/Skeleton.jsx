import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="131" cy="129" r="125" />
        <circle cx="130" cy="74" r="22" />
        <rect x="0" y="273" rx="8" ry="8" width="280" height="21" />
        <rect x="-2" y="315" rx="10" ry="10" width="280" height="88" />
        <rect x="1" y="422" rx="9" ry="9" width="95" height="30" />
        <rect x="124" y="418" rx="22" ry="22" width="152" height="43" />
    </ContentLoader>
)

export default Skeleton
