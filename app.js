/**
 * YoungLife Expense Report Generator - Main Application
 * @description Main application file for managing expenses, receipts, and PDF generation for YoungLife expense reports
 * @author Santiago
 * @version 2.3
 * @license MIT
 * @modified 2025-10-08
 */

const HASHED_PASSWORD = 'ed5d30a8aca99eab0cb23b5e22d70ed50db198fe';

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

let expenses = [];
let kmExpenses = [];
let receipts = [];
let userProfile = {
    name: '',
    area: '',
    iban: ''
};

const ylLogo = `<svg viewBox="-0.1455788442283923 -0.14653142594654756 594.9296527572668 116.05853142594654" xmlns="http://www.w3.org/2000/svg"><path d="M170.245 33.967a1.096 1.096 0 0 0-1.06.784L157.378 73.74c-.53-1.78-11.692-38.982-11.692-38.982a1.095 1.095 0 0 0-1.062-.79h-14.358a1.113 1.113 0 0 0-1.056 1.444L146.9 91.36a1.11 1.11 0 0 0 1.056.773h3.431c-.224.737-6.555 21.197-6.555 21.197a1.114 1.114 0 0 0 .164.99 1.166 1.166 0 0 0 .89.449h13.333a1.117 1.117 0 0 0 1.055-.761l7.465-22.637s0-.006 17.926-55.958a1.105 1.105 0 0 0-1.061-1.445zM188.006 55.985V70.12c0 15.147 8.804 23.161 25.461 23.161s25.46-8.014 25.46-23.161V55.985c0-15.154-8.803-23.168-25.46-23.168s-25.461 8.014-25.461 23.168zm16.233 14.594V55.53c0-6.067 2.671-8.544 9.228-8.544s9.228 2.477 9.228 8.544V70.58c0 6.074-2.671 8.538-9.228 8.538s-9.228-2.464-9.228-8.538zM280.434 33.967a1.106 1.106 0 0 0-1.107 1.109V73.22c-5.014 2.53-10.532 4.293-13.487 4.293-2.488 0-3.367-.885-3.367-3.379v-39.06a1.112 1.112 0 0 0-1.114-1.108h-14.016a1.108 1.108 0 0 0-1.11 1.108v40.551c0 11.717 4.624 17.655 13.746 17.655 6.192 0 14.47-2.08 21.7-5.43.152.542 1.013 3.484 1.013 3.484a1.114 1.114 0 0 0 1.068.797h10.679a1.112 1.112 0 0 0 1.115-1.11V35.076a1.112 1.112 0 0 0-1.115-1.108zM318.992 38.255c-.154-.538-1.014-3.491-1.014-3.491a1.112 1.112 0 0 0-1.062-.797H306.23a1.112 1.112 0 0 0-1.113 1.109v55.947a1.112 1.112 0 0 0 1.113 1.109h14.017a1.112 1.112 0 0 0 1.109-1.11V52.89c4.988-2.53 10.513-4.287 13.474-4.287 2.488 0 3.372.878 3.372 3.368v39.052a1.108 1.108 0 0 0 1.109 1.109h14.004a1.109 1.109 0 0 0 1.114-1.11v-40.55c0-11.71-4.623-17.655-13.738-17.655-6.174 0-14.454 2.089-21.7 5.438zM361.67 52.518v5.313c0 6.716 2.32 11.787 6.859 15.095-3.432 2.801-5.142 5.897-5.142 9.493 0 7.565 3.255 10.756 12.012 11.776-.03 0-.03 0 6.758.773l9.452 1.06c4.045.443 4.285.797 4.285 3.385 0 2.341-.488 3.367-12.217 3.367a76.814 76.814 0 0 1-18.568-2.376 1.099 1.099 0 0 0-.878.148 1.079 1.079 0 0 0-.484.742l-1.722 10.46a1.122 1.122 0 0 0 .774 1.24c6.975 2.158 16.167 2.918 21.917 2.918 20.219 0 26.387-4.145 26.387-17.766 0-9.246-3.874-13.627-12.938-14.653 0-.006-4.528-.478-4.528-.478l-11.676-1.25c-2.11-.224-2.11-.773-2.11-1.31 0-1.042.968-2.292 2.571-3.36.218.012 2.871.106 2.871.106 19.523 0 23.622-10.537 23.622-19.37v-5.295a20.82 20.82 0 0 0-1.55-7.99c.548-.154 4.993-1.386 4.993-1.386a1.095 1.095 0 0 0 .803-1.072v-7.012a1.108 1.108 0 0 0-1.11-1.109h-17.14a38.5 38.5 0 0 0-9.618-1.15c-15.632 0-23.362 6.446-23.622 19.701zm15.426 4.735v-4.251c0-4.246 1.34-6.699 8.197-6.699 6.952 0 8.308 2.453 8.308 6.699v4.25c0 4.777-2.17 6.464-8.308 6.464-6.055 0-8.197-1.687-8.197-6.463z" fill="#003a5b"/><g fill="#91c83e"><path d="M17.03.436A1.504 1.504 0 0 0 15.962 0H1.503A1.5 1.5 0 0 0 0 1.5v15.963a1.5 1.5 0 0 0 .441 1.061S22.118 40.19 24.482 42.547v46.901a1.497 1.497 0 0 0 1.504 1.498H46.6a1.503 1.503 0 0 0 1.505-1.498V32.14a1.49 1.49 0 0 0-.442-1.068zM111.085 78.003l-10.308-10.301a1.465 1.465 0 0 0-1.061-.442H80.748V11.502a1.497 1.497 0 0 0-2.56-1.062v-.003L57.572 31.055a1.489 1.489 0 0 0-.435 1.06v57.262a1.498 1.498 0 0 0 1.497 1.498h41.081a1.467 1.467 0 0 0 1.061-.442l10.308-10.307a1.495 1.495 0 0 0 0-2.123zM436.605 9.362l-13.734 9.215c-.436.3-.955.743-.955 1.298v71.148a1.113 1.113 0 0 0 1.115 1.109h14.01a1.11 1.11 0 0 0 1.108-1.11V10.268a1.128 1.128 0 0 0-.376-.838.9.9 0 0 0-1.168-.067zM451.3 9.85a1.11 1.11 0 0 0-1.11 1.108v16.198a1.11 1.11 0 0 0 1.11 1.11h14.015a1.112 1.112 0 0 0 1.108-1.11V10.958a1.111 1.111 0 0 0-1.108-1.107zm0 24.117a1.108 1.108 0 0 0-1.11 1.108v55.948a1.108 1.108 0 0 0 1.11 1.108h14.015a1.11 1.11 0 0 0 1.108-1.108V35.075a1.11 1.11 0 0 0-1.108-1.108zM483.884 27.269v6.698h-7.848a1.108 1.108 0 0 0-1.11 1.109v11.15a1.108 1.108 0 0 0 1.11 1.11h7.848v43.687a1.11 1.11 0 0 0 1.109 1.109h14.015a1.113 1.113 0 0 0 1.115-1.11V47.337h12.33a1.123 1.123 0 0 0 1.109-1.027l.8-11.174a1.164 1.164 0 0 0-.294-.819 1.1 1.1 0 0 0-.809-.349h-13.136v-5.896c0-4.098.784-5.549 5.207-5.549a39.51 39.51 0 0 1 7.8.897 1.135 1.135 0 0 0 .873-.178 1.118 1.118 0 0 0 .465-.754l1.493-10.812a1.116 1.116 0 0 0-.796-1.22 45.753 45.753 0 0 0-12.36-1.645c-12.736 0-18.92 6.038-18.92 18.459zM517.335 55.762v14.817c0 15.49 7.872 22.702 24.776 22.702a61.087 61.087 0 0 0 20.963-3.632 1.115 1.115 0 0 0 .69-1.262l-2.187-10.567a1.113 1.113 0 0 0-.525-.73 1.098 1.098 0 0 0-.884-.113 57.156 57.156 0 0 1-16.789 2.595c-8.396 0-9.81-2.566-9.81-8.309V69.5h30.018a1.112 1.112 0 0 0 1.115-1.109V56.445c0-10.142-2.394-23.628-23.056-23.628-15.91 0-24.311 7.937-24.311 22.945zm16.234-1.38c0-5.431 2.529-7.854 8.19-7.854 6.161 0 7.399 3.007 7.399 7.854v1.639h-15.59z"/></g></svg>`;

