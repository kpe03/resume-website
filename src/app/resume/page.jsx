import ImagePreviewAndDownload from "@/components/downloadFile";
import Navbar from "@/components/navbar";
import {Document, Page, pdfjs} from 'react-pdf';

const PdfViewer = () => {
    const [file, setFile] = useState(null);
    return(
        <div>
            <Document file={ResumeDoc}/>
        </div>
    )
}
export default function Resume() {
    return(
        <div>
             <Navbar />
            <div className="container">
                <div className="text-container">
                    <div className="text">
                        <h2> Resume </h2>
                    </div>
                    <div className="resume-container">
                        <iframe src="https://drive.google.com/file/d/1l9f31i_YFsMnR8tbaqZb4z6Duhqzs37z/preview?usp=sharing"
                            />
                    </div>
                </div>
            </div>
        </div>
       
    );
}