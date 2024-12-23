import Navbar from "@/components/navbar";

export default function Projects() {

    return(
        <div>
            <Navbar />
            <div className="container">
                <div className="text-container">
                    <div className="text">
                        <h2>Projects</h2>
                        <div>
                            <h3>Midnight</h3>
                            <p>A web app for sharing information about books with others</p>
                        </div>
                        <div>
                            <h3>PAN Database</h3>
                            <p>A healthcare database built with Java and MySQL for a class project</p>
                        </div>
                        <div>
                            <h3>KYPer</h3>
                            <p>A fullstack web application for discovering products in your local area</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}