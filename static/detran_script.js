// Configuração do documento de impressão
// As coordenadas (top, left) são em milímetros a partir do canto superior esquerdo da folha A4.
// Estes valores são iniciais aproximados e foram calibrados visualmente na proporção do formulário. Ajustes finos podem ser feitos alterando os 'top' e 'left'.

const boxSize = 3.65; // Tamanho aproximado de cada quadradinho em mm

const fieldsConfig = {
  "tipo_pedido_1_via": {
    "type": "mark",
    "top": 29.38,
    "left": 7.8,
    "fontSize": "14px"
  },
  "tipo_pedido_2_via": {
    "type": "mark",
    "top": 29.38,
    "left": 30.91,
    "fontSize": "14px"
  },
  "tipo_pedido_atest_antec": {
    "type": "mark",
    "top": 22.5,
    "left": 59,
    "fontSize": "14px"
  },
  "tipo_pedido_pesquisa": {
    "type": "mark",
    "top": 28.5,
    "left": 16,
    "fontSize": "14px"
  },
  "tipo_pedido_atualizacao": {
    "type": "mark",
    "top": 28.5,
    "left": 37,
    "fontSize": "14px"
  },
  "data_identificacao": {
    "type": "boxed",
    "top": 34.34,
    "left": 78.28,
    "boxWidth": 4.85,
    "maxLength": 8,
    "fontSize": "14px"
  },
  "tipo_isencao": {
    "type": "single_box",
    "top": 31.43,
    "left": 122.42,
    "fontSize": "14px"
  },
  "nome_requerente": {
    "type": "boxed",
    "top": 54.91,
    "left": 3.04,
    "boxWidth": 5.75,
    "maxLength": 60,
    "multiLine": true,
    "lineChangeIndex": 51,
    "line2TopOffset": 7.2,
    "line2LeftOffset": 0,
    "fontSize": "14px"
  },
  "nome_pai": {
    "type": "boxed",
    "top": 69.1,
    "left": 3.04,
    "boxWidth": 5.75,
    "maxLength": 60,
    "multiLine": true,
    "lineChangeIndex": 51,
    "line2TopOffset": 7.2,
    "line2LeftOffset": 0,
    "fontSize": "14px"
  },
  "nome_mae": {
    "type": "boxed",
    "top": 83.57,
    "left": 2.77,
    "boxWidth": 5.75,
    "maxLength": 60,
    "multiLine": true,
    "lineChangeIndex": 51,
    "line2TopOffset": 7.2,
    "line2LeftOffset": 0,
    "fontSize": "14px"
  },
  "nome_conjuge": {
    "type": "boxed",
    "top": 97.8,
    "left": 3.04,
    "boxWidth": 5.75,
    "maxLength": 60,
    "multiLine": true,
    "lineChangeIndex": 51,
    "line2TopOffset": 7.2,
    "line2LeftOffset": 0,
    "fontSize": "14px"
  },
  "sexo_masc": {
    "type": "mark",
    "top": 113.01,
    "left": 8.42,
    "fontSize": "14px"
  },
  "sexo_fem": {
    "type": "mark",
    "top": 135.5,
    "left": 33,
    "fontSize": "14px"
  },
  "nascimento": {
    "type": "boxed",
    "top": 115.66,
    "left": 37.03,
    "boxWidth": 5.05,
    "maxLength": 8,
    "fontSize": "14px"
  },
  "maior_65_sim": {
    "type": "mark",
    "top": 113.02,
    "left": 84.94,
    "fontSize": "14px"
  },
  "maior_65_nao": {
    "type": "mark",
    "top": 113.02,
    "left": 102.26,
    "fontSize": "14px"
  },
  "estado_civil_1": {
    "type": "mark",
    "top": 110.92,
    "left": 119.55,
    "fontSize": "14px"
  },
  "estado_civil_2": {
    "type": "mark",
    "top": 110.92,
    "left": 154.45,
    "fontSize": "14px"
  },
  "estado_civil_3": {
    "type": "mark",
    "top": 111.19,
    "left": 184.2,
    "fontSize": "14px"
  },
  "estado_civil_4": {
    "type": "mark",
    "top": 114.56,
    "left": 119.29,
    "fontSize": "14px"
  },
  "estado_civil_5": {
    "type": "mark",
    "top": 114.3,
    "left": 154.32,
    "fontSize": "14px"
  },
  "estado_civil_6": {
    "type": "mark",
    "top": 114.48,
    "left": 183.82,
    "fontSize": "14px"
  },
  "tipo_doc_nascim": {
    "type": "mark",
    "top": 151.5,
    "left": 15,
    "fontSize": "14px"
  },
  "tipo_doc_casam": {
    "type": "mark",
    "top": 123.38,
    "left": 8.92,
    "fontSize": "14px"
  },
  "tipo_doc_certificado": {
    "type": "mark",
    "top": 151.5,
    "left": 35.5,
    "fontSize": "14px"
  },
  "doc_livro": {
    "type": "boxed",
    "top": 154,
    "left": 53.5,
    "boxWidth": 3.65,
    "maxLength": 8,
    "fontSize": "14px"
  },
  "doc_folha": {
    "type": "boxed",
    "top": 154,
    "left": 86.5,
    "boxWidth": 3.65,
    "maxLength": 5,
    "fontSize": "14px"
  },
  "doc_termo": {
    "type": "boxed",
    "top": 154,
    "left": 109,
    "boxWidth": 3.65,
    "maxLength": 8,
    "fontSize": "14px"
  },
  "doc_circ": {
    "type": "boxed",
    "top": 154,
    "left": 141,
    "boxWidth": 3.65,
    "maxLength": 3,
    "fontSize": "14px"
  },
  "doc_distr": {
    "type": "boxed",
    "top": 154,
    "left": 155,
    "boxWidth": 3.65,
    "maxLength": 3,
    "fontSize": "14px"
  },
  "doc_subdistr": {
    "type": "boxed",
    "top": 154,
    "left": 169.5,
    "boxWidth": 3.65,
    "maxLength": 3,
    "fontSize": "14px"
  },
  "doc_zona": {
    "type": "boxed",
    "top": 154,
    "left": 184,
    "boxWidth": 3.65,
    "maxLength": 3,
    "fontSize": "14px"
  },
  "doc_estado": {
    "type": "boxed",
    "top": 128.87,
    "left": 196.41,
    "boxWidth": 3.65,
    "maxLength": 2,
    "fontSize": "14px"
  },
  "cartorio_codigo": {
    "type": "boxed",
    "top": 140.82,
    "left": 4.15,
    "boxWidth": 4.35,
    "maxLength": 5,
    "fontSize": "14px"
  },
  "cartorio_nome": {
    "type": "boxed",
    "top": 140.82,
    "left": 30.86,
    "boxWidth": 3.65,
    "maxLength": 35,
    "fontSize": "14px"
  },
  "nascimento_codigo": {
    "type": "boxed",
    "top": 140.82,
    "left": 103.88,
    "boxWidth": 4.6,
    "maxLength": 5,
    "fontSize": "14px"
  },
  "nascimento_nome": {
    "type": "boxed",
    "top": 140.55,
    "left": 126.09,
    "boxWidth": 3.65,
    "maxLength": 30,
    "fontSize": "14px"
  },
  "nacionalidade_1": {
    "type": "mark",
    "top": 148,
    "left": 8.15,
    "fontSize": "14px"
  },
  "nacionalidade_2": {
    "type": "mark",
    "top": 148,
    "left": 40,
    "fontSize": "14px"
  },
  "nacionalidade_3": {
    "type": "mark",
    "top": 148,
    "left": 75,
    "fontSize": "14px"
  },
  "nacionalidade_4": {
    "type": "mark",
    "top": 154,
    "left": 10,
    "fontSize": "14px"
  },
  "nacionalidade_5": {
    "type": "mark",
    "top": 154,
    "left": 50,
    "fontSize": "14px"
  },
  "incluir_cpf_sim": {
    "type": "mark",
    "top": 149.5,
    "left": 126.12,
    "fontSize": "14px"
  },
  "incluir_cpf_nao": {
    "type": "mark",
    "top": 190.5,
    "left": 140,
    "fontSize": "14px"
  },
  "cpf_numero": {
    "type": "boxed",
    "top": 152.47,
    "left": 155.33,
    "boxWidth": 4.15,
    "maxLength": 12,
    "fontSize": "14px"
  },
  "end_cep": {
    "type": "boxed",
    "top": 176.32,
    "left": 5.69,
    "boxWidth": 4.9,
    "maxLength": 9,
    "fontSize": "14px"
  },
  "end_logradouro": {
    "type": "boxed",
    "top": 175.78,
    "left": 62.32,
    "boxWidth": 3.6,
    "maxLength": 45,
    "fontSize": "14px"
  },
  "end_numero": {
    "type": "boxed",
    "top": 184.04,
    "left": 12.3,
    "boxWidth": 3.65,
    "maxLength": 15,
    "fontSize": "14px"
  },
  "end_bairro": {
    "type": "boxed",
    "top": 183.51,
    "left": 96.47,
    "boxWidth": 3.85,
    "maxLength": 30,
    "fontSize": "14px"
  },
  "end_cod_mun": {
    "type": "boxed",
    "top": 192.23,
    "left": 3.04,
    "boxWidth": 4.85,
    "maxLength": 5,
    "fontSize": "14px"
  },
  "end_nome_mun": {
    "type": "boxed",
    "top": 191.69,
    "left": 35.58,
    "boxWidth": 3.65,
    "maxLength": 30,
    "fontSize": "14px"
  },
  "end_uf": {
    "type": "boxed",
    "top": 191.69,
    "left": 99.77,
    "boxWidth": 3.65,
    "maxLength": 2,
    "fontSize": "14px"
  },
  "autorizador_pai": {
    "type": "mark",
    "top": 260.5,
    "left": 13,
    "fontSize": "14px"
  },
  "autorizador_mae": {
    "type": "mark",
    "top": 260.5,
    "left": 31,
    "fontSize": "14px"
  },
  "autorizador_resp": {
    "type": "mark",
    "top": 260.5,
    "left": 49,
    "fontSize": "14px"
  },
  "total_exigencias": {
    "type": "boxed",
    "top": 216.26,
    "left": 13.18,
    "boxWidth": 3.65,
    "maxLength": 2,
    "fontSize": "14px"
  },
  "digitais_col_1": {
    "type": "mark",
    "top": 215.19,
    "left": 38.05,
    "fontSize": "14px"
  },
  "digitais_col_2": {
    "type": "mark",
    "top": 215.46,
    "left": 62.35,
    "fontSize": "14px"
  },
  "imp_assinar_1": {
    "type": "mark",
    "top": 300,
    "left": 15,
    "fontSize": "14px"
  },
  "imp_assinar_2": {
    "type": "mark",
    "top": 300,
    "left": 51,
    "fontSize": "14px"
  },
  "imp_assinar_3": {
    "type": "mark",
    "top": 300,
    "left": 91,
    "fontSize": "14px"
  },
  "imp_assinar_4": {
    "type": "mark",
    "top": 300,
    "left": 125.5,
    "fontSize": "14px"
  },
  "obs_pid": {
    "type": "plain_text",
    "top": 250.97,
    "left": 9.62,
    "fontSize": "14px"
  },
  "obs_digitais": {
    "type": "plain_text",
    "top": 255.6,
    "left": 4.06,
    "fontSize": "14px"
  },
  "obs_extra_1": {
    "type": "plain_text",
    "top": 260.32,
    "left": 7.24,
    "fontSize": "14px"
  },
  "obs_extra_2": {
    "type": "plain_text",
    "top": 275.35,
    "left": 15.17,
    "fontSize": "14px"
  },
  "obs_extra_3": {
    "type": "plain_text",
    "top": 280.58,
    "left": 5.13,
    "fontSize": "14px"
  },
  "obs_extra_4": {
    "type": "plain_text",
    "top": 285.55,
    "left": 4.59,
    "fontSize": "14px"
  }
};

