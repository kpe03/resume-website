import Navbar from "@/components/navbar";
import Image from 'next/image';
import email_png from '../../../public/email.png';
import github from '../../../public/github.png';
import linkedin from '../../../public/linkedin.png';
import picture from '../../../public/self_picture.jpg';

export default function Home() {

    const helloMessage = 'My name is Kaitlyn,\n' +
                    'I am a senior computer science student at the University of Oklahoma';
    const aboutMessage = 'I’m a software engineer with interests in web dev and machine learning.'

    const email = 'kaitlynrpeters@gmail.com';

    return(
        <div>
            <Navbar />
            <div className="container">
                {/* about me and picture */}
                <div className="about-container">
                    <div className="text-container">
                        <div className="text">
                            <h2>Hello </h2>
                            <p>{helloMessage}</p>
                            <p>{aboutMessage}</p>
                            <i>Note: this website is still under construction!</i>
                        </div>
                    </div>
                    <div className="picture">
                        <Image src={picture} alt="me" height={200} width={200}/>
                    </div>
                </div>
               
                <div className="text-container">
                    <div className="text">
                        <h2>Contact me</h2>
                        <div className="links-container">
                            <a href={`mailto:${email}`}>
                                <Image src={email_png} alt="Email" height={30} width={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/kpe03/">
                                <Image src={linkedin} alt="LinkedIn" height={30} weight={30}/>
                            </a>
                            <a href="https://github.com/kpe03">
                                <Image src={github}  alt="GitHub" height={30} weight={30}/>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      
    );
    
}