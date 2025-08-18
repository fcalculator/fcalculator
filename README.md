+save as pdf javascript za auto loan 

   function saveAsPDF() {
            if (!amortizationData.length) {
                alert('Please calculate the loan first!');
                return;
            }
            try {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                doc.setFontSize(14);
                doc.text("Auto Loan Calculation Results", 105, 15, { align: "center" });
                doc.autoTable({
                    startY: 20,
                    head: [['Parameter', 'Value']],
                    body: [
                        ['Monthly Payment', monthlyPaymentValue],
                        ['Total Payments', totalPaymentsValue],
                        ['Total Interest', totalInterestValue],
                        ['Payoff Date', payoffDateValue]
                    ],
                    theme: 'grid',
                    headStyles: { fillColor: [0, 200, 200], textColor: [255, 255, 255] },
                    alternateRowStyles: { fillColor: [245, 245, 245] },
                    styles: { lineColor: [200, 200, 200], lineWidth: 0.1, font: 'helvetica', cellPadding: 3, fontSize: 10, halign: 'left' },
                    margin: { top: 10 }
                });
                doc.autoTable({
                    startY: doc.lastAutoTable.finalY + 10,
                    head: [['Month', 'Payment', 'Principal', 'Interest', 'Balance']],
                    body: amortizationData,
                    theme: 'grid',
                    headStyles: { fillColor: [0, 200, 200], textColor: [255, 255, 255] },
                    alternateRowStyles: { fillColor: [245, 245, 245] },
                    styles: { lineColor: [200, 200, 200], lineWidth: 0.1, font: 'helvetica', cellPadding: 3, fontSize: 10, halign: 'left' },
                    didDrawPage: function (data) {
                        doc.setFontSize(10);
                        doc.setTextColor(100);
                        const footerText = 'This document was generated using Fcalculator.com – Calculations are provided “as is” without warranty. Use at your own risk.';
                        const pageWidth = doc.internal.pageSize.width;
                        const pageHeight = doc.internal.pageSize.height;
                        const y = pageHeight - 10;
                        const textWidth = doc.getTextWidth(footerText);
                        const startX = (pageWidth - textWidth) / 2;
                        const linkText = 'Fcalculator.com';
                        const linkStart = footerText.indexOf(linkText);
                        const beforeLink = footerText.substring(0, linkStart);
                        const afterLink = footerText.substring(linkStart + linkText.length);
                        const linkX = startX + doc.getTextWidth(beforeLink);
                        const afterX = linkX + doc.getTextWidth(linkText);
                        doc.text(beforeLink, startX, y);
                        doc.setTextColor(0, 0, 255); // Blue for link
                        doc.textWithLink(linkText, linkX, y, { url: 'https://fcalculator.com' });
                        doc.setTextColor(100); // Back to gray
                        doc.text(afterLink, afterX, y);
                    }
                });
                doc.save('auto-loan-results.pdf');
            } catch (e) {
                alert('Error generating PDF: ' + e.message);
            }
        }



FINANCIAL 
/mortgage-calculator.html
/loan-calculator.html
/auto-loan-calculator.html
/travel-itinerary-planner.html
/cost-of-living-comparison.html
/compound-interest-growth-calculator.html
/salary-calculator.html
/finance-calculator.html
/credit-card-calculator.html
/inflation-calculator.html
/inflation-impact-calculator.html
/401k-calculator.html
/rental-property-roi-calculator.html
/what-if-i-bought-bitcoin-calculator.html
/dividend-calculator.html
/retirement-calculator.html

HEALTH /healt-fitness.html
/bmi-calculator.htmll
/calorie-calculator.html
/bra-size-calculator.html
/heart-rate-calculator.html
/tdee-calculator.html
/blood-alcohol-concentration-calculator.html
/ovulation-calculation.html
/macro-nutrient-calculator.html
/food-energy-converter.html

MATH /math.html
/percentage.html
/triangle-side-calculator.html
/pythagorean-theorem-calculator.html
/basic-statistics-calculator.html
/random-number-generator.html
/random-number-generator-wheel.html

STATISTIC /statistic.html
/worldpopulation.html

STUDENT /student.html
/grade-calculator.html
/gpa-calculator.html

TIME /time.html
/custom-event-countdown-timer.html
/time-zone-calculator.html
/time/timer-countdown.htm
/time/current-time-in-india.html
/time/current-time-in-australia.html
/time/current-time-in-usa.html
/time/current-time-in-singapore.html
/time/work-hours-calculator.html

OTHER /other.html
/age-calculator.html
/time.html
/safe-password-generator.html
/dice-roller.html