const printLayer = document.getElementById('print-layer');

function renderPrintView() {
    printLayer.innerHTML = ''; // Limpa tudo

    // Tratar Radios e Checkboxes (Marks)
    ['tipo_pedido', 'sexo', 'maior_65', 'tipo_doc', 'incluir_cpf', 'autorizador', 'digitais_col', 'imp_assinar', 'estado_civil', 'nacionalidade'].forEach(name => {
        const el = document.querySelector(`input[name="${name}"]:checked`);
        if (el) renderMark(`${name}_${el.value}`);
    });

    // Tratar selects (como estado civil, tipo isenção, nacionalidade que tem um ( ) para preencher o número)
    const tipoIsencao = document.querySelector('input[name="tipo_isencao"]:checked');
    if (tipoIsencao) renderSingleBox('tipo_isencao', tipoIsencao.value);

    // Boxed fields (Múltiplos quadradinhos)
    const boxedIds = [
        'data_identificacao', 'nome_requerente', 'nome_pai', 'nome_mae', 'nome_conjuge',
        'nascimento', 'doc_livro', 'doc_folha', 'doc_termo', 'doc_circ', 'doc_distr', 
        'doc_subdistr', 'doc_zona', 'doc_estado', 'cartorio_codigo', 'cartorio_nome',
        'nascimento_codigo', 'nascimento_nome', 'cpf_numero', 'end_cep', 'end_logradouro',
        'end_numero', 'end_bairro', 'end_cod_mun', 'end_nome_mun', 'end_uf', 'total_exigencias'
    ];

    boxedIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value) {
            renderBoxed(id, el.value.replace(/[^A-Za-z0-9 ]/g, '')); // Remover acentos/pontuação de caixas
        }
    });

    // Textos livres (Observações/PID)
    renderPlainText('obs_pid', document.getElementById('obs_pid').value);
    renderPlainText('obs_digitais', document.getElementById('obs_digitais').value);
    renderPlainText('obs_extra_1', document.getElementById('obs_extra_1').value);
    renderPlainText('obs_extra_2', document.getElementById('obs_extra_2').value);
    renderPlainText('obs_extra_3', document.getElementById('obs_extra_3').value);
    renderPlainText('obs_extra_4', document.getElementById('obs_extra_4').value);

    // Apply calibration styles if active
    if (isCalibrationMode) {
        enableDragMode();
    }
}