const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordError = document.getElementById('passwordError');
const mainApp = document.getElementById('mainApp');
const profileModal = document.getElementById('profileModal');
const editProfileBtn = document.getElementById('editProfileBtn');
const profileName = document.getElementById('profileName');
const profileArea = document.getElementById('profileArea');
const profileIban = document.getElementById('profileIban');
const saveProfile = document.getElementById('saveProfile');
const expenseForm = document.getElementById('expenseForm');
const amount = document.getElementById('amount');
const description = document.getElementById('description');
const reason = document.getElementById('reason');
const dateInput = document.getElementById('date');
const kmForm = document.getElementById('kmForm');
const kmAmount = document.getElementById('kmAmount');
const kmDescription = document.getElementById('kmDescription');
const kmReason = document.getElementById('kmReason');
const kmDate = document.getElementById('kmDate');
const kmExpensesList = document.getElementById('kmExpensesList');
const duplicateLastBtn = document.getElementById('duplicateLastBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const todayBtn = document.getElementById('todayBtn');
const yesterdayBtn = document.getElementById('yesterdayBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const importFileInput = document.getElementById('importFileInput');
const toastContainer = document.getElementById('toastContainer');
const expensesList = document.getElementById('expensesList');
const expenseCount = document.getElementById('expenseCount');
const totalAmount = document.getElementById('totalAmount');
const receiptUpload = document.getElementById('receiptUpload');
const receiptPreview = document.getElementById('receiptPreview');
const receiptCount = document.getElementById('receiptCount');
const generatePDFBtn = document.getElementById('generatePDF');
const dropZone = document.getElementById('dropZone');
const selectFilesBtn = document.getElementById('selectFilesBtn');
const openCameraBtn = document.getElementById('openCameraBtn');
const cameraModal = document.getElementById('cameraModal');
const closeCameraBtn = document.getElementById('closeCameraBtn');
const cameraStream = document.getElementById('cameraStream');
const cameraCanvas = document.getElementById('cameraCanvas');
const captureBtn = document.getElementById('captureBtn');
const retakeBtn = document.getElementById('retakeBtn');
const usePhotoBtn = document.getElementById('usePhotoBtn');
const cameraView = document.getElementById('cameraView');
const capturePreview = document.getElementById('capturePreview');
const capturedImage = document.getElementById('capturedImage');
const cameraControls = document.getElementById('cameraControls');
const previewControls = document.getElementById('previewControls');
const cameraError = document.getElementById('cameraError');

let currentStream = null;
let capturedPhotoData = null;
let hasUnprocessedReceipt = false;

/**
 * Unlocks expense form fields after receipt upload
 */
function unlockExpenseFields() {
    const fields = [amount, description, reason, dateInput];
    const submitBtn = expenseForm.querySelector('button[type="submit"]');
    const prompt = document.getElementById('receiptPrompt');

    fields.forEach(field => {
        field.disabled = false;
        field.classList.remove('opacity-50');
    });

    submitBtn.disabled = false;
    if (prompt) prompt.classList.add('hidden');
}

/**
 * Locks expense form fields until receipt is uploaded
 */
function lockExpenseFields() {
    const fields = [amount, description, reason, dateInput];
    const submitBtn = expenseForm.querySelector('button[type="submit"]');
    const prompt = document.getElementById('receiptPrompt');

    fields.forEach(field => {
        field.disabled = true;
        field.classList.add('opacity-50');
    });

    submitBtn.disabled = true;
    if (prompt) prompt.classList.remove('hidden');
}

/**
 * Unlocks KM form fields after receipt upload
 */
function unlockKmFields() {
    const fields = [kmAmount, kmDescription, kmReason, kmDate];
    const submitBtn = kmForm.querySelector('button[type="submit"]');
    const prompt = document.getElementById('kmReceiptPrompt');

    fields.forEach(field => {
        field.disabled = false;
        field.classList.remove('opacity-50');
    });

    submitBtn.disabled = false;
    if (prompt) prompt.classList.add('hidden');
}

/**
 * Locks KM form fields until receipt is uploaded
 */
function lockKmFields() {
    const fields = [kmAmount, kmDescription, kmReason, kmDate];
    const submitBtn = kmForm.querySelector('button[type="submit"]');
    const prompt = document.getElementById('kmReceiptPrompt');

    fields.forEach(field => {
        field.disabled = true;
        field.classList.add('opacity-50');
    });

    submitBtn.disabled = true;
    if (prompt) prompt.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    passwordModal.classList.remove('hidden');

    // Initialize Select2 for dropdowns
    $('#profileArea').select2({
        placeholder: 'Select Area...',
        width: '100%',
        dropdownParent: $('#profileModal')
    });

    flatpickr(dateInput, {
        dateFormat: 'Y-m-d',
        defaultDate: new Date(),
        maxDate: new Date(),
        disableMobile: false
    });

    flatpickr(kmDate, {
        dateFormat: 'Y-m-d',
        defaultDate: new Date(),
        maxDate: new Date(),
        disableMobile: false
    });

    profileName.value = userProfile.name;
    profileIban.value = userProfile.iban;
    if (userProfile.area) {
        $('#profileArea').val(userProfile.area).trigger('change');
    }

    updateProgressSteps();

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
            renderExpenses();
            renderKmExpenses();
            renderReceipts();
        });
    });

    // Dark mode toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
    }

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

