import { Spinner } from 'react-bootstrap'


const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'70vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        
          <Spinner animation="grow" variant="info" />
    </div>
  )
}

export default LoaderComponent