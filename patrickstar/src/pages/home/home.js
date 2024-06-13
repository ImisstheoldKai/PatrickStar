import '../home/home.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
function App(){
    return (
        <Container>
            <div className='bg'>
             <div className='content'>
                <p className='classicLines'>“Is mayonnaise an instrument?”</p>
                <p className='title'>Patrick Star</p>
                <div className='avatar'>
                    <img src='https://picture.zeabur.app/pdx.jpg'></img>
                </div>
                <p>Patrick Star (born August 17) is one of the ten main characters of the animated series SpongeBob SquarePants,[16] and the main character of his own spin-off, The Patrick Star Show. He is SpongeBob's best friend as well as one of his two neighbors.

He is a naïve and overweight pink sea star. He is voiced by Bill Fagerbakke and first appears in "Help Wanted."

He lives under a rock in the underwater city of Bikini Bottom. SpongeBob and Squidward are his two neighbors, and, when viewed on the front side, are to the right of his residence.

He and SpongeBob both tend to bother Squidward, though they do it unknowingly and have good intentions. In the original series, Patrick is the son of Herb and Margie Star and the brother of Sam Star. In The Patrick Star Show, Patrick has a different family: parents Cecil and Bunny, grandfather GrandPat, and sister Squidina.</p>
             </div>
            </div>

        </Container>
    )
}
export default App