passwordSubmit.addEventListener('click', async () => {
    const hashedInput = await hashPassword(passwordInput.value);
    if (hashedInput === HASHED_PASSWORD) {
        showMainApp();
        setTimeout(() => {
            if (!userProfile.name || !userProfile.area) {
                profileModal.classList.remove('hidden');
            }
        }, 500);
    } else {
        passwordError.textContent = t('password_error');
    }
});

passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        passwordSubmit.click();
    }
});

function showMainApp() {
    passwordModal.classList.add('hidden');
    mainApp.classList.remove('hidden');
}

editProfileBtn.addEventListener('click', () => {
    profileModal.classList.remove('hidden');
});

saveProfile.addEventListener('click', () => {
    userProfile.name = profileName.value.trim();
    userProfile.area = $('#profileArea').val();
    userProfile.iban = profileIban.value.trim();

    profileModal.classList.add('hidden');
});

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation with field highlighting
    let hasError = false;

    if (!amount.value || parseFloat(amount.value) <= 0) {
        amount.classList.add('border-red-500', 'border-4');
        showCustomAlert('error', t('validation_error'), t('validation_amount'));
        hasError = true;
    } else {
        amount.classList.remove('border-red-500', 'border-4');
    }

    if (!description.value.trim()) {
        description.classList.add('border-red-500', 'border-4');
        if (!hasError) showCustomAlert('error', t('validation_error'), t('validation_description'));
        hasError = true;
    } else {
        description.classList.remove('border-red-500', 'border-4');
    }

    if (!reason.value.trim()) {
        reason.classList.add('border-red-500', 'border-4');
        if (!hasError) showCustomAlert('error', t('validation_error'), t('validation_reason'));
        hasError = true;
    } else {
        reason.classList.remove('border-red-500', 'border-4');
    }

    if (!dateInput.value) {
        dateInput.classList.add('border-red-500', 'border-4');
        if (!hasError) showCustomAlert('error', t('validation_error'), t('validation_date'));
        hasError = true;
    } else {
        dateInput.classList.remove('border-red-500', 'border-4');
    }

    if (hasError) return;

    const expense = {
        id: Date.now(),
        amount: parseFloat(amount.value).toFixed(2),
        description: description.value.trim(),
        reason: reason.value.trim(),
        date: dateInput.value
    };

    expenses.push(expense);
    renderExpenses();
    updateSummary();
    updateProgressSteps();
    showToast(t('add_expense_btn') + ' ✓', 'success');
    expenseForm.reset();

    // Lock fields again after adding expense
    lockExpenseFields();
    hasUnprocessedReceipt = false;

    flatpickr(dateInput, {
        dateFormat: 'Y-m-d',
        defaultDate: new Date(),
        maxDate: new Date()
    });
});

kmForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation with field highlighting
    let hasError = false;

    if (!kmAmount.value || parseFloat(kmAmount.value) <= 0) {
        kmAmount.classList.add('border-red-500', 'border-4');
        showCustomAlert('error', t('validation_error'), t('validation_km'));
        hasError = true;
    } else {
        kmAmount.classList.remove('border-red-500', 'border-4');
    }

    if (!kmDescription.value.trim()) {
        kmDescription.classList.add('border-red-500', 'border-4');
        if (!hasError) showCustomAlert('error', t('validation_error'), t('validation_description'));
        hasError = true;
    } else {
        kmDescription.classList.remove('border-red-500', 'border-4');
    }

    if (!kmReason.value.trim()) {
        kmReason.classList.add('border-red-500', 'border-4');
        if (!hasError) showCustomAlert('error', t('validation_error'), t('validation_reason_travel'));
        hasError = true;
    } else {
        kmReason.classList.remove('border-red-500', 'border-4');
    }

    if (!kmDate.value) {
        kmDate.classList.add('border-red-500', 'border-4');
        if (!hasError) showCustomAlert('error', t('validation_error'), t('validation_date'));
        hasError = true;
    } else {
        kmDate.classList.remove('border-red-500', 'border-4');
    }

    if (hasError) return;

    const kmExpense = {
        id: Date.now(),
        kilometers: parseFloat(kmAmount.value).toFixed(1),
        amount: (parseFloat(kmAmount.value) * 0.26).toFixed(2),
        description: kmDescription.value.trim(),
        reason: kmReason.value.trim(),
        date: kmDate.value
    };

    kmExpenses.push(kmExpense);
    renderKmExpenses();
    updateSummary();
    updateProgressSteps();
    showToast(t('add_km') + ' ✓', 'success');
    kmForm.reset();

    // Lock fields again after adding KM expense
    lockKmFields();
    hasUnprocessedReceipt = false;

    flatpickr(kmDate, {
        dateFormat: 'Y-m-d',
        defaultDate: new Date(),
        maxDate: new Date()
    });
});

