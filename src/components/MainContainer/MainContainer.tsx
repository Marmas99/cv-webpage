import './MainContainer.css'
import MenyContainer from '../MenyContainer/MenyContainer'
import ContentContainer from '../ContentContainer/ContentContainer'

export default function MainContainer() {
  return (
    <div className='container-fluid full-height-container bg-primary'>
        <MenyContainer />
        <ContentContainer />
    </div>
  )
}