function renderMark(id) {
    const config = fieldsConfig[id];
    if (!config) return;
    insertTextAbsolute('X', config.top, config.left, config.fontSize || '13px', 'bold', undefined, id);
}

function renderSingleBox(id, value) {
    if (!value) return;
    const config = fieldsConfig[id];
    if (!config) return;
    insertTextAbsolute(value, config.top, config.left, config.fontSize || '11px', 'bold', undefined, id);
}

function renderPlainText(id, value) {
    if (!value) return;
    const config = fieldsConfig[id];
    if (!config) return;
    insertTextAbsolute(value.toUpperCase(), config.top, config.left, config.fontSize || '11px', 'normal', 'Roboto Mono, monospace', id);
}

function insertTextAbsolute(text, top, left, fontSize, fontWeight, fontFamily, id) {
    const div = document.createElement('div');
    div.className = 'print-item';
    div.style.top = `${top}mm`;
    div.style.left = `${left}mm`;
    div.style.fontSize = fontSize;
    div.style.fontWeight = fontWeight || 'normal';
    div.style.fontFamily = fontFamily || "'Roboto Mono', monospace";
    div.innerText = text;
    if (id) div.dataset.id = id;
    printLayer.appendChild(div);
}

function renderBoxed(fieldId, value) {
    if (!value) return;
    const config = fieldsConfig[fieldId];
    if (!config) return;

    value = value.toUpperCase();
    const fSize = config.fontSize || '11px';
    
    if (config.multiLine && value.length > config.lineChangeIndex) {
        const line1 = value.substring(0, config.lineChangeIndex);
        const line2 = value.substring(config.lineChangeIndex, config.maxLength);
        
        insertBoxedDiv(line1, config.top, config.left, config.boxWidth, fieldId, false, fSize);
        insertBoxedDiv(line2, config.top + config.line2TopOffset, config.left + config.line2LeftOffset, config.boxWidth, fieldId, true, fSize);
    } else {
        insertBoxedDiv(value.substring(0, config.maxLength), config.top, config.left, config.boxWidth, fieldId, false, fSize);
    }
}

