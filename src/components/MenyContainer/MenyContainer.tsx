import './MenyContainer.css';


export default function MenyContainer() {
  return (
    <div className="container meny-container-size bg-success">
        <div className="row">
           <h1 className="display-1 text-center">Markus Masalkovski</h1>
        </div>
        <div className='row'>
            <div className='col d-flex justify-content-center'>
                <div className='d-inline-block'>
                    <p>column 1</p> 
                </div>
            </div>
            <div className='col d-flex justify-content-center'>
                <div className='d-inline-block'>
                    <p>column 2</p> 
                </div>
            </div>
            <div className='col d-flex justify-content-center'>
                <div className='d-inline-block'>
                    <p>column 3</p>
                </div>
            </div>
        </div>
    </div>
  )
}