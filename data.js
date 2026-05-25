// Clean Sanskrit, Kannada and Roman Transliterated Data Core Matrices
const multiLangContent = {
    kannada: {
        dhyana: {
            vadakalai: "ಶ್ರೀಮಾನ್ ವೇಂಕಟನಾಥಾರ್ಯ ಕವಿತಾರ್ಕಿಕ ಕೇಸರೀ | ವೇದಾಂತಾಚಾರ್ಯ ವರ್ಯೋಮೇ ಸನ್ನಿಧತ್ತಾಂ ಸದಾ ಹೃದಿ ||",
            thenkalai: "ಶ್ರೀ ಶೈಲೇಶ ದಯಾಪಾತ್ರಂ ಧೀಭಕ್ತ್ಯಾದಿ ಗುಣಾರ್ಣವಮ್ | ಯತೀಂದ್ರ ಪ್ರವಣಂ ವಂದೇ ರಮ್ಯ ಜಾಮಾತರಂ ಮುನಿಮ್ ||"
        },
        sankalpam_prefix: "ಹರಿಃ ಓಮ್ ತತ್ಸತ್... ಶ್ರೀ ಗೋವಿಂದ ಗೋವಿಂದ... ಶ್ರೀ ಶ್ವೇತವರಾಹ ಕಲ್ಪೇ, ವೈವಸ್ವತ ಮನ್ವಂತರೇ, ಕಲಿಯುಗೇ, प्रथम ಪಾದೇ, ಜಂಬೂದ್ವೀಪೇ, ಭಾರತ ವರ್ಷೇ, ಭರತ ಖಂಡೇ, ಶಕೋರೋಃ ಉತ್ತರೇ ಪಾರ್ಶ್ವೇ, ಅಸ್ಮಿನ್ ವರ್ತಮಾನೇ ವ್ಯಾವಹಾರಿಕೇ ಪ್ರಭವಾದಿ ಷಷ್ಟಿ ಸಂವತ್ಸರಾಣಾಂ ಮಧ್ಯೇ, ಪರಾಭವ ನಾಮ ಸಂವತ್ಸರೇ, ದಕ್ಷಿಣಾಯನೇ, ವರ್ಷ ಋತೌ, ",
        sankalpam_suffix: " ಶುಭ ತಿಥೌ, ವಾಸರ ಯುಕ್ತಾಯಾಂ... ಶ್ರೌತ ಸ್ಮಾರ್ತ vihita nitya karma ಅನುಷ್ಠಾನ ಯೋಗ್ಯತಾ ಸಿದ್ಧ್ಯರ್ಥಮ್, ನೂತನ ಯಜ್ಞೋಪವೀತ ಧಾರಣ, ಕಾಮೋಕಾರ್ಷೀತ್ ಜಪ, ಬ್ರಹ್ಮ ಯಜ್ಞ, ನವ-ಕಾಂಡ-ಋಷಿ ತರ್ಪಣಂ ಚ ಕರಮಶಃ ಕರಿಷ್ಯೇ.",
        kamokarshit: '"ಕಾಮೋಕಾರ್ಷೀತ್ ಮನ್ಯುರಕಾರ್ಷೀತ್ ನಮೋ ನಮಃ"',
        brahmayajna: "ಹರಿಃ ಓಮ್ | ಅಗ್ನಿಮ್ಮೀಳೇ ಪುರೋಹಿತಂ ಯಜ್ಞಸ್ಯ ದೇವಮೃತ್ವಿಜಮ್ ಹೋತಾರಂ ರತ್ನಧಾತಮಮ್... ದೇವಾನ್ ತರ್ಪಯಾಮಿ, ಋಷೀನ್ ತರ್ಪಯಾಮಿ, ಪಿತೃನ್ ತರ್ಪಯಾಮಿ.",
        yajnopavita: '"ಯಜ್ಞೋಪವೀತಂ ಪರಮಂ ಪವಿತ್ರಂ ಪ್ರಜಾಪತೇರ್ಯತ್ಸಹಜಂ ಪುರಸ್ತಾತ್ | ಆಯುಷ್ಯಮಗ್ರಿಯಂ ಪ್ರತಿಮುಂಚ ಶುಭ್ರಂ ಜ್ಯೋತಿಷ್ಮತ್ಪಮಂಚ ಬಾಲಮಸ್ತು ||"',
        tarpanam: [
            "ಪ್ರಜಾಪತಿಂ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ", "ಸೋಮಂ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ", "ಅಗ್ನಿಂ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ",
            "ವಿಶ್ವಾನ್ ದೇವಾನ್ ಕಾಂಡರ್ಷೀನ್ ತರ್ಪಯಾಮಿ", "ಸಾಂಹಿತೀರ್ ದೇವತಾಃ ಕಾಂಡರ್ಷೀರ್ ತರ್ಪಯಾಮಿ", "ಯಾಜ್ಞಿಕೀರ್ ದೇವತಾಃ ಕಾಂಡರ್ಷೀರ್ ತರ್ಪಯಾಮಿ",
            "ವಾರುಣೀರ್ ದೇವತಾಃ ಕಾಂಡರ್ಷೀರ್ ತರ್ಪಯಾಮಿ", "ಯಜ್ಜುಂಷಿ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ", "ಸಾಮನ್ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ"
        ],
        gotras: {
            srivatsa: "ಭಾರ್ಗವ, ಚ್ಯವನ, ಆಪ್ನವಾನ, ಔರ್ವ, ಜಾಮದಗ್ನ್ಯ ಪಂಚಾರ್ಷೇಯ ಪ್ರವರಾನ್ವಿತ ಶ್ರೀವತ್ಸ",
            bharadvaja: "ಆಂಗಿರಸ, ಬಾರ್ಹಸ್ಪತ್ಯ, ಭಾರದ್ವಾಜ ತ್ರಯಾರ್ಷೇಯ ಪ್ರವರಾನ್ವಿತ ಭಾರದ್ವಾಜ",
            kashyapa: "ಕಾಶ್ಯಪ, ಆವತ್ಸಾರ, ನೈಧ್ರುವ ತ್ರಯಾರ್ಷೇಯ ಪ್ರವರಾನ್ವಿತ ಕಾಶ್ಯಪ",
            vadhula: "ಭಾರ್ಗವ, ವೈತಹವ್ಯ, ಸಾವೇದಸ ತ್ರಯಾರ್ಷೇಯ ಪ್ರವರಾನ್ವಿತ ವಾಧೂಲ"
        }
    },
    english: {
        dhyana: {
            vadakalai: "Śrīmān veṅkaṭanāthārya kavītārkika kesarī | Vedāntācārya varyome sannidhattāṁ sadā hṛdi ||",
            thenkalai: "Śrī śaileśa dayāpātraṁ dhībhaktyādi guṇārṇavam | Yathīndra pravaṇaṁ vande ramya jāmātaraṁ munim ||"
        },
        sankalpam_prefix: "Harih Ōm Tatsat... Śrī Govinda Govinda... Śrī Śvetavarāha kalpe, Vaivasvata manvantare, Kaliyuge, Prathama pāde, Jambūdvīpe, Bhārata varṣe, Bharata khaṇḍe, Śakoroh uttare pārśve, asmin vartamāne vyāvahārike prabhavādi ṣaṣṭhi saṁvatsarāṇāṁ madhye, Parābhava nāma saṁvatsare, Dakṣiṇāyane, Varṣa ṛtau, ",
        sankalpam_suffix: " śubha tithau... śrauta smārta vihita nitya karma anuṣṭhāna yōgyatā siddhyartham, nūtana yajñōpavīta dhāraṇa, kāmokārṣīt japa, brahma yajna, nava-kāṇḍa-ṛṣi tarpaṇam ca kramaśah kariṣyē.",
        kamokarshit: '"Kāmokārshīt manyurakārshīt namō namah"',
        brahmayajna: "Harih Ōm. Agnimmīḷē purōhitam yajñasya dēvamṛtvijam hotāram ratnad hātamam... devān tarpaṇāmi, ṛṣīn tarpaṇāmi, pitṟn tarpaṇāmi.",
        yajnopavita: '"Yajñōpavītam paramam pavitram prajāpatēryatsahajam purastāt | Āyuṣyamagriyam pratimuñca shubhram jyōtiṣmatpamañca bālamastu ||"',
        tarpanam: [
            "Prajāpatiṁ kāṇḍarṣiṁ tarpaṇāmi", "Somaṁ kāṇḍarṣiṁ tarpaṇāmi", "Agniṁ kāṇḍarṣiṁ tarpaṇāmi",
            "Viśvān devān kāṇḍarṣīn tarpaṇāmi", "Sāṁhitīr devatāḥ kāṇḍarṣīr tarpaṇāmi", "Yājñikīr devatāḥ kāṇḍarṣīr tarpaṇāmi",
            "Vāruṇīr devatāḥ kāṇḍarṣīr tarpaṇāmi", "Yajjuṁṣi kāṇḍarṣiṁ tarpaṇāmi", "Sāman kāṇḍarṣiṁ tarpaṇāmi"
        ],
        gotras: {
            srivatsa: "Bhārgava, Cyāvana, Āpnavāna, Aurva, Jāmadagnya pañcārṣeya prāvarānvita Śrīvatsa",
            bharadvaja: "Āṅgirasa, Bārhaspatya, Bhāradvāja trayārṣeya prāvarānvita Bhāradvāja",
            kashyapa: "Kāśyapa, Āvatsāra, Naidhruva trayārṣeya prāvarānvita Kāśyapa",
            vadhula: "Bhārgava, Vaitahavya, Sāvedasa trayārṣeya prāvarānvita Vādhūla"
        }
    },
    sanskrit: {
        dhyana: {
            vadakalai: "श्रीमान् वेङ्कटनाथार्य कवितार्किक केसरी । वेदान्ताचार्य वर्योमे सन्निधत्तां सदा हृदि ॥",
            thenkalai: "श्री शैलेश दयापात्रं धीभक्त्यादि गुणार्णवम् । यतीन्द्र प्रवणं वन्दे रम्य जामातरं मुनिम् ॥"
        },
        sankalpam_prefix: "हरिः ओम् तत्सत्... श्री गोविन्द गोविन्द... श्री श्वेत् वराह कल्पे, वैवस्वत मन्वन्तरे, कलियुगे, प्रथम पादे, जम्बूद्वीपे, भारत वर्षे, भरत खण्डे, शकोरोः उत्तरे पार्श्वे, अस्मिन् वर्तमाने व्यावहारिकॆ प्रभवादि षष्टि संवत्सराणां मध्ये, पराभव नाम संवत्सरे, दक्षिणायने, वर्ष ऋतौ, ",
        sankalpam_suffix: " शुभ तिथौ... श्रौत स्मार्त विहित नित्य कर्म अनुष्ठान योग्यता सिद्ध्यर्थं, नूतन यज्ञोपवीत धारण, कामोकार्षीत् जप, ब्रह्म यज्ञ, नव-काण्ड-ऋषि तर्पणं च क्रमशः करिष्ये।",
        kamokarshit: '"कामोकार्षीत् मन्युरकार्षीत् नमो नमः"',
        brahmayajna: "हरिः ओम् । अग्निम्मीळे पुरोहितं यज्ञस्य देवमृत्विजम् होतारं रत्नधातमम्... देवान् तर्पयामि, ऋषीन तर्पयामि, पितॄन् तर्पयामि।",
        yajnopavita: '"यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात् । आयुष्यमग्रियं प्रतिमुञ्च शुभ्रं ज्योतिष्मत्पमञ्च बालमस्तु ॥"',
        tarpanam: [
            "प्रजापतिं काण्डर्षिं तर्पयामि", "सोमं काण्डर्षिं तर्पयामि", "अग्निं काण्डर्षिं तर्पयामि",
            "विश्वान् देवान् काण्डर्षीन् तर्पयामि", "सांहितीर् देवताः काण्डर्षीर् तर्पयामि", "याज्ञिकीर् देवताः काण्डर्षीर् तर्पयामि",
            "वारुणीर् देवताः काण्डर्षीर् तर्पयामि", "यज्जुंषि काण्डर्षिं तर्पयामि", "सामन् काण्डर्षिं तर्पयामि"
        ],
        gotras: {
            srivatsa: "भार्गव, च्यवन, आप्नवान, और्व, जामदग्न्य पञ्चार्षेय प्रवरान्वित श्रीवत्स",
            bharadvaja: "आङ्गिरस, बार्हस्पत्य, भारद्वाज त्र्यार्षेय प्रवरान्वित भारद्वाज",
            kashyapa: "काश्यप, आवत्सार, नैध्रुव त्र्यार्षेय प्रवरान्वित काश्यप",
            vadhula: "भार्गव, वैतहव्य, सावेदस त्र्यार्षेय प्रवरान्वित वाधूल"
        }
    }
};