function insertBoxedDiv(text, top, left, boxWidth, id, isLine2 = false, fontSize = '11px') {
    const div = document.createElement('div');
    div.className = 'print-item boxed-text';
    div.style.top = `${top}mm`;
    div.style.left = `${left}mm`;
    div.style.fontSize = fontSize;
    if (id) {
        div.dataset.id = id;
        div.dataset.line2 = isLine2.toString();
    }

    // Criar os spans uniformes para alinhamento em papel
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.style.width = `${boxWidth}mm`;
        span.innerText = text[i];
        div.appendChild(span);
    }

    printLayer.appendChild(div);
}

// Controlar visualização de fundo para tirar o formulário a qualquer momento
let isBgVisible = true;
function toggleBackground() {
    isBgVisible = !isBgVisible;
    document.getElementById('form-bg').style.opacity = isBgVisible ? 0.8 : 0;
}

// Add event listeners para real-time updates
document.getElementById('dataForm').addEventListener('input', renderPrintView);
document.getElementById('dataForm').addEventListener('change', renderPrintView);

// Calibration Logic
let isCalibrationMode = false;

function toggleCalibration() {
    isCalibrationMode = !isCalibrationMode;
    const btn = document.getElementById('calibrateBtn');
    if (isCalibrationMode) {
        btn.style.backgroundColor = '#dc2626';
        btn.innerText = 'Desativar Calibragem';
        enableDragMode();
        document.getElementById('config-output-panel').style.display = 'block';
    } else {
        btn.style.backgroundColor = '#f59e0b';
        btn.innerText = 'Modo Calibragem (Arrastar)';
        disableDragMode();
        document.getElementById('config-output-panel').style.display = 'none';
    }
}

