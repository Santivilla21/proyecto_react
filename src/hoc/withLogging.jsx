import { useEffect } from "react"

const withLogging = (WrappedComponent) => {
    const ComponentWithLoggin = (props) =>{
        useEffect(()=>{
            
        },[])

        
        return <WrappedComponent {...props}/>
    }
    return ComponentWithLoggin
}

export default withLogging