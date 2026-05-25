// Complete Sri Vaishnava Gotra and Pravara Dataset
const gotraData = {
    srivatsa: "Bhārgava, Cyāvana, Āpnavāna, Aurva, Jāmadagnya pañcārṣeya prāvarānvita Śrīvatsa gōtrōtpannah",
    bharadvaja: "Āṅgirasa, Bārhaspatya, Bhāradvāja trayārṣeya prāvarānvita Bhāradvāja gōtrōtpannah",
    kashyapa: "Kāśyapa, Āvatsāra, Naidhruva trayārṣeya prāvarānvita Kāśyapa gōtrōtpannah",
    vadhula: "Bhārgava, Vaitahavya, Sāvedasa trayārṣeya prāvarānvita Vādhūla gōtrōtpannah",
    harita: "Āṅgirasa, Āmbarīṣa, Yuvānāśva trayārṣeya prāvarānvita Hārīta gōtrōtpannah",
    shatamarshana: "Āṅgirasa, Paurukutsya, Trāsadhasya trayārṣeya prāvarānvita Śaṭhamarṣaṇa gōtrōtpannah",
    kaushika: "Vaiśvāmitra, Āghamārṣaṇa, Kauśika trayārṣeya prāvarānvita Kauśika gōtrōtpannah",
    shandilya: "Kāśyapa, Āvatsāra, Śāṇḍilya trayārṣeya prāvarānvita Śāṇḍilya gōtrōtpannah",
    naidhruva: "Kāśyapa, Āvatsāra, Naidhruva trayārṣeya prāvarānvita Naidhruva Kāśyapa gōtrōtpannah",
    atreya: "Ātrēya, Ārcanānasa, Śyāvāśva trayārṣeya prāvarānvita Ātrēya gōtrōtpannah",
    kaundinya: "Vāsiṣṭha, Maitrāvaruṇa, Kauṇḍinya trayārṣeya prāvarānvita Kauṇḍinya gōtrōtpannah",
    gautama: "Āṅgirasa, Āyāsyā, Gautama trayārṣeya prāvarānvita Gautama gōtrōtpannah",
    mudgala: "Āṅgirasa, Bhārmyaśva, Maudgalya trayārṣeya prāvarānvita Maudgalya gōtrōtpannah",
    garga: "Āṅgirasa, Bārhaspatya, Bhāradvāja, Sainya, Gārgya pañcārṣeya prāvarānvita Gārgya gōtrōtpannah"
};

// UI Application Logic
function updateCustomText() {
    const selectedGotra = document.getElementById('gotraSelect').value;
    const pravaraString = gotraData[selectedGotra];
    
    let userName = document.getElementById('sharmaInput').value.trim();
    if (!userName) userName = "[Your Name]";

    document.getElementById('dynamicPravara1').innerText = pravaraString;
    document.getElementById('dynamicName1').innerText = userName;
    
    document.getElementById('dynamicPravara2').innerText = pravaraString;
    document.getElementById('dynamicName2').innerText = userName;
}

function toggleBrahmaYajna() {
    const track = document.getElementById('trackSelect').value;
    const section = document.getElementById('brahmaYajnaSection');
    
    if (track === 'short') {
        section.classList.add('opacity-30', 'pointer-events-none', 'bg-slate-100/50');
        section.classList.remove('bg-white');
    } else {
        section.classList.remove('opacity-30', 'pointer-events-none', 'bg-slate-100/50');
        section.classList.add('bg-white');
    }
}

function switchTab(target) {
    const tab1 = document.getElementById('tabDay1');
    const tab2 = document.getElementById('tabDay2');
    const view1 = document.getElementById('viewDay1');
    const view2 = document.getElementById('viewDay2');

    if (target === 'day1') {
        tab1.className = "w-1/2 text-center py-3 rounded-lg font-bold text-sm bg-amber-700 text-white shadow-xs cursor-pointer";
        tab2.className = "w-1/2 text-center py-3 rounded-lg font-bold text-sm text-slate-600 hover:text-amber-800 hover:bg-amber-50/50 cursor-pointer";
        view1.classList.remove('hidden');
        view2.classList.add('hidden');
    } else {
        tab2.className = "w-1/2 text-center py-3 rounded-lg font-bold text-sm bg-amber-700 text-white shadow-xs cursor-pointer";
        tab1.className = "w-1/2 text-center py-3 rounded-lg font-bold text-sm text-slate-600 hover:text-amber-800 hover:bg-amber-50/50 cursor-pointer";
        view2.classList.remove('hidden');
        view1.classList.add('hidden');
    }
}