function enableDragMode() {
    const items = document.querySelectorAll('.print-item');
    items.forEach(item => {
        item.style.border = '1px dashed red';
        item.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        item.style.cursor = 'move';
        item.style.pointerEvents = 'auto';
        item.onmousedown = (e) => startDrag(e, item);
    });
}

function disableDragMode() {
    const items = document.querySelectorAll('.print-item');
    items.forEach(item => {
        item.style.border = 'none';
        item.style.backgroundColor = 'transparent';
        item.style.pointerEvents = 'none';
        item.onmousedown = null;
    });
}

function getPixelsPerMm() {
    const a4 = document.getElementById('a4-paper');
    return a4.clientWidth / 210;
}

let draggedItem = null;
let startX, startY;
let initialTopMm, initialLeftMm;

function startDrag(e, item) {
    if (!isCalibrationMode) return;
    draggedItem = item;
    startX = e.clientX;
    startY = e.clientY;
    initialTopMm = parseFloat(item.style.top);
    initialLeftMm = parseFloat(item.style.left);

    document.onmousemove = drag;
    document.onmouseup = stopDrag;
}

function drag(e) {
    if (!draggedItem) return;
    e.preventDefault();
    const ppmm = getPixelsPerMm();
    const dx = (e.clientX - startX) / ppmm;
    const dy = (e.clientY - startY) / ppmm;
    
    // Atualiza o CSS com precisão
    const newTop = initialTopMm + dy;
    const newLeft = initialLeftMm + dx;
    
    draggedItem.style.top = newTop + 'mm';
    draggedItem.style.left = newLeft + 'mm';
}

function stopDrag() {
    if (!draggedItem) return;
    
    const id = draggedItem.dataset.id;
    const isLine2 = draggedItem.dataset.line2 === "true";
    const finalTop = parseFloat(parseFloat(draggedItem.style.top).toFixed(2));
    const finalLeft = parseFloat(parseFloat(draggedItem.style.left).toFixed(2));

    if (id && fieldsConfig[id]) {
        if (isLine2) {
             fieldsConfig[id].line2TopOffset = parseFloat((finalTop - fieldsConfig[id].top).toFixed(2));
             fieldsConfig[id].line2LeftOffset = parseFloat((finalLeft - fieldsConfig[id].left).toFixed(2));
        } else {
             fieldsConfig[id].top = finalTop;
             fieldsConfig[id].left = finalLeft;
        }
    }
    
    updateConfigOutput();
    
    draggedItem = null;
    document.onmousemove = null;
    document.onmouseup = null;
}

