// ================================================================
// PDF Extractor — Frontend Logic
// ================================================================

const state = {
    extractedData: [],
    generatedFile: null
};

// DOM Elements
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const uploadSection = document.getElementById('uploadSection');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const successSection = document.getElementById('successSection');
const headerStats = document.getElementById('headerStats');
const pdfCount = document.getElementById('pdfCount');
const pageCount = document.getElementById('pageCount');
const cardsGrid = document.getElementById('cardsGrid');
const generateBtn = document.getElementById('generateBtn');
const addMoreBtn = document.getElementById('addMoreBtn');
const downloadBtn = document.getElementById('downloadBtn');
const newSessionBtn = document.getElementById('newSessionBtn');
const loaderProgress = document.getElementById('loaderProgress');
const successInfo = document.getElementById('successInfo');

// ================================================================
// Event Listeners
// ================================================================

// Upload zone click
uploadZone.addEventListener('click', () => fileInput.click());

// File input change
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFiles(e.target.files);
    }
});

// Drag and drop
uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('drag-over');
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('drag-over');
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFiles(files);
    }
});

// Add more PDFs
addMoreBtn.addEventListener('click', () => {
    fileInput.value = '';
    fileInput.click();
});

// Generate document
generateBtn.addEventListener('click', generateDocument);

// Download
downloadBtn.addEventListener('click', () => {
    if (state.generatedFile) {
        window.location.href = `/download/${state.generatedFile}`;
    }
});

// New session
newSessionBtn.addEventListener('click', () => {
    state.extractedData = [];
    state.generatedFile = null;
    showSection('upload');
    updateStats();
});

// ================================================================
// File Handling
// ================================================================

async function handleFiles(files) {
    const pdfFiles = Array.from(files).filter(f => f.name.toLowerCase().endsWith('.pdf'));
    
    if (pdfFiles.length === 0) {
        showToast('Nenhum arquivo PDF selecionado', 'error');
        return;
    }
    
    showSection('loading');
    loaderProgress.textContent = `Processando ${pdfFiles.length} arquivo(s)...`;
    
    const formData = new FormData();
    pdfFiles.forEach(file => formData.append('pdfs', file));
    
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.error) {
            showToast(result.error, 'error');
            showSection(state.extractedData.length > 0 ? 'results' : 'upload');
            return;
        }
        
        // Add to existing data
        state.extractedData.push(...result.data);
        renderCards();
        updateStats();
        showSection('results');
        showToast(`${result.data.length} PDF(s) processado(s) com sucesso!`, 'success');
        
    } catch (err) {
        console.error(err);
        showToast('Erro ao processar os arquivos. Tente novamente.', 'error');
        showSection(state.extractedData.length > 0 ? 'results' : 'upload');
    }
    
    // Reset file input
    fileInput.value = '';
}

// ================================================================
// Card Rendering
// ================================================================

function renderCards() {
    cardsGrid.innerHTML = '';
    
    state.extractedData.forEach((data, index) => {
        const card = createCard(data, index);
        card.style.animationDelay = `${index * 0.1}s`;
        cardsGrid.appendChild(card);
    });
}

function createCard(data, index) {
    const card = document.createElement('div');
    card.className = 'data-card';
    card.id = `card-${index}`;
    
    const fields = [
        { key: 'NOME', label: 'Nome Completo', marker: '{NOME}' },
        { key: 'RG', label: 'RG', marker: '{RG}' },
        { key: 'CPF', label: 'CPF', marker: '{CPF}' },
        { key: 'NOME_PAI', label: 'Nome do Pai', marker: '{NOME_PAI}' },
        { key: 'NOME_MAE', label: 'Nome da Mãe', marker: '{NOME_MAE}' },
        { key: 'DATA_NASCIMENTO', label: 'Data de Nascimento', marker: '{DATA_NASCIMENTO}' }
    ];
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-title">
                <div class="card-number">${index + 1}</div>
                <span class="card-filename">${data.filename || `PDF ${index + 1}`}</span>
            </div>
            <button class="card-remove" onclick="removeCard(${index})" title="Remover">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="card-body">
            <div class="fields-grid">
                ${fields.map(f => `
                    <div class="field-group">
                        <label class="field-label">
                            ${f.label}
                            <span class="marker">${f.marker}</span>
                        </label>
                        <input 
                            type="text" 
                            class="field-input ${!data[f.key] ? 'empty' : ''}" 
                            value="${data[f.key] || ''}" 
                            data-index="${index}" 
                            data-key="${f.key}"
                            placeholder="Não encontrado"
                            onchange="updateField(this)"
                            onfocus="this.classList.remove('empty')"
                        >
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// ================================================================
// Data Management
// ================================================================

function updateField(input) {
    const index = parseInt(input.dataset.index);
    const key = input.dataset.key;
    state.extractedData[index][key] = input.value;
    
    if (!input.value) {
        input.classList.add('empty');
    }
}

function removeCard(index) {
    state.extractedData.splice(index, 1);
    
    if (state.extractedData.length === 0) {
        showSection('upload');
    } else {
        renderCards();
    }
    updateStats();
}

// ================================================================
// Document Generation
// ================================================================

async function generateDocument() {
    if (state.extractedData.length === 0) {
        showToast('Nenhum dado para gerar o documento', 'error');
        return;
    }
    
    // Validate data
    const missingFields = [];
    state.extractedData.forEach((data, i) => {
        if (!data.NOME) missingFields.push(`PDF ${i+1}: Nome`);
        if (!data.RG) missingFields.push(`PDF ${i+1}: RG`);
    });
    
    if (missingFields.length > 0) {
        showToast(`Campos obrigatórios faltando: ${missingFields.join(', ')}`, 'error');
        return;
    }
    
    generateBtn.disabled = true;
    generateBtn.innerHTML = `
        <div class="loader-ring" style="width:18px;height:18px;border-width:2px;margin:0;"></div>
        Gerando...
    `;
    
    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: state.extractedData })
        });
        
        const result = await response.json();
        
        if (result.error) {
            showToast(result.error, 'error');
            resetGenerateBtn();
            return;
        }
        
        state.generatedFile = result.filename;
        const totalPages = state.extractedData.length * 2;
        successInfo.textContent = `${state.extractedData.length} PDF(s) processado(s) • ${totalPages} páginas geradas no documento final`;
        showSection('success');
        
    } catch (err) {
        console.error(err);
        showToast('Erro ao gerar o documento. Tente novamente.', 'error');
    }
    
    resetGenerateBtn();
}

function resetGenerateBtn() {
    generateBtn.disabled = false;
    generateBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Gerar Documento
    `;
}

// ================================================================
// UI Helpers
// ================================================================

function showSection(name) {
    uploadSection.style.display = name === 'upload' ? '' : 'none';
    loadingSection.style.display = name === 'loading' ? '' : 'none';
    resultsSection.style.display = name === 'results' ? '' : 'none';
    successSection.style.display = name === 'success' ? '' : 'none';
    headerStats.style.display = state.extractedData.length > 0 ? '' : 'none';
}

function updateStats() {
    const count = state.extractedData.length;
    pdfCount.textContent = count;
    pageCount.textContent = count * 2;
    headerStats.style.display = count > 0 ? '' : 'none';
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconSvg = type === 'error' 
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
    
    toast.innerHTML = `<span class="toast-icon">${iconSvg}</span>${message}`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