/**
 * Renders the expense list in the UI
 * @author Santiago
 * @description Displays all expenses in the expenses array, showing category icons, dates, amounts, and descriptions
 * @returns {void}
 * @example
 * renderExpenses();
 */
function renderExpenses() {
    if (expenses.length === 0) {
        expensesList.innerHTML = `
            <div class="text-center py-12 text-gray-400">
                <span class="text-6xl block mb-4">📋</span>
                <p data-i18n="no_expenses">${t('no_expenses')}</p>
            </div>
        `;
        return;
    }

    expensesList.innerHTML = expenses.map(expense => `
        <div class="expense-item" data-id="${expense.id}">
            <div class="expense-item-header">
                <div>
                    <span class="text-sm font-semibold text-yl-blue">[${expense.department}]</span>
                    <span class="expense-date ml-2">${new Date(expense.date).toLocaleDateString()}</span>
                </div>
                <span class="expense-amount">${expense.amount}€</span>
            </div>
            <p class="expense-description">${expense.description}</p>
            <div class="expense-actions">
                <button class="btn-delete" onclick="deleteExpense(${expense.id})" data-i18n="delete">${t('delete')}</button>
            </div>
        </div>
    `).join('');
}

function renderKmExpenses() {
    if (kmExpenses.length === 0) {
        kmExpensesList.innerHTML = `
            <div class="text-center py-12 text-gray-400">
                <span class="text-6xl block mb-4">🚗</span>
                <p data-i18n="no_km_expenses">No kilometer expenses added yet</p>
            </div>
        `;
        return;
    }

    kmExpensesList.innerHTML = kmExpenses.map(km => `
        <div class="expense-item" data-id="${km.id}">
            <div class="expense-item-header">
                <div>
                    <span class="text-sm font-semibold text-yl-blue">${km.kilometers} km</span>
                    <span class="expense-date ml-2">${new Date(km.date).toLocaleDateString()}</span>
                </div>
                <span class="expense-amount">${km.amount}€</span>
            </div>
            <p class="expense-description">${km.description}</p>
            <div class="expense-actions">
                <button class="btn-delete" onclick="deleteKmExpense(${km.id})" data-i18n="delete">${t('delete')}</button>
            </div>
        </div>
    `).join('');
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    renderExpenses();
    updateSummary();
    updateProgressSteps();
}