// Escutar Roda do mouse (Scroll Wheel) para alterar tamanhos durante a calibração
// Caso o SHIFT+Scroll do mouse do usuário não funcione bem no Windows, pode usar as teclas Z (diminui) e X (aumenta)
// ao ter o mouse em cima da palavra, ou usar as Setas Cima/Baixo.
document.addEventListener('wheel', (e) => {
    if (!isCalibrationMode) return;
    const target = e.target.closest('.print-item');
    if (target) {
        e.preventDefault();
        const id = target.dataset.id;
        const config = fieldsConfig[id];
        if (config) {
            
            // Em alguns sistemas, a tecla Shift inverte o scroll vertical (deltaY) para horizontal (deltaX)
            const delta = e.deltaY || e.deltaX || 0; 
            if (delta === 0) return;

            // Roda para cima aumenta largura (delta < 0 no JS), roda para baixo diminui a largura
            // Mantendo apenas ajuste de espaçamento individual, conforme pedido pelo usuário
            if (config.type === 'boxed') {
                const step = delta < 0 ? 0.05 : -0.05;
                config.boxWidth = parseFloat((parseFloat(config.boxWidth || 3.65) + step).toFixed(2));
                
                // Atualiza spans de boxWidth apenas para este item individualmente
                const spans = document.querySelectorAll(`div.print-item[data-id="${id}"] span`);
                spans.forEach(span => {
                    span.style.width = config.boxWidth + 'mm';
                });
                
                updateConfigOutput();
            }
        }
    }
}, {passive: false});

// ==========================================
// Alterar Tamanho de Fonte Globalmente
// ==========================================
function changeGlobalFontSize(step) {
    Object.keys(fieldsConfig).forEach(key => {
        const config = fieldsConfig[key];
        let currentSize = parseFloat(config.fontSize) || (config.type === 'mark' ? 13 : 11);
        currentSize += step;
        if (currentSize < 5) currentSize = 5;
        if (currentSize > 60) currentSize = 60; // limite

        config.fontSize = currentSize + 'px';
    });

    // Força re-renderizar documento com os novos tamanhos
    renderPrintView();
    if (isCalibrationMode) {
        updateConfigOutput();
        enableDragMode(); // Reabilita o arrastar nos itens recém recriados
    }
}

function updateConfigOutput() {
    const textarea = document.getElementById('config-output');
    if (textarea) {
        // Gera um JSON formatado ou só joga o objeto
        textarea.value = JSON.stringify(fieldsConfig, null, 2);
    }
}

// Init
renderPrintView();

// ==========================================
// Salvar (Exportar) e Carregar (Importar) Formulário Externamente
// ==========================================
function exportProfiles() {
    // Coleta dados do formulário atual
    const inputs = document.querySelectorAll('#dataForm input, #dataForm select');
    const profile = {};
    let hasData = false;
    
    inputs.forEach(input => {
        if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.checked) {
                profile[input.name] = input.value;
                hasData = true;
            }
        } else if (input.id && input.value.trim() !== '') {
            profile[input.id] = input.value;
            hasData = true;
        }
    });

    if (!hasData) {
        alert("O formulário está vazio. Preencha alguns dados antes de exportar.");
        return;
    }

    // Solicita um nome para salvar o arquivo de forma organizada
    let nomePessoa = document.getElementById('nome_requerente') ? document.getElementById('nome_requerente').value : "";
    nomePessoa = nomePessoa.trim().replace(/[^a-zA-Z0-9\u00C0-\u00FF]/g, '_');
    if (!nomePessoa) nomePessoa = "Novo_Formulario";

    const blob = new Blob([JSON.stringify(profile, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Obter data atual no formato YYYY-MM-DD
    const dateStr = new Date().toISOString().split('T')[0];
    a.download = `detran_${nomePessoa}_${dateStr}.json`;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importProfiles(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const contents = e.target.result;
            const importedData = JSON.parse(contents);
            
            // Backward compatibility para arquivos antigos (que salvavam múltiplos perfis)
            let profile = importedData;
            const keys = Object.keys(importedData);
            if (keys.length > 0 && typeof importedData[keys[0]] === 'object' && !Array.isArray(importedData[keys[0]])) {
                profile = importedData[keys[0]]; // carrega o primeiro
            }
            
            // Limpa o form atual
            document.getElementById('dataForm').reset();
            
            const inputs = document.querySelectorAll('#dataForm input, #dataForm select');
            inputs.forEach(input => {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    if (profile[input.name] !== undefined && profile[input.name] === input.value) {
                        input.checked = true;
                    }
                } else if (input.id && profile[input.id] !== undefined) {
                     input.value = profile[input.id];
                }
            });
            
            renderPrintView();
            alert("Dados carregados com sucesso no formulário!");
        } catch (err) {
            alert("Erro ao ler o arquivo. Certifique-se de que é um arquivo JSON válido exportado por este aplicativo.");
        }
        
        event.target.value = ''; // Limpar input para poder importar de novo
    };
    reader.readAsText(file);
}
