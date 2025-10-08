/**
 * YoungLife Expense Report Generator - PDF Generation
 * @description PDF generation module with YoungLife branding and professional formatting
 * @author Santiago
 * @version 2.2
 * @license MIT
 * @modified 2025-10-08
 */

/**
 * Generates a professionally formatted PDF expense report
 * @author Santiago
 * @description Creates a comprehensive PDF document with YoungLife branding, expense tables, and receipt images
 * @returns {void}
 * @example
 * generatePDF();
 */
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const lang = currentLanguage;
    const expenseWord = lang === 'es' ? 'gastos' : lang === 'ca' ? 'despeses' : 'expenses';

    const name = userProfile.name.replace(/\s+/g, '-') || 'User';
    const area = userProfile.area.replace(/\s+/g, '-') || 'Area';
    const date = new Date().toISOString().split('T')[0];
    const filename = `${name}-${area}-${expenseWord}-${date}.pdf`;

    let yPosition = 20;

    try {
        const logoUrl = 'https://cdn.brandfetch.io/iduNJ0NPLd/w/820/h/546/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1756789920804';
        doc.addImage(logoUrl, 'PNG', 15, yPosition, 60, 20);
        yPosition += 25;
    } catch (error) {
        console.error('Error loading logo:', error);
        doc.setFontSize(24);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0, 58, 91);
        doc.text('Young', 15, yPosition);
        doc.setTextColor(145, 200, 62);
        doc.text('Life', 55, yPosition);
        doc.setFillColor(145, 200, 62);
        doc.rect(13, yPosition - 6, 3, 3, 'F');
        yPosition += 12;
    }

    doc.setFontSize(22);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 58, 91);
    doc.text('YoungLife Expense Report', 15, yPosition);
    yPosition += 10;

    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(81, 81, 81);
    if (userProfile.name) {
        doc.text(`Name: ${userProfile.name}`, 15, yPosition);
        yPosition += 6;
    }
    if (userProfile.area) {
        doc.text(`Area: ${userProfile.area}`, 15, yPosition);
        yPosition += 6;
    }
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 15, yPosition);
    yPosition += 12;

    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 58, 91);
    doc.text('Expenses Summary', 15, yPosition);
    yPosition += 8;

    doc.setFillColor(0, 58, 91);
    doc.rect(15, yPosition, 180, 12, 'FD');
    doc.setDrawColor(0, 58, 91);
    doc.setLineWidth(0.5);

    doc.line(45, yPosition, 45, yPosition + 12);
    doc.line(115, yPosition, 115, yPosition + 12);
    doc.line(155, yPosition, 155, yPosition + 12);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Date', 22, yPosition + 8);
    doc.text('Description', 60, yPosition + 8);
    doc.text('Details', 125, yPosition + 8);
    doc.text('Amount (€)', 165, yPosition + 8);
    yPosition += 12;

    doc.setTextColor(81, 81, 81);
    doc.setFont(undefined, 'normal');
    doc.setDrawColor(200, 200, 200);

    expenses.forEach((expense, index) => {
        if (yPosition > 255) {
            doc.addPage();
            yPosition = 20;

            doc.setFillColor(0, 58, 91);
            doc.rect(15, yPosition, 180, 12, 'FD');
            doc.setDrawColor(0, 58, 91);
            doc.line(45, yPosition, 45, yPosition + 12);
            doc.line(115, yPosition, 115, yPosition + 12);
            doc.line(155, yPosition, 155, yPosition + 12);

            doc.setTextColor(255, 255, 255);
            doc.setFontSize(10);
            doc.setFont(undefined, 'bold');
            doc.text('Date', 22, yPosition + 8);
            doc.text('Description', 60, yPosition + 8);
            doc.text('Details', 125, yPosition + 8);
            doc.text('Amount (€)', 165, yPosition + 8);
            yPosition += 12;
            doc.setTextColor(81, 81, 81);
            doc.setFont(undefined, 'normal');
            doc.setDrawColor(200, 200, 200);
        }

        const rowHeight = 11;

        if (index % 2 === 0) {
            doc.setFillColor(248, 249, 250);
            doc.rect(15, yPosition, 180, rowHeight, 'F');
        }

        doc.rect(15, yPosition, 180, rowHeight, 'S');
        doc.line(45, yPosition, 45, yPosition + rowHeight);
        doc.line(115, yPosition, 115, yPosition + rowHeight);
        doc.line(155, yPosition, 155, yPosition + rowHeight);

        const expenseDate = new Date(expense.date).toLocaleDateString();
        let descText = expense.description;

        if (descText.length > 28) {
            descText = descText.substring(0, 25) + '...';
        }

        doc.setFontSize(9);
        doc.text(expenseDate, 17, yPosition + 7);
        doc.text(descText, 47, yPosition + 7);

        if (expense.kilometers) {
            doc.setTextColor(145, 200, 62);
            doc.setFont(undefined, 'bold');
            doc.text(`${expense.kilometers} km`, 117, yPosition + 7);
            doc.setTextColor(81, 81, 81);
            doc.setFont(undefined, 'normal');
        } else {
            doc.text('-', 117, yPosition + 7);
        }

        doc.setFont(undefined, 'bold');
        doc.setFontSize(10);
        doc.text(parseFloat(expense.amount).toFixed(2) + '€', 165, yPosition + 7);
        doc.setFont(undefined, 'normal');

        yPosition += rowHeight;
    });

    yPosition += 3;
    doc.setFillColor(145, 200, 62);
    doc.setDrawColor(122, 176, 46);
    doc.setLineWidth(1);
    doc.rect(15, yPosition, 180, 16, 'FD');

    doc.setFont(undefined, 'bold');
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
    doc.text('TOTAL:', 130, yPosition + 11);
    doc.setFontSize(16);
    doc.text(`${total.toFixed(2)}€`, 165, yPosition + 11);
    yPosition += 22;

    if (receipts.length > 0) {
        doc.addPage();
        yPosition = 20;

        doc.setFillColor(0, 58, 91);
        doc.rect(15, yPosition, 180, 10, 'F');
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('Receipt Images', 20, yPosition + 7);
        yPosition += 15;

        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(81, 81, 81);

        receipts.forEach((receipt, index) => {
            if (index > 0 && index % 2 === 0) {
                doc.addPage();
                yPosition = 20;
            }

            const isFirstOnPage = index % 2 === 0;
            if (!isFirstOnPage) {
                yPosition = 155;
            }

            doc.setFillColor(248, 249, 250);
            doc.rect(15, yPosition, 180, 8, 'F');
            doc.setDrawColor(200, 200, 200);
            doc.rect(15, yPosition, 180, 8, 'S');

            doc.setFont(undefined, 'bold');
            doc.setFontSize(10);
            doc.setTextColor(0, 58, 91);
            doc.text(`Receipt ${index + 1}`, 20, yPosition + 5);
            yPosition += 10;
            doc.setFont(undefined, 'normal');
            doc.setTextColor(81, 81, 81);

            try {
                const imgWidth = 170;
                const imgHeight = 100;

                doc.setDrawColor(0, 58, 91);
                doc.setLineWidth(0.5);
                doc.rect(20, yPosition, imgWidth, imgHeight, 'S');

                doc.addImage(receipt, 'JPEG', 20, yPosition, imgWidth, imgHeight);

                if (isFirstOnPage) {
                    yPosition += imgHeight + 15;
                }
            } catch (error) {
                console.error('Error adding receipt image:', error);
                doc.setTextColor(239, 68, 68);
                doc.text('Error loading receipt image', 25, yPosition + 10);
                doc.setTextColor(81, 81, 81);
            }
        });
    }

    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(153, 153, 153);
        doc.setFont(undefined, 'normal');
        doc.text(`Generated with YoungLife Expense Generator v2.0 - Page ${i} of ${pageCount}`, 15, 285);
        doc.text('Developed by Santiago', 165, 285);
    }

    doc.save(filename);
}