function deleteKmExpense(id) {
    kmExpenses = kmExpenses.filter(exp => exp.id !== id);
    renderKmExpenses();
    updateSummary();
    updateProgressSteps();
}

function updateSummary() {
    const expensesTotal = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
    const kmTotal = kmExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
    const grandTotal = expensesTotal + kmTotal;
    expenseCount.textContent = expenses.length + kmExpenses.length;
    totalAmount.textContent = grandTotal.toFixed(2) + '€';
}

dropZone.addEventListener('click', () => {
    receiptUpload.click();
});

selectFilesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    receiptUpload.click();
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    handleFiles(files);
});

receiptUpload.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
});

/**
 * Processes uploaded image files and adds them to the receipts array
 * @author Santiago
 * @description Converts uploaded files to base64 data URLs for storage and PDF generation
 * @param {File[]} files - Array of File objects to process
 * @returns {void}
 * @example
 * handleFiles([file1, file2]);
 */
function handleFiles(files) {
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
            receipts.push(event.target.result);
            renderReceipts();
            updateSummary();
            updateProgressSteps();

            // Unlock both expense forms after uploading a receipt
            unlockExpenseFields();
            unlockKmFields();
            hasUnprocessedReceipt = true;
        };
        reader.readAsDataURL(file);
    });
}

function renderReceipts() {
    receiptPreview.innerHTML = receipts.map((receipt, index) => `
        <div class="receipt-item">
            <img src="${receipt}" alt="Receipt ${index + 1}">
            <button class="delete-receipt" onclick="deleteReceipt(${index})">×</button>
        </div>
    `).join('');
    receiptCount.textContent = receipts.length;
}

function deleteReceipt(index) {
    receipts.splice(index, 1);
    renderReceipts();
    updateProgressSteps();

    // If no receipts left and no unprocessed receipt, lock all fields
    if (receipts.length === 0 && !hasUnprocessedReceipt) {
        lockExpenseFields();
        lockKmFields();
    }
}

function updateProgressSteps() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');

    if (expenses.length > 0) {
        step1.classList.add('active');
        line1.classList.remove('border-gray-300');
        line1.classList.add('border-yl-green');
    } else {
        step1.classList.add('active');
        line1.classList.add('border-gray-300');
        line1.classList.remove('border-yl-green');
    }

    if (receipts.length > 0) {
        step2.classList.add('active');
        line2.classList.remove('border-gray-300');
        line2.classList.add('border-yl-green');
    } else {
        step2.classList.remove('active');
        line2.classList.add('border-gray-300');
        line2.classList.remove('border-yl-green');
    }

    if (expenses.length > 0 && receipts.length > 0) {
        step3.classList.add('active');
    } else {
        step3.classList.remove('active');
    }
}

/**
 * Displays a toast notification message
 * @author Santiago
 * @description Shows a temporary notification toast at the bottom right of the screen with auto-dismiss
 * @param {string} message - The message to display in the toast
 * @param {string} [type='success'] - The type of toast ('success' or 'error')
 * @returns {void}
 * @example
 * showToast('Expense added successfully', 'success');
 * showToast('An error occurred', 'error');
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✓' : '✗'}</span>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

duplicateLastBtn.addEventListener('click', () => {
    if (expenses.length === 0) {
        showToast(t('no_expenses'), 'error');
        return;
    }

    const lastExpense = expenses[expenses.length - 1];
    const newExpense = {
        ...lastExpense,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
    };

    expenses.push(newExpense);
    renderExpenses();
    updateSummary();
    showToast(t('duplicate_last') + ' ✓', 'success');
});

clearAllBtn.addEventListener('click', async () => {
    const confirmed = await showCustomConfirm(
        'warning',
        'Clear All Data',
        t('confirm_clear')
    );

    if (confirmed) {
        expenses = [];
        kmExpenses = [];
        receipts = [];
        renderExpenses();
        renderKmExpenses();
        renderReceipts();
        updateSummary();
        updateProgressSteps();
        showToast(t('clear_all') + ' ✓', 'success');
    }
});

todayBtn.addEventListener('click', () => {
    flatpickr(dateInput, {
        dateFormat: 'Y-m-d',
        defaultDate: new Date()
    });
});

yesterdayBtn.addEventListener('click', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    flatpickr(dateInput, {
        dateFormat: 'Y-m-d',
        defaultDate: yesterday
    });
});

exportDataBtn.addEventListener('click', () => {
    if (expenses.length === 0 && kmExpenses.length === 0 && receipts.length === 0) {
        showToast(t('no_data_export'), 'error');
        return;
    }

    const data = {
        version: '2.3',
        exported: new Date().toISOString(),
        userProfile,
        expenses,
        kmExpenses,
        receipts
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `YL-Backup-${userProfile.name || 'User'}-${userProfile.area || 'Area'}-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast(t('data_exported'), 'success');
});

importDataBtn.addEventListener('click', () => {
    importFileInput.click();
});

importFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);

            if (data.userProfile) {
                userProfile = data.userProfile;
                profileName.value = userProfile.name;
                profileArea.value = userProfile.area;
            }

            if (data.expenses) {
                expenses = data.expenses;
            }

            if (data.kmExpenses) {
                kmExpenses = data.kmExpenses;
            }

            if (data.receipts) {
                receipts = data.receipts;
            }

            renderExpenses();
            renderKmExpenses();
            renderReceipts();
            updateSummary();
            updateProgressSteps();
            showToast(t('data_imported'), 'success');
        } catch (error) {
            showToast('Error importing data', 'error');
            console.error(error);
        }
    };
    reader.readAsText(file);
});

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        amount.focus();
    }
});

openCameraBtn.addEventListener('click', async () => {
    cameraModal.classList.remove('hidden');
    cameraError.classList.add('hidden');

    try {
        currentStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            }
        });

        cameraStream.srcObject = currentStream;
        cameraView.classList.remove('hidden');
        capturePreview.classList.add('hidden');
        cameraControls.classList.remove('hidden');
        previewControls.classList.add('hidden');
    } catch (error) {
        console.error('Camera error:', error);
        cameraError.textContent = t('camera_error');
        cameraError.classList.remove('hidden');
    }
});

closeCameraBtn.addEventListener('click', () => {
    stopCamera();
    cameraModal.classList.add('hidden');
});

captureBtn.addEventListener('click', () => {
    const video = cameraStream;
    const canvas = cameraCanvas;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    capturedPhotoData = canvas.toDataURL('image/jpeg', 0.9);

    capturedImage.src = capturedPhotoData;
    cameraView.classList.add('hidden');
    capturePreview.classList.remove('hidden');
    cameraControls.classList.add('hidden');
    previewControls.classList.remove('hidden');

    stopCamera();
});

retakeBtn.addEventListener('click', async () => {
    try {
        currentStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            }
        });

        cameraStream.srcObject = currentStream;
        cameraView.classList.remove('hidden');
        capturePreview.classList.add('hidden');
        cameraControls.classList.remove('hidden');
        previewControls.classList.add('hidden');
    } catch (error) {
        console.error('Camera error:', error);
        cameraError.textContent = t('camera_error');
        cameraError.classList.remove('hidden');
    }
});

usePhotoBtn.addEventListener('click', () => {
    if (capturedPhotoData) {
        receipts.push(capturedPhotoData);
        renderReceipts();
        updateProgressSteps();

        // Unlock both expense forms after taking a photo
        unlockExpenseFields();
        unlockKmFields();
        hasUnprocessedReceipt = true;

        cameraModal.classList.add('hidden');
        capturedPhotoData = null;
    }
});

function stopCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
        currentStream = null;
    }
}

generatePDFBtn.addEventListener('click', async () => {
    // Check if there are any expenses
    if (expenses.length === 0 && kmExpenses.length === 0) {
        showCustomAlert('error', 'No Expenses', t('no_expenses'));
        return;
    }

    // Check if user profile is complete
    if (!userProfile.name || !userProfile.area) {
        showCustomAlert('error', t('incomplete_profile'), t('validation_profile'));
        return;
    }

    // Check if there are receipts
    if (receipts.length === 0) {
        showCustomAlert('error', t('missing_receipts'), t('validation_missing_receipts'));
        return;
    }

    // New workflow: each expense should have a receipt, but we're flexible
    const totalExpenses = expenses.length + kmExpenses.length;

    if (receipts.length < totalExpenses) {
        showCustomAlert('error', t('insufficient_receipts'), t('validation_insufficient_receipts', {
            expenses: totalExpenses,
            receipts: receipts.length
        }));
        return;
    }

    if (receipts.length > totalExpenses) {
        const confirmed = await showCustomConfirm(
            'warning',
            t('extra_receipts'),
            t('validation_extra_receipts', {
                receipts: receipts.length,
                expenses: totalExpenses
            })
        );
        if (!confirmed) return;
    }

    generatePDF();
});

/**
 * Shows a custom alert modal
 * @param {string} type - Type of alert: 'success', 'error', 'warning', 'info'
 * @param {string} title - Alert title
 * @param {string} message - Alert message
 */
