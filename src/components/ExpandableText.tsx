import React from 'react'

interface ExpandableTextProps {
    children: string,
    maxChars?: number
}

const ExpandableText = ({ children, maxChars = 10 }: ExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    if (children.length <= maxChars) return <p>{children}</p>
    // substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
    const visibleText = isExpanded ? children : children.substring(0, maxChars)
    return (
        <div>
            <p>{visibleText}...</p>
            <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button>
        </div>
    )
}

export default ExpandableText