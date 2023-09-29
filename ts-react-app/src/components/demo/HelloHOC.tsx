import React from 'react'
import HelloClass from './HelloClass'

interface Loading {
    loading: boolean
}

function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
    return class extends React.Component<P & Loading> {
        render() {
            return this.props.loading 
                ? <div>loading...</div>
                : <WrappedComponent { ...this.props } />
        }
    }
}

// function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
//     return (props: P & Loading): React.JSX.Element => {
//         return props.loading
//             ? <div>loading...</div>
//             : <WrappedComponent { ...props } />
//     }
// }

export default HelloHOC(HelloClass)
