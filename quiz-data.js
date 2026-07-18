// File ini berisi kumpulan soal untuk kuis.
// Setiap sesi berisi 30 soal, mencakup seluruh materi di website:
// Pre-requisite, Verbal & Nominal, Part of Speech, 16 Tenses, Modal Auxiliary, Passive Voice.
// Setiap soal memiliki field "explanation" yang menjelaskan alasan jawaban benar/salah
// merujuk pada materi terkait di halaman masing-masing.

const quizData = {

    // ==========================================================
    // SESI 1: PILIHAN GANDA (30 SOAL)
    // ==========================================================
    multiple_choice: [
        // --- Pre-requisite (5) ---
        {
            q: "Manakah kalimat yang tepat menggunakan To Be sebagai predikat kalimat nominal?",
            options: ["She is a nurse.", "She are a nurse.", "She a nurse.", "She be a nurse."],
            correct: 0,
            explanation: "Subject 'She' (He/She/It) memakai To Be 'is' sesuai Tabel Ringkasan Auxiliary Verb di materi Pre-requisite. Predikatnya 'a nurse' adalah noun, sehingga wajib memakai To Be, bukan dihilangkan atau memakai bentuk 'are'/'be'."
        },
        {
            q: "Bentuk V1 yang benar untuk subject 'He' dalam Simple Present adalah...",
            options: ["He play badminton.", "He plays badminton.", "He playing badminton.", "He played badminton."],
            correct: 1,
            explanation: "Materi Pre-requisite poin 2 menjelaskan subject He/She/It menambahkan +s/es pada V1. 'Play' tidak berakhiran ss/sh/ch/x/o/z atau konsonan+y, jadi cukup ditambah +s menjadi 'plays'."
        },
        {
            q: "Manakah kalimat yang menerapkan Subject-Verb Agreement dengan benar?",
            options: ["Everyone are happy.", "Everyone is happy.", "Everyone were happy.", "Everyone have happy."],
            correct: 1,
            explanation: "Materi Pre-requisite poin 3 menyebutkan kata seperti everyone, somebody, each, either selalu dianggap tunggal, sehingga memakai To Be 'is', bukan 'are' atau 'were'."
        },
        {
            q: "Kalimat tanya yang benar dari 'They go to school' dalam Simple Past adalah...",
            options: ["Did they went to school?", "Did they go to school?", "Do they go to school?", "Did they goes to school?"],
            correct: 1,
            explanation: "Materi Pre-requisite poin 4 menjelaskan setelah auxiliary 'did', verb harus kembali ke bentuk V1, sehingga 'go', bukan 'went' atau 'goes'."
        },
        {
            q: "Pilih kalimat Present Perfect yang benar menggunakan has/have.",
            options: ["She have finished her work.", "She has finish her work.", "She has finished her work.", "She have finish her work."],
            correct: 2,
            explanation: "Materi Pre-requisite poin 5 menjelaskan subject He/She/It memakai 'has', dan auxiliary has/have selalu diikuti V3, sehingga bentuk yang benar 'has finished'."
        },

        // --- Verbal & Nominal (2) ---
        {
            q: "Kalimat 'They watched a movie last night.' termasuk kalimat...",
            options: ["Nominal", "Verbal", "Passive", "Interrogative"],
            correct: 1,
            explanation: "Materi Verbal & Nominal menjelaskan kalimat verbal memiliki predikat berupa kata kerja utama yang menunjukkan tindakan, seperti 'watched'."
        },
        {
            q: "Kalimat 'I am in the classroom.' termasuk kalimat...",
            options: ["Verbal", "Nominal", "Passive", "Imperative"],
            correct: 1,
            explanation: "Predikat kalimat ini adalah 'in the classroom' (adverb of place) yang didahului To Be 'am', bukan kata kerja, sesuai definisi kalimat nominal pada materi."
        },

        // --- Part of Speech (5) ---
        {
            q: "Kata 'happiness' termasuk jenis Noun...",
            options: ["Common Noun", "Proper Noun", "Abstract Noun", "Collective Noun"],
            correct: 2,
            explanation: "Materi Part of Speech mencontohkan 'happiness' sebagai Abstract Noun karena menyatakan konsep/ide, bukan benda fisik yang bisa dilihat."
        },
        {
            q: "Kata mana yang termasuk Linking Verb pada materi Part of Speech?",
            options: ["run", "seem", "write", "jump"],
            correct: 1,
            explanation: "Pada materi Part of Speech bagian Verb, 'seem' dicontohkan sebagai Linking Verb, sedangkan run/write/jump termasuk Action Verb."
        },
        {
            q: "Kata ganti objektif (Objective Pronoun) untuk 'she' adalah...",
            options: ["her", "hers", "she", "herself"],
            correct: 0,
            explanation: "Materi Part of Speech bagian Pronoun mengelompokkan 'her' sebagai bentuk Objective, sementara 'hers' Possessive dan 'she' Subjective."
        },
        {
            q: "Dalam urutan LA-DA-N, kata 'this' termasuk kategori...",
            options: ["LA 1 - Article", "LA 2 - Demonstrative Adjective", "LA 3 - Possessive Adjective", "DA - Descriptive Adjective"],
            correct: 1,
            explanation: "Materi Adjective (LA-DA-N) mengelompokkan this/that/these/those sebagai LA 2 - Demonstrative Adjective, bukan Article maupun Possessive."
        },
        {
            q: "Susunan Noun Phrase yang benar sesuai rumus La-Da-N adalah...",
            options: ["Big the red table", "The big red table", "Red the big table", "Table the big red"],
            correct: 1,
            explanation: "Materi Adjective menjelaskan urutan LA (Article 'the') diikuti DA (size 'big', color 'red') sebelum Noun ('table'), sehingga 'The big red table' yang benar."
        },

        // --- 16 Tenses (10) ---
        {
            q: "Rumus positif Simple Present Tense adalah...",
            options: ["S+V1(s/es)+O", "S+V2+O", "S+am/is/are+V-ing", "S+have/has+V3"],
            correct: 0,
            explanation: "Data 16 Tenses menuliskan Simple Present menggunakan S+V1(s/es)+O untuk menyatakan fakta atau kebiasaan."
        },
        {
            q: "'They are playing football now.' adalah contoh tense...",
            options: ["Simple Present", "Present Continuous", "Present Perfect", "Present Perfect Continuous"],
            correct: 1,
            explanation: "Rumus S+am/is/are+V-ing pada materi 16 Tenses adalah ciri Present Continuous, dipakai untuk kejadian yang sedang berlangsung."
        },
        {
            q: "'I have finished my homework.' menunjukkan tense...",
            options: ["Simple Past", "Present Perfect", "Past Perfect", "Future Perfect"],
            correct: 1,
            explanation: "Materi 16 Tenses menjelaskan Present Perfect (have/has+V3) untuk kejadian yang sudah selesai namun akibatnya masih terasa sekarang."
        },
        {
            q: "Rumus S+had+V3 merupakan ciri tense...",
            options: ["Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous"],
            correct: 2,
            explanation: "Sesuai materi 16 Tenses, Past Perfect memakai had+V3 untuk kejadian yang selesai sebelum kejadian lain di masa lalu."
        },
        {
            q: "'We went to Bali last year.' adalah contoh...",
            options: ["Simple Present", "Simple Past", "Present Perfect", "Past Continuous"],
            correct: 1,
            explanation: "'Went' adalah V2, sesuai rumus Simple Past (S+V2+O) pada materi 16 Tenses untuk kejadian yang selesai di masa lalu."
        },
        {
            q: "Rumus Future Perfect Continuous adalah...",
            options: ["S+will+have+been+V-ing", "S+will+have+V3", "S+will+be+V-ing", "S+will+V1"],
            correct: 0,
            explanation: "Materi 16 Tenses menuliskan rumus Future Perfect Continuous sebagai S+will+have+been+V-ing untuk kejadian yang akan sudah berlangsung."
        },
        {
            q: "'She had been waiting for an hour when the bus arrived.' adalah contoh tense...",
            options: ["Past Perfect", "Past Perfect Continuous", "Present Perfect Continuous", "Past Continuous"],
            correct: 1,
            explanation: "Rumus had+been+V-ing sesuai materi 16 Tenses adalah ciri Past Perfect Continuous."
        },
        {
            q: "Kalimat pengandaian tipe 2 (Conditional Type 2) biasanya menggunakan kategori tense...",
            options: ["Simple Past Future", "Simple Future", "Simple Present", "Present Perfect"],
            correct: 0,
            explanation: "Materi 16 Tenses kategori Past Future menjelaskan Simple Past Future (would/should+V1) sering dipakai pada pengandaian tipe 2."
        },
        {
            q: "Rumus S+would+have+V3 termasuk tense...",
            options: ["Past Future Continuous", "Past Future Perfect", "Future Perfect", "Past Perfect"],
            correct: 1,
            explanation: "Sesuai materi 16 Tenses, Past Future Perfect memakai would/should+have+V3, biasa dipakai pada pengandaian tipe 3."
        },
        {
            q: "'He will be studying at 8 PM tonight.' adalah contoh...",
            options: ["Future Continuous", "Simple Future", "Future Perfect", "Present Continuous"],
            correct: 0,
            explanation: "Rumus will+be+V-ing pada materi 16 Tenses adalah ciri Future Continuous, kejadian yang akan sedang berlangsung pada waktu tertentu."
        },

        // --- Modal Auxiliary (4) ---
        {
            q: "Setelah Modal Auxiliary (can, must, should, dll), verb yang mengikuti berbentuk...",
            options: ["V1", "V1+s/es", "V-ing", "V3"],
            correct: 0,
            explanation: "Materi Modal Auxiliary poin 3 menyebutkan modal selalu diikuti V1 (bare infinitive) tanpa to, tanpa s/es, tanpa -ing."
        },
        {
            q: "Kalimat mana yang benar menggunakan Semi-Modal 'have to'?",
            options: ["She has to go now.", "She have to goes now.", "She has go now.", "She to has go now."],
            correct: 0,
            explanation: "Materi Modal Auxiliary menjelaskan Semi-Modal have to/has to berubah bentuk mengikuti subject (has untuk He/She/It) dan diikuti 'to'+V1."
        },
        {
            q: "Perbedaan utama 'must' dan 'have to' menurut materi adalah...",
            options: ["Must dari aturan eksternal, have to dari opini pribadi", "Must dari opini pribadi, have to dari aturan eksternal", "Keduanya sama persis", "Must hanya untuk masa lalu"],
            correct: 1,
            explanation: "Materi perbandingan Must vs Have to menyatakan must = keharusan dari opini/perasaan pembicara sendiri, have to = keharusan dari aturan/keadaan eksternal."
        },
        {
            q: "Bentuk lampau dari 'must' untuk menyatakan keharusan di masa lalu adalah...",
            options: ["musted", "must have", "had to", "would must"],
            correct: 2,
            explanation: "Materi Modal Auxiliary menegaskan 'must' tidak punya bentuk lampau, sehingga untuk masa lalu digunakan 'had to'."
        },

        // --- Passive Voice (4) ---
        {
            q: "Rumus dasar Passive Voice adalah...",
            options: ["S+V3+To Be", "S+To Be+V3+(by+pelaku)", "S+V1+by+pelaku", "S+do/does+V3"],
            correct: 1,
            explanation: "Materi Passive Voice poin 2 menuliskan rumus dasar Subject+To Be+V3+(by+pelaku)."
        },
        {
            q: "Ubah kalimat aktif 'She writes a letter.' menjadi pasif yang benar.",
            options: ["A letter is written by her.", "A letter was written by her.", "A letter writes by her.", "A letter is writing by her."],
            correct: 0,
            explanation: "Karena kalimat aktif Simple Present, To Be yang dipakai 'is', dan pronoun subjek 'she' berubah menjadi objektif 'her' setelah 'by', sesuai materi Passive Voice."
        },
        {
            q: "Verb apa yang bisa diubah menjadi Passive Voice?",
            options: ["Intransitive Verb", "Transitive Verb (punya object)", "Linking Verb", "Modal Verb"],
            correct: 1,
            explanation: "Materi Passive Voice poin 4 menegaskan hanya kalimat verbal dengan Transitive Verb (punya object) yang bisa dipasifkan."
        },
        {
            q: "Rumus Passive Voice untuk Present Continuous adalah...",
            options: ["S+am/is/are+V3", "S+am/is/are+being+V3", "S+have/has+been+V3", "S+was/were+being+V3"],
            correct: 1,
            explanation: "Tabel Passive Voice per tense menuliskan Present Continuous pasif sebagai S+am/is/are+being+V3."
        }
    ],

    // ==========================================================
    // SESI 2: FILL IN THE BLANK (30 SOAL)
    // ==========================================================
    fill_blank: [
        // --- Pre-requisite (5) ---
        { q: "I ___ (adalah) a student.", answer: "am",
          explanation: "Subject 'I' selalu memakai To Be 'am' sesuai Tabel Ringkasan Auxiliary Verb di materi Pre-requisite." },
        { q: "He ___ (menonton) TV every day.", answer: "watches",
          explanation: "Verb 'watch' berakhiran 'ch', sesuai aturan Pre-requisite poin 2 ditambah +es menjadi 'watches' untuk subject He." },
        { q: "The news ___ (adalah) shocking.", answer: "is",
          explanation: "Materi Subject-Verb Agreement menyebut 'news' dianggap tunggal, sehingga memakai To Be 'is'." },
        { q: "___ (Apakah) you like coffee?", answer: "Do",
          explanation: "Subject 'you' memakai auxiliary 'do' untuk kalimat tanya Simple Present, sesuai materi Pre-requisite poin 4." },
        { q: "They ___ (telah pergi) before I arrived.", answer: "had left",
          explanation: "Auxiliary 'had' + V3 membentuk Past Perfect, sesuai materi Pre-requisite poin 5 tentang has/have/had." },

        // --- Verbal & Nominal (2) ---
        { q: "She ___ (adalah) a doctor.", answer: "is",
          explanation: "Predikat 'a doctor' adalah noun, sehingga kalimat nominal wajib memakai To Be 'is'." },
        { q: "I ___ (makan) an apple every morning.", answer: "eat",
          explanation: "Kalimat verbal memakai kata kerja utama sebagai predikat tanpa To Be, sesuai materi Verbal & Nominal." },

        // --- Part of Speech (5) ---
        { q: "She is sitting ___ (di atas) the chair.", answer: "on",
          explanation: "Preposition 'on' menunjukkan lokasi, sesuai materi Part of Speech bagian Preposition." },
        { q: "I like tea ___ (tetapi) he likes coffee.", answer: "but",
          explanation: "Conjunction 'but' menghubungkan dua klausa yang berlawanan, sesuai materi Part of Speech bagian Conjunction." },
        { q: "___ (Wah)! That is a beautiful painting.", answer: "Wow",
          explanation: "Interjection digunakan untuk mengekspresikan reaksi terkejut, seperti 'Wow' pada materi Part of Speech bagian Interjection." },
        { q: "The ___ (indah) big red table.", answer: "beautiful",
          explanation: "Dalam urutan LA-DA-N, 'beautiful' termasuk DA 2 - Quality yang ditempatkan sebelum size dan color." },
        { q: "This is the ___ (buku) I bought yesterday.", answer: "book",
          explanation: "'Book' adalah Common Noun, sesuai materi Part of Speech bagian Noun." },

        // --- 16 Tenses (10) ---
        { q: "She ___ (membaca) a book every day.", answer: "reads",
          explanation: "Simple Present untuk subject She memakai V1+s, sesuai rumus S+V1(s/es)." },
        { q: "They ___ (sedang bermain) football now.", answer: "are playing",
          explanation: "Present Continuous memakai S+am/is/are+V-ing, subject jamak 'they' memakai 'are'." },
        { q: "I have ___ (menyelesaikan) my homework.", answer: "finished",
          explanation: "Present Perfect memakai have/has+V3, sehingga 'finish' menjadi V3 'finished'." },
        { q: "We ___ (pergi) to Bali last year.", answer: "went",
          explanation: "Simple Past memakai V2, bentuk V2 dari 'go' adalah 'went'." },
        { q: "I ___ (sedang tidur) when you called.", answer: "was sleeping",
          explanation: "Past Continuous memakai was/were+V-ing, subject 'I' memakai 'was'." },
        { q: "They had ___ (pergi) before I arrived.", answer: "left",
          explanation: "Past Perfect memakai had+V3, bentuk V3 dari 'leave' adalah 'left'." },
        { q: "I ___ (akan menelepon) you tomorrow.", answer: "will call",
          explanation: "Simple Future memakai will+V1 untuk kejadian di masa depan." },
        { q: "By next week, we ___ (akan telah menyelesaikan) the project.", answer: "will have finished",
          explanation: "Future Perfect memakai will+have+V3 untuk kejadian yang akan selesai sebelum waktu tertentu." },
        { q: "If I had money, I ___ (akan membeli) a car.", answer: "would buy",
          explanation: "Simple Past Future (would+V1) dipakai pada pengandaian tipe 2, sesuai materi 16 Tenses kategori Past Future." },
        { q: "She ___ (telah tinggal) here since 2020.", answer: "has lived",
          explanation: "Present Perfect (has+V3) dipakai untuk kejadian yang mulai di masa lalu dan masih berlanjut, biasa dengan 'since'." },

        // --- Modal Auxiliary (4) ---
        { q: "She can ___ (berbicara) English fluently.", answer: "speak",
          explanation: "Setelah modal 'can' verb harus V1 tanpa tambahan apapun, sesuai materi Modal Auxiliary poin 3." },
        { q: "You ___ (harus, karena aturan) wear a helmet.", answer: "have to",
          explanation: "Keharusan dari aturan eksternal memakai Semi-Modal 'have to', sesuai perbandingan Must vs Have to." },
        { q: "He ___ (seharusnya) study harder.", answer: "should",
          explanation: "Modal 'should' berfungsi memberi saran, sesuai tabel fungsi Modal Auxiliary." },
        { q: "Yesterday, I ___ (harus) go to the dentist.", answer: "had to",
          explanation: "Karena 'must' tidak punya bentuk lampau, materi Modal Auxiliary menegaskan digunakan 'had to' untuk masa lalu." },

        // --- Passive Voice (4) ---
        { q: "The room ___ (dibersihkan) every day.", answer: "is cleaned",
          explanation: "Passive Simple Present memakai am/is/are+V3, sesuai tabel Passive Voice per tense." },
        { q: "The letter ___ (ditulis) by him yesterday.", answer: "was written",
          explanation: "Passive Simple Past memakai was/were+V3, 'write' menjadi V3 'written'." },
        { q: "The homework ___ (sedang dikerjakan) now.", answer: "is being done",
          explanation: "Passive Present Continuous memakai am/is/are+being+V3, sesuai tabel Passive Voice." },
        { q: "The project ___ (akan telah diselesaikan) by noon.", answer: "will have been finished",
          explanation: "Passive Future Perfect memakai will+have+been+V3, sesuai tabel Passive Voice per tense." }
    ],

    // ==========================================================
    // SESI 3: ERROR IDENTIFICATION (30 SOAL)
    // ==========================================================
    error_ident: [
        // --- Pre-requisite (5) ---
        { q: "She {are} {a} {kind} {teacher}.", options: ["are", "a", "kind", "teacher"], correct: 0,
          explanation: "Subject 'She' seharusnya memakai To Be 'is', bukan 'are', sesuai Tabel Ringkasan Auxiliary Verb di Pre-requisite." },
        { q: "He {watch} TV {every} {night}.", options: ["watch", "every", "night", "TV"], correct: 0,
          explanation: "Subject He membutuhkan V1+s/es, seharusnya 'watches', bukan 'watch', sesuai aturan Pre-requisite poin 2." },
        { q: "{Everyone} {are} {happy} {today}.", options: ["Everyone", "are", "happy", "today"], correct: 1,
          explanation: "'Everyone' selalu dianggap subject tunggal sehingga memakai 'is', bukan 'are', sesuai materi Subject-Verb Agreement." },
        { q: "She {does not} {plays} {badminton} {well}.", options: ["does not", "plays", "badminton", "well"], correct: 1,
          explanation: "Setelah 'does not', verb harus kembali ke V1 yaitu 'play', bukan 'plays', sesuai materi Do/Does/Did." },
        { q: "They {has} {finished} {their} {homework}.", options: ["has", "finished", "their", "homework"], correct: 0,
          explanation: "Subject jamak 'they' memakai 'have', bukan 'has', sesuai tabel Has/Have/Had." },

        // --- Verbal & Nominal (2) ---
        { q: "She {is} {go} {to} {school}.", options: ["is", "go", "to", "school"], correct: 1,
          explanation: "To Be tidak boleh langsung diikuti V1 tanpa -ing; seharusnya 'going', sesuai materi Pre-requisite tentang kesalahan umum To Be." },
        { q: "I {am} {in} {the classroom} {yesterday}.", options: ["am", "in", "the classroom", "yesterday"], correct: 0,
          explanation: "Kata 'yesterday' menunjukkan masa lalu, sehingga To Be seharusnya 'was', bukan 'am'." },

        // --- Part of Speech (5) ---
        { q: "She {speaks} English {very} {quick}.", options: ["speaks", "very", "quick", "English"], correct: 2,
          explanation: "Setelah 'very' seharusnya memakai Adverb 'quickly', bukan Adjective 'quick', karena menjelaskan verb 'speaks', sesuai materi Part of Speech bagian Adverb." },
        { q: "I {like} {they} {and} {her}.", options: ["like", "they", "and", "her"], correct: 1,
          explanation: "Setelah verb 'like' seharusnya memakai Objective Pronoun 'them', bukan Subjective Pronoun 'they', sesuai materi Part of Speech bagian Pronoun." },
        { q: "She bought {red the} {big} {wooden} {table}.", options: ["red the", "big", "wooden", "table"], correct: 0,
          explanation: "Urutan yang benar adalah Article dahulu baru Descriptive Adjective, seharusnya 'the big red wooden', bukan 'red the', sesuai rumus LA-DA-N." },
        { q: "{They} {is} {my} {close} friends.", options: ["They", "is", "my", "close"], correct: 1,
          explanation: "Subject jamak 'they' seharusnya memakai 'are', bukan 'is', sesuai materi Subject-Verb Agreement." },
        { q: "Wow! That {are} {a} beautiful painting {today}.", options: ["are", "a", "today", "beautiful"], correct: 0,
          explanation: "Subject 'That' bersifat tunggal, seharusnya memakai To Be 'is', bukan 'are', sesuai materi Subject-Verb Agreement, sementara 'Wow' sudah tepat sebagai Interjection." },

        // --- 16 Tenses (10) ---
        { q: "She {reads} a book {every} {days}.", options: ["reads", "every", "days", "book"], correct: 2,
          explanation: "Setelah 'every' seharusnya noun singular 'day', bukan 'days', pada frasa keterangan waktu kebiasaan." },
        { q: "The boys {is} playing football {in} the {yard} {now}.", options: ["is", "in", "yard", "now"], correct: 0,
          explanation: "Subject jamak 'the boys' pada Present Continuous seharusnya memakai 'are', bukan 'is', sesuai rumus S+am/is/are+V-ing." },
        { q: "She {has} {go} to the market {with} her {mother}.", options: ["has", "go", "with", "mother"], correct: 1,
          explanation: "Setelah 'has' (Present Perfect) verb harus V3, seharusnya 'gone', bukan 'go', sesuai rumus have/has+V3." },
        { q: "I {will} {bought} a new {phone} {tomorrow}.", options: ["will", "bought", "phone", "tomorrow"], correct: 1,
          explanation: "Setelah modal 'will' (Simple Future) verb harus V1, seharusnya 'buy', bukan 'bought'." },
        { q: "He {did} {not} {knew} the answer to {that} question.", options: ["did", "not", "knew", "that"], correct: 2,
          explanation: "Setelah 'did not' (Simple Past negatif) verb harus V1, seharusnya 'know', bukan 'knew', sesuai materi Do/Does/Did." },
        { q: "The students {was} studying {for} the exam {yesterday}.", options: ["was", "studying", "for", "yesterday"], correct: 0,
          explanation: "Subject jamak 'the students' pada Past Continuous seharusnya memakai 'were', bukan 'was'." },
        { q: "We {has} finished the {assignment} before {lunch}.", options: ["has", "assignment", "before", "lunch"], correct: 0,
          explanation: "Subject 'we' pada Present Perfect seharusnya memakai 'have', bukan 'has'." },
        { q: "By next month, I {will have finish} this {project}.", options: ["will have finish", "project", "next", "month"], correct: 0,
          explanation: "Rumus Future Perfect adalah will+have+V3, seharusnya 'will have finished', bukan 'will have finish'." },
        { q: "If it {will rain}, we {will stay} at home.", options: ["will rain", "will stay", "at", "home"], correct: 0,
          explanation: "Pada Conditional Type 1, klausa 'if' memakai Simple Present, seharusnya 'rains', bukan 'will rain'." },
        { q: "She {had been} waiting {for} an hour when the bus {arrive}.", options: ["had been", "for", "arrive", "hour"], correct: 2,
          explanation: "Klausa kedua dengan 'when' pada konteks Past Perfect Continuous memakai Simple Past, seharusnya 'arrived', bukan 'arrive'." },

        // --- Modal Auxiliary (4) ---
        { q: "He {can} {plays} the guitar {very} well.", options: ["can", "plays", "very", "well"], correct: 1,
          explanation: "Setelah modal 'can' verb harus V1, seharusnya 'play', bukan 'plays', sesuai aturan Modal Auxiliary." },
        { q: "You {should} {to study} harder {every} day.", options: ["should", "to study", "every", "day"], correct: 1,
          explanation: "Modal 'should' langsung diikuti V1 tanpa 'to', seharusnya 'study', bukan 'to study'." },
        { q: "She {has} {go} to work {every} morning.", options: ["has", "go", "every", "morning"], correct: 1,
          explanation: "Semi-Modal 'has to' diikuti 'to'+V1, kalimat ini kehilangan kata 'to' sehingga seharusnya 'has to go'." },
        { q: "He {musts} go now {because} of the {deadline}.", options: ["musts", "because", "deadline", "now"], correct: 0,
          explanation: "Modal 'must' tidak boleh ditambah -s meski subject He/She/It, seharusnya 'must', bukan 'musts'." },

        // --- Passive Voice (4) ---
        { q: "The food {is} {cook} {by} her.", options: ["is", "cook", "by", "her"], correct: 1,
          explanation: "Rumus Passive Voice adalah To Be+V3, seharusnya 'cooked', bukan 'cook'." },
        { q: "The letter {was} {write} {by} him {yesterday}.", options: ["was", "write", "by", "yesterday"], correct: 1,
          explanation: "Rumus Passive Voice Simple Past adalah was/were+V3, seharusnya 'written', bukan 'write'." },
        { q: "A letter {is} written {by} {she}.", options: ["is", "written", "by", "she"], correct: 3,
          explanation: "Kata ganti setelah 'by' harus bentuk objektif, seharusnya 'her', bukan 'she', sesuai aturan Passive Voice poin 4." },
        { q: "The room {was} {being clean} {at} 8 AM.", options: ["was", "being clean", "at", "8 AM"], correct: 1,
          explanation: "Rumus Passive Past Continuous adalah was/were+being+V3, seharusnya 'being cleaned', bukan 'being clean'." }
    ],

    // ==========================================================
    // SESI 4: ESSAY (30 SOAL)
    // ==========================================================
    essay: [
        // --- Pre-requisite (5) ---
        { q: "Jelaskan kapan To Be wajib digunakan dalam sebuah kalimat, dan berikan dua contoh.",
          ref_answer: "To Be wajib dipakai sebagai predikat utama kalimat nominal (predikat noun/adjective/adverb), dan sebagai auxiliary pada Continuous/Passive. Contoh: 'She is a teacher.' dan 'The book was written by him.'",
          explanation: "Sesuai materi Pre-requisite poin 1, jawaban baik menyebutkan dua fungsi To Be: predikat nominal dan auxiliary." },
        { q: "Jelaskan tiga aturan penambahan s/es pada V1 dan berikan masing-masing satu contoh.",
          ref_answer: "Verb berakhiran ss/sh/ch/x/o/z ditambah +es (watch→watches); verb berakhiran konsonan+y, y diganti +ies (cry→cries); verb lainnya ditambah +s (eat→eats).",
          explanation: "Merujuk pada materi Pre-requisite poin 2 tentang aturan V1/s/es." },
        { q: "Jelaskan aturan Subject-Verb Agreement untuk kata seperti 'everyone' dan 'the news'.",
          ref_answer: "Kata seperti everyone, somebody, each, either, serta uncountable noun seperti news dan mathematics, dianggap subject tunggal, sehingga verb/To Be mengikuti bentuk tunggal (is/was/verb+s).",
          explanation: "Sesuai materi Pre-requisite poin 3 tentang Subject-Verb Agreement." },
        { q: "Jelaskan fungsi do/does/did dan bagaimana bentuk verb setelahnya.",
          ref_answer: "Do/does/did dipakai membentuk kalimat negatif dan tanya pada Simple Present/Past (kalimat verbal). Verb setelahnya selalu kembali ke V1, misalnya 'She does not play badminton.'",
          explanation: "Merujuk materi Pre-requisite poin 4 tentang Do/Does/Did." },
        { q: "Jelaskan fungsi has/have/had dan bentuk verb yang mengikutinya.",
          ref_answer: "Has/have/had adalah auxiliary pembentuk Perfect Tense, selalu diikuti V3 (Past Participle). Contoh: 'She has finished her homework.'",
          explanation: "Sesuai materi Pre-requisite poin 5 tentang Has/Have/Had." },

        // --- Verbal & Nominal (2) ---
        { q: "Jelaskan perbedaan kalimat Verbal dan Nominal beserta rumus masing-masing.",
          ref_answer: "Kalimat Verbal: S+Verb+(O/C), predikat kata kerja utama. Kalimat Nominal: S+To Be+Complement, predikat noun/adjective/adverb.",
          explanation: "Sesuai materi Verbal & Nominal." },
        { q: "Buat masing-masing dua contoh kalimat Verbal dan Nominal.",
          ref_answer: "Verbal: 'She plays badminton.', 'They watched a movie.' Nominal: 'She is smart.', 'They were students.'",
          explanation: "Jawaban dinilai benar jika kalimat verbal tidak memakai To Be sebagai predikat utama, dan kalimat nominal memakai To Be." },

        // --- Part of Speech (5) ---
        { q: "Sebutkan 8 Part of Speech beserta masing-masing satu contoh kata.",
          ref_answer: "Noun (book), Verb (write), Pronoun (they), Adjective (beautiful), Adverb (quickly), Preposition (in), Conjunction (and), Interjection (wow).",
          explanation: "Sesuai daftar 8 kelas kata pada materi Part of Speech." },
        { q: "Jelaskan rumus urutan Adjective LA-DA-N dan buat satu contoh Noun Phrase.",
          ref_answer: "Urutan: Limiting Adjective (article/demonstrative/possessive/quantity/numeral) lalu Descriptive Adjective (quality, size, age, shape, color, nationality) lalu Noun. Contoh: 'The beautiful big red Indonesian table.'",
          explanation: "Sesuai materi Part of Speech bagian Adjective (LA-DA-N)." },
        { q: "Jelaskan perbedaan Action Verb, Linking Verb, dan Helping Verb beserta contoh.",
          ref_answer: "Action Verb menyatakan tindakan (run, eat); Linking Verb menghubungkan subject dengan complement (is, seem); Helping Verb mendampingi verb utama (have, do, will).",
          explanation: "Sesuai materi Part of Speech bagian Verb." },
        { q: "Jelaskan tiga jenis Pronoun beserta contohnya.",
          ref_answer: "Subjective (I, she), Objective (me, her), Possessive (mine, hers).",
          explanation: "Sesuai materi Part of Speech bagian Pronoun." },
        { q: "Jelaskan fungsi Conjunction dan Preposition, sertakan masing-masing satu contoh kalimat.",
          ref_answer: "Conjunction menghubungkan kata/klausa: 'I like tea but he likes coffee.' Preposition menunjukkan arah/waktu/tempat: 'She is sitting on the chair.'",
          explanation: "Sesuai materi Part of Speech bagian Conjunction dan Preposition." },

        // --- 16 Tenses (10) ---
        { q: "Jelaskan rumus dan fungsi Simple Present Tense, sertakan contoh.",
          ref_answer: "S+V1(s/es) untuk fakta/kebiasaan. Contoh: 'She reads a book every day.'",
          explanation: "Sesuai data 16 Tenses kategori Present." },
        { q: "Jelaskan perbedaan Simple Present dan Present Continuous beserta contoh masing-masing.",
          ref_answer: "Simple Present untuk kebiasaan/fakta ('She reads every day'), Present Continuous untuk kejadian sedang berlangsung ('She is reading now').",
          explanation: "Sesuai perbandingan tenses kategori Present." },
        { q: "Jelaskan fungsi Present Perfect dan Present Perfect Continuous beserta contoh.",
          ref_answer: "Present Perfect: kejadian selesai tapi berdampak sekarang ('I have finished my homework'). Present Perfect Continuous: kejadian dimulai di masa lalu dan masih berlangsung ('He has been working here for 2 years').",
          explanation: "Sesuai data 16 Tenses kategori Present." },
        { q: "Jelaskan perbedaan Simple Past dan Past Continuous, sertakan contoh.",
          ref_answer: "Simple Past: kejadian selesai di masa lalu ('We went to Bali last year'). Past Continuous: kejadian sedang berlangsung pada titik waktu tertentu di masa lalu ('I was sleeping when you called').",
          explanation: "Sesuai data 16 Tenses kategori Past." },
        { q: "Jelaskan fungsi Past Perfect dan berikan satu contoh.",
          ref_answer: "Past Perfect menyatakan kejadian yang selesai sebelum kejadian lain di masa lalu. Contoh: 'They had left before I arrived.'",
          explanation: "Sesuai data 16 Tenses kategori Past." },
        { q: "Jelaskan rumus dan fungsi Simple Future Tense beserta contoh.",
          ref_answer: "S+will/shall+V1 untuk kejadian di masa depan. Contoh: 'I will call you tomorrow.'",
          explanation: "Sesuai data 16 Tenses kategori Future." },
        { q: "Jelaskan perbedaan Future Perfect dan Future Perfect Continuous beserta contoh.",
          ref_answer: "Future Perfect: kejadian akan selesai pada waktu tertentu ('We will have finished the project by next week'). Future Perfect Continuous: kejadian akan sudah berlangsung selama waktu tertentu ('By next year, I will have been working here for 5 years').",
          explanation: "Sesuai data 16 Tenses kategori Future." },
        { q: "Jelaskan kategori Past Future Tense dan kapan biasanya digunakan.",
          ref_answer: "Past Future (would/should+V1) biasa dipakai pada pengandaian (conditional sentence), misalnya 'I would buy a car if I had money.'",
          explanation: "Sesuai data 16 Tenses kategori Past Future." },
        { q: "Jelaskan rumus Past Future Perfect dan berikan contoh.",
          ref_answer: "S+would/should+have+V3, dipakai pada pengandaian tipe 3. Contoh: 'She would have passed the exam if she had studied.'",
          explanation: "Sesuai data 16 Tenses kategori Past Future." },
        { q: "Buat satu paragraf pendek (minimal 4 kalimat) menggunakan minimal tiga tense berbeda.",
          ref_answer: "Contoh: 'I usually wake up at 6 AM. This morning, I was cooking breakfast when my phone rang. I have already finished my chores today. Tomorrow, I will visit my grandmother.'",
          explanation: "Jawaban dinilai dari ketepatan penggunaan minimal tiga tense berbeda sesuai materi 16 Tenses." },

        // --- Modal Auxiliary (4) ---
        { q: "Jelaskan perbedaan Modal Auxiliary dan Semi-Modal Auxiliary beserta aturan bentuk verb setelahnya.",
          ref_answer: "Modal (can, must, should, dll) diikuti langsung V1 tanpa 'to'. Semi-Modal (have to, need to, be going to, dll) diikuti 'to'+V1 dan bisa berubah bentuk mengikuti subject.",
          explanation: "Sesuai materi Modal Auxiliary poin 1 dan 3." },
        { q: "Jelaskan perbedaan 'must' dan 'have to', sertakan contoh masing-masing.",
          ref_answer: "Must = keharusan dari opini pribadi ('I must finish this today.'), Have to = keharusan dari aturan eksternal ('I have to wear a helmet.').",
          explanation: "Sesuai perbandingan Must vs Have to di materi Modal Auxiliary." },
        { q: "Sebutkan lima fungsi Modal beserta contohnya (can, could, may, should, must).",
          ref_answer: "Can (kemampuan: 'I can swim'), Could (kemampuan masa lalu: 'I could swim as a kid'), May (izin: 'May I leave?'), Should (saran: 'You should rest'), Must (keharusan: 'You must finish this').",
          explanation: "Sesuai tabel fungsi Modal Auxiliary." },
        { q: "Jelaskan mengapa 'must' tidak bisa dipakai untuk menyatakan keharusan di masa lalu, dan apa penggantinya.",
          ref_answer: "Must tidak memiliki bentuk lampau, sehingga untuk keharusan di masa lalu digunakan 'had to'. Contoh: 'Yesterday, I had to go to the dentist.'",
          explanation: "Sesuai catatan penting materi Modal Auxiliary tentang Must vs Had to." },

        // --- Passive Voice (4) ---
        { q: "Jelaskan rumus dasar Passive Voice dan tiga langkah mengubah kalimat aktif menjadi pasif.",
          ref_answer: "Rumus: S+To Be+V3+(by+pelaku). Langkah: (1) object aktif menjadi subject pasif, (2) verb diubah menjadi To Be+V3 sesuai tense, (3) subject aktif dipindah ke belakang dengan 'by' (boleh dihilangkan).",
          explanation: "Sesuai materi Passive Voice poin 2." },
        { q: "Ubah kalimat 'The chef cooks the food.' menjadi Passive Voice dan jelaskan alasannya.",
          ref_answer: "The food is cooked by the chef. Karena tense Simple Present, To Be yang dipakai 'is', dan objek 'the food' menjadi subject.",
          explanation: "Sesuai contoh materi Passive Voice bagian Definisi." },
        { q: "Jelaskan syarat sebuah kalimat aktif bisa diubah menjadi Passive Voice.",
          ref_answer: "Hanya kalimat verbal dengan Transitive Verb (memiliki object) yang bisa diubah menjadi pasif; kalimat tanpa object seperti 'He sleeps.' tidak bisa dipasifkan.",
          explanation: "Sesuai materi Passive Voice poin 4 aturan penting." },
        { q: "Jelaskan empat fungsi/kegunaan Passive Voice beserta contohnya.",
          ref_answer: "Menekankan objek/hasil ('My phone was stolen'), konteks formal/ilmiah ('The experiment was conducted...'), menghindari menyalahkan langsung ('A mistake was made'), pelaku sudah jelas ('He was arrested yesterday').",
          explanation: "Sesuai materi Passive Voice poin 5 tentang fungsi." }
    ]
};