function showCustomAlert(type, title, message) {
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    const modal = document.createElement('div');
    modal.className = 'custom-alert-modal';
    modal.innerHTML = `
        <div class="custom-alert-content">
            <div class="custom-alert-icon ${type}">
                ${icons[type] || icons.info}
            </div>
            <div class="custom-alert-title">${title}</div>
            <div class="custom-alert-message">${message}</div>
            <div class="custom-alert-buttons">
                <button class="custom-alert-btn primary">OK</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => {
        modal.remove();
    };

    modal.querySelector('.custom-alert-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

/**
 * Shows a custom confirm modal
 * @param {string} type - Type of confirm: 'success', 'error', 'warning', 'info'
 * @param {string} title - Confirm title
 * @param {string} message - Confirm message
 * @returns {Promise<boolean>} - Returns true if confirmed, false if cancelled
 */
function showCustomConfirm(type, title, message) {
    return new Promise((resolve) => {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        const modal = document.createElement('div');
        modal.className = 'custom-alert-modal';
        modal.innerHTML = `
            <div class="custom-alert-content">
                <div class="custom-alert-icon ${type}">
                    ${icons[type] || icons.info}
                </div>
                <div class="custom-alert-title">${title}</div>
                <div class="custom-alert-message">${message}</div>
                <div class="custom-alert-buttons">
                    <button class="custom-alert-btn secondary" data-action="cancel">Cancel</button>
                    <button class="custom-alert-btn primary" data-action="confirm">Continue</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = (result) => {
            modal.remove();
            resolve(result);
        };

        modal.querySelector('[data-action="confirm"]').addEventListener('click', () => closeModal(true));
        modal.querySelector('[data-action="cancel"]').addEventListener('click', () => closeModal(false));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(false);
        });
    });
}
