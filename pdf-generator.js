/**
 * YoungLife Expense Report Generator - PDF Generation
 * @description PDF generation module with YoungLife branding and professional formatting
 * @author Santiago
 * @version 2.3
 * @license MIT
 * @modified 2025-10-08
 */

/**
 * Generates a professionally formatted PDF expense report
 * @author Santiago
 * @description Creates a comprehensive PDF document with YoungLife branding, two expense tables (General + KM), and receipt images
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
    const area = userProfile.area || 'Area';
    const date = new Date().toISOString().split('T')[0];
    const filename = `${name}-${area}-${expenseWord}-${date}.pdf`;

    let yPosition = 20;

    try {
        const logoUrl = 'https://cdn.brandfetch.io/iduNJ0NPLd/w/820/h/546/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1756789920804';
        doc.addImage(logoUrl, 'PNG', 15, yPosition, 70, 35);
        yPosition += 40;
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
    doc.text('Nota de Gastos YL - España', 15, yPosition);
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
    if (userProfile.iban) {
        doc.text(`IBAN: ${userProfile.iban}`, 15, yPosition);
        yPosition += 6;
    }
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 15, yPosition);
    yPosition += 12;

    const expensesTotal = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
    const kmTotal = kmExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
    const grandTotal = expensesTotal + kmTotal;

    if (expenses.length > 0) {
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0, 58, 91);
        doc.text('General Expenses', 15, yPosition);
        yPosition += 8;

        // Header: Area | Description | Reason | Amount
        doc.setFillColor(0, 58, 91);
        doc.rect(15, yPosition, 180, 12, 'FD');
        doc.setDrawColor(0, 58, 91);
        doc.setLineWidth(0.5);

        doc.line(40, yPosition, 40, yPosition + 12);
        doc.line(95, yPosition, 95, yPosition + 12);
        doc.line(150, yPosition, 150, yPosition + 12);

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.setFont(undefined, 'bold');
        doc.text('Area', 23, yPosition + 8);
        doc.text('Description', 58, yPosition + 8);
        doc.text('Reason', 115, yPosition + 8);
        doc.text('Amount (€)', 162, yPosition + 8);
        yPosition += 12;

        doc.setTextColor(81, 81, 81);
        doc.setFont(undefined, 'normal');
        doc.setDrawColor(200, 200, 200);

        expenses.forEach((expense, index) => {
            if (yPosition > 245) {
                doc.addPage();
                yPosition = 20;

                doc.setFillColor(0, 58, 91);
                doc.rect(15, yPosition, 180, 12, 'FD');
                doc.setDrawColor(0, 58, 91);
                doc.line(40, yPosition, 40, yPosition + 12);
                doc.line(95, yPosition, 95, yPosition + 12);
                doc.line(150, yPosition, 150, yPosition + 12);

                doc.setTextColor(255, 255, 255);
                doc.setFontSize(9);
                doc.setFont(undefined, 'bold');
                doc.text('Area', 23, yPosition + 8);
                doc.text('Description', 58, yPosition + 8);
                doc.text('Reason', 115, yPosition + 8);
                doc.text('Amount (€)', 162, yPosition + 8);
                yPosition += 12;
                doc.setTextColor(81, 81, 81);
                doc.setFont(undefined, 'normal');
                doc.setDrawColor(200, 200, 200);
            }

            // Use splitTextToSize to wrap text
            doc.setFontSize(8);
            const descText = doc.splitTextToSize(expense.description || '', 50);
            const reasonText = doc.splitTextToSize(expense.reason || '', 53);

            // Calculate row height based on max lines
            const maxLines = Math.max(descText.length, reasonText.length, 1);
            const rowHeight = Math.max(10, 5 + (maxLines * 4));

            if (index % 2 === 0) {
                doc.setFillColor(248, 249, 250);
                doc.rect(15, yPosition, 180, rowHeight, 'F');
            }

            doc.rect(15, yPosition, 180, rowHeight, 'S');
            doc.line(40, yPosition, 40, yPosition + rowHeight);
            doc.line(95, yPosition, 95, yPosition + rowHeight);
            doc.line(150, yPosition, 150, yPosition + rowHeight);

            doc.text(userProfile.area || '', 18, yPosition + 6);
            doc.text(descText, 43, yPosition + 6);
            doc.text(reasonText, 98, yPosition + 6);

            doc.setFont(undefined, 'bold');
            doc.setFontSize(10);
            doc.text(parseFloat(expense.amount).toFixed(2) + '€', 160, yPosition + (rowHeight / 2) + 2);
            doc.setFont(undefined, 'normal');

            yPosition += rowHeight;
        });

        yPosition += 3;
        doc.setFillColor(0, 58, 91);
        doc.setDrawColor(0, 58, 91);
        doc.setLineWidth(1);
        doc.rect(15, yPosition, 180, 12, 'FD');

        doc.setFont(undefined, 'bold');
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        doc.text('Subtotal:', 130, yPosition + 8);
        doc.text(`${expensesTotal.toFixed(2)}€`, 165, yPosition + 8);
        yPosition += 18;
    }

    if (kmExpenses.length > 0) {
        if (yPosition > 190) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0, 58, 91);
        doc.text('Kilometer Expenses', 15, yPosition);
        yPosition += 8;

        // Header: Area | Description | Reason | KM | Amount
        doc.setFillColor(0, 58, 91);
        doc.rect(15, yPosition, 180, 12, 'FD');
        doc.setDrawColor(0, 58, 91);
        doc.setLineWidth(0.5);

        doc.line(35, yPosition, 35, yPosition + 12);
        doc.line(75, yPosition, 75, yPosition + 12);
        doc.line(125, yPosition, 125, yPosition + 12);
        doc.line(150, yPosition, 150, yPosition + 12);

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.setFont(undefined, 'bold');
        doc.text('Area', 22, yPosition + 8);
        doc.text('Description', 48, yPosition + 8);
        doc.text('Reason', 92, yPosition + 8);
        doc.text('KM', 135, yPosition + 8);
        doc.text('Amount (€)', 162, yPosition + 8);
        yPosition += 12;

        doc.setTextColor(81, 81, 81);
        doc.setFont(undefined, 'normal');
        doc.setDrawColor(200, 200, 200);

        kmExpenses.forEach((km, index) => {
            if (yPosition > 245) {
                doc.addPage();
                yPosition = 20;

                doc.setFillColor(0, 58, 91);
                doc.rect(15, yPosition, 180, 12, 'FD');
                doc.setDrawColor(0, 58, 91);
                doc.line(35, yPosition, 35, yPosition + 12);
                doc.line(75, yPosition, 75, yPosition + 12);
                doc.line(125, yPosition, 125, yPosition + 12);
                doc.line(150, yPosition, 150, yPosition + 12);

                doc.setTextColor(255, 255, 255);
                doc.setFontSize(8);
                doc.setFont(undefined, 'bold');
                doc.text('Area', 22, yPosition + 8);
                doc.text('Description', 48, yPosition + 8);
                doc.text('Reason', 92, yPosition + 8);
                doc.text('KM', 135, yPosition + 8);
                doc.text('Amount (€)', 162, yPosition + 8);
                yPosition += 12;
                doc.setTextColor(81, 81, 81);
                doc.setFont(undefined, 'normal');
                doc.setDrawColor(200, 200, 200);
            }

            // Use splitTextToSize to wrap text
            doc.setFontSize(8);
            const descText = doc.splitTextToSize(km.description || '', 35);
            const reasonText = doc.splitTextToSize(km.reason || '', 48);

            // Calculate row height based on max lines
            const maxLines = Math.max(descText.length, reasonText.length, 1);
            const rowHeight = Math.max(10, 5 + (maxLines * 4));

            if (index % 2 === 0) {
                doc.setFillColor(248, 249, 250);
                doc.rect(15, yPosition, 180, rowHeight, 'F');
            }

            doc.rect(15, yPosition, 180, rowHeight, 'S');
            doc.line(35, yPosition, 35, yPosition + rowHeight);
            doc.line(75, yPosition, 75, yPosition + rowHeight);
            doc.line(125, yPosition, 125, yPosition + rowHeight);
            doc.line(150, yPosition, 150, yPosition + rowHeight);

            doc.text(userProfile.area || '', 18, yPosition + 6);
            doc.text(descText, 37, yPosition + 6);
            doc.text(reasonText, 77, yPosition + 6);

            doc.setTextColor(145, 200, 62);
            doc.setFont(undefined, 'bold');
            doc.text(`${km.kilometers}`, 130, yPosition + (rowHeight / 2) + 1);
            doc.setTextColor(81, 81, 81);

            doc.setFontSize(9);
            doc.text(parseFloat(km.amount).toFixed(2) + '€', 160, yPosition + (rowHeight / 2) + 1);
            doc.setFont(undefined, 'normal');

            yPosition += rowHeight;
        });

        yPosition += 3;
        doc.setFillColor(0, 58, 91);
        doc.setDrawColor(0, 58, 91);
        doc.setLineWidth(1);
        doc.rect(15, yPosition, 180, 12, 'FD');

        doc.setFont(undefined, 'bold');
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        doc.text('Subtotal:', 130, yPosition + 8);
        doc.text(`${kmTotal.toFixed(2)}€`, 165, yPosition + 8);
        yPosition += 18;
    }

    yPosition += 3;
    doc.setFillColor(145, 200, 62);
    doc.setDrawColor(122, 176, 46);
    doc.setLineWidth(1);
    doc.rect(15, yPosition, 180, 16, 'FD');

    doc.setFont(undefined, 'bold');
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text('GRAND TOTAL:', 120, yPosition + 11);
    doc.setFontSize(16);
    doc.text(`${grandTotal.toFixed(2)}€`, 165, yPosition + 11);
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
        doc.text(`Generated with YoungLife Expense Generator v2.3 - Page ${i} of ${pageCount}`, 15, 285);
    }

    doc.save(filename);
}
