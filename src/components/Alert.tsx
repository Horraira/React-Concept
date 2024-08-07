// interface is used to define the type of props that the component will receive from the parent component
// props is used to pass data from parent to child component

import { ReactNode } from "react"

interface Props {
    children: ReactNode // children is a default prop that is used to pass data from by the parent component
    onClose: () => void
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            {children}
            <button type="button" className="btn-close" data-dismiss="alert" onClick={onClose} aria-label="Close" />
        </div>
    )
}

export default Alert