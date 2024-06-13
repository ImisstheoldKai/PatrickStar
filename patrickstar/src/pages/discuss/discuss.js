import style from '../discuss/discuss.module.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
function App(){
    return (
        <Container>
            <div className={style.bg}>
             <div className={style.content}>
                <p className={style.title}>DiscussPage</p>
             </div>
            </div>

        </Container>
    )
}
export default App