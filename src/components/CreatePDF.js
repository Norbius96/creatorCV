import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const CreatePDF = () => {
    const doc = new jsPDF();
    html2canvas(document.getElementById("myCV")).then(function (canvas) {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        doc.addImage(imgData, 0, 0, 220, 200);
        var string = doc.output('datauristring');
        var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
    });
}