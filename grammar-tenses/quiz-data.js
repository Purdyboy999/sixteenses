// File ini berisi kumpulan soal untuk kuis. 
// Anda dapat menambah, mengubah, atau menghapus soal di bawah ini sesuai kebutuhan.

const quizData = {
    multiple_choice: [
    {
        q: "Manakah di bawah ini yang merupakan kalimat Nominal?",
        options: ["She runs fast.", "He is very smart.", "They played football.", "I love apples."],
        correct: 1
    },
    {
        q: "Apa fungsi utama dari Adverb (Kata Keterangan)?",
        options: ["Menjelaskan Noun", "Menjelaskan Verb, Adjective, atau Adverb lain", "Menggantikan Noun", "Menghubungkan kalimat"],
        correct: 1
    },
    {
        q: "Tenses apa yang menggunakan rumus S + will + have + V3?",
        options: ["Future Continuous", "Future Perfect", "Past Perfect", "Simple Future"],
        correct: 1
    },
    {
        q: "Kata 'beautiful' termasuk dalam kelas kata...",
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correct: 2
    },
    {
        q: "Pilih kalimat yang benar berdasarkan urutan Adjective LA-DA-N.",
        options: ["The red big wooden table", "The big red wooden table", "Wooden big red table", "The table wooden big red"],
        correct: 1
    },
    {
        q: "Manakah yang termasuk Verb?",
        options: ["Quickly", "Happy", "Write", "Book"],
        correct: 2
    },
    {
        q: "Present Continuous menggunakan rumus...",
        options: ["S + V1", "S + is/am/are + V-ing", "S + has + V3", "S + was + V2"],
        correct: 1
    },
    {
        q: "Kalimat 'She is beautiful.' termasuk...",
        options: ["Verbal Sentence", "Nominal Sentence", "Passive Voice", "Imperative"],
        correct: 1
    },
    {
        q: "Past Tense dari 'go' adalah...",
        options: ["Gone", "Went", "Going", "Goes"],
        correct: 1
    },
    {
        q: "Manakah yang merupakan Pronoun?",
        options: ["Table", "Quickly", "They", "Beautiful"],
        correct: 2
    },
    {
        q: "Future Continuous menggunakan rumus...",
        options: [
            "S + will + V1",
            "S + will be + V-ing",
            "S + has + V3",
            "S + was + V-ing"
        ],
        correct: 1
    },
    {
        q: "Kata 'carefully' termasuk...",
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correct: 3
    },
    {
        q: "Present Perfect menggunakan rumus...",
        options: [
            "S + have/has + V3",
            "S + V2",
            "S + is + V-ing",
            "S + will + V1"
        ],
        correct: 0
    },
    {
        q: "Passive Voice membutuhkan...",
        options: [
            "Verb 2",
            "To Be + Verb 3",
            "Verb 1",
            "Adjective"
        ],
        correct: 1
    },
    {
        q: "Manakah yang merupakan Countable Noun?",
        options: ["Water", "Milk", "Book", "Rice"],
        correct: 2
    },
    {
        q: "Modal 'must' digunakan untuk...",
        options: [
            "Kemungkinan",
            "Keharusan",
            "Masa lalu",
            "Kebiasaan"
        ],
        correct: 1
    },
    {
        q: "Conditional Sentence Type 1 menggunakan...",
        options: [
            "If + Present, Future",
            "If + Past, Would",
            "If + Past Perfect, Would Have",
            "If + Future, Present"
        ],
        correct: 0
    },
    {
        q: "Gerund adalah Verb yang berubah menjadi...",
        options: [
            "Noun",
            "Adjective",
            "Adverb",
            "Pronoun"
        ],
        correct: 0
    },
    {
        q: "Infinitive biasanya diawali dengan...",
        options: [
            "At",
            "To",
            "In",
            "On"
        ],
        correct: 1
    },
    {
        q: "Manakah contoh Relative Pronoun?",
        options: [
            "Who",
            "Can",
            "Must",
            "Very"
        ],
        correct: 0
    },
    {
        q: "Past Perfect menggunakan rumus...",
        options: [
            "S + had + V3",
            "S + have + V3",
            "S + V2",
            "S + was + V-ing"
        ],
        correct: 0
    },
    {
        q: "Kalimat 'The cake was eaten by John.' termasuk...",
        options: [
            "Active Voice",
            "Passive Voice",
            "Nominal Sentence",
            "Simple Present"
        ],
        correct: 1
    },
    {
        q: "Manakah yang merupakan Conjunction?",
        options: [
            "Beautiful",
            "And",
            "Quickly",
            "Teacher"
        ],
        correct: 1
    },
    {
        q: "Simple Future menggunakan...",
        options: [
            "Will + V1",
            "Has + V3",
            "Was + V2",
            "Am + V-ing"
        ],
        correct: 0
    },
    {
        q: "Manakah kalimat yang benar?",
        options: [
            "She don't like coffee.",
            "She doesn't likes coffee.",
            "She doesn't like coffee.",
            "She not like coffee."
        ],
        correct: 2
    }
],

    fill_blank: [
    {
        q: "She ___ (membaca) a book every night.",
        answer: "reads"
    },
    {
        q: "They ___ (sedang bermain) football right now.",
        answer: "are playing"
    },
    {
        q: "He is a very ___ (pintar) student.",
        answer: "smart"
    },
    {
        q: "I have ___ (menulis) three letters today.",
        answer: "written"
    },
    {
        q: "My father bought a ___ (baru) car.",
        answer: "new"
    },
    {
        q: "We ___ (belajar) English every Saturday.",
        answer: "study"
    },
    {
        q: "She ___ (sedang memasak) dinner now.",
        answer: "is cooking"
    },
    {
        q: "The students are very ___ (rajin).",
        answer: "diligent"
    },
    {
        q: "They have ___ (menyelesaikan) the project.",
        answer: "finished"
    },
    {
        q: "I ___ (pergi) to school yesterday.",
        answer: "went"
    },
    {
        q: "He ___ (akan membeli) a new laptop next month.",
        answer: "will buy"
    },
    {
        q: "The baby ___ (tidur) when I arrived.",
        answer: "was sleeping"
    },
    {
        q: "We had ___ (makan) before the guests came.",
        answer: "eaten"
    },
    {
        q: "She can ___ (berbicara) English fluently.",
        answer: "speak"
    },
    {
        q: "They ___ (menonton) TV at 8 p.m. last night.",
        answer: "were watching"
    },
    {
        q: "If it rains, I ___ (tinggal) at home.",
        answer: "will stay"
    },
    {
        q: "My brother enjoys ___ (berenang).",
        answer: "swimming"
    },
    {
        q: "She decided ___ (belajar) harder.",
        answer: "to study"
    },
    {
        q: "The homework ___ (dikerjakan) by the students yesterday.",
        answer: "was done"
    },
    {
        q: "The man ___ (yang) lives next door is my uncle.",
        answer: "who"
    },
    {
        q: "This book is ___ (lebih menarik) than that one.",
        answer: "more interesting"
    },
    {
        q: "By next year, I ___ (akan lulus) from college.",
        answer: "will have graduated"
    },
    {
        q: "She ___ (telah tinggal) here since 2020.",
        answer: "has lived"
    },
    {
        q: "The children ___ (bermain) in the park every afternoon.",
        answer: "play"
    },
    {
        q: "I wish I ___ (punya) more free time.",
        answer: "had"
    }
],
    error_ident: [
    {
        q: "The boys {is} playing football {in} the {yard} {now}.",
        options: ["is", "in", "yard", "now"],
        correct: 0
    },
    {
        q: "She {has} {go} to the market {with} her {mother}.",
        options: ["has", "go", "with", "mother"],
        correct: 1
    },
    {
        q: "I {will} {bought} a new {phone} {tomorrow}.",
        options: ["will", "bought", "phone", "tomorrow"],
        correct: 1
    },
    {
        q: "They {are} very {happily} {when} they receive {the} gift.",
        options: ["are", "happily", "when", "the"],
        correct: 1
    },
    {
        q: "He {did} {not} {knew} the answer to {that} question.",
        options: ["did", "not", "knew", "that"],
        correct: 2
    },
    {
        q: "She {don't} like {drinking} coffee {every} morning.",
        options: ["don't", "drinking", "every", "morning"],
        correct: 0
    },
    {
        q: "The students {was} studying {for} the exam {yesterday}.",
        options: ["was", "studying", "for", "yesterday"],
        correct: 0
    },
    {
        q: "We {has} finished the {assignment} before {lunch}.",
        options: ["has", "assignment", "before", "lunch"],
        correct: 0
    },
    {
        q: "My father {drive} to work {every} {day}.",
        options: ["drive", "every", "day", "work"],
        correct: 0
    },
    {
        q: "They {is} going to {visit} Bali {next} week.",
        options: ["is", "visit", "next", "week"],
        correct: 0
    },
    {
        q: "She {were} cooking dinner {when} I {arrived}.",
        options: ["were", "when", "arrived", "dinner"],
        correct: 0
    },
    {
        q: "The book {was write} by {a famous} author {last} year.",
        options: ["was write", "a famous", "last", "year"],
        correct: 0
    },
    {
        q: "He {can} {plays} the guitar {very} well.",
        options: ["can", "plays", "very", "well"],
        correct: 1
    },
    {
        q: "She enjoys {to swim} in the sea {every} summer.",
        options: ["to swim", "in", "every", "summer"],
        correct: 0
    },
    {
        q: "I {have} {see} that movie {twice}.",
        options: ["have", "see", "that", "twice"],
        correct: 1
    },
    {
        q: "If it {will rain}, we {will stay} at home.",
        options: ["will rain", "will stay", "at", "home"],
        correct: 0
    },
    {
        q: "The girl {which} won the competition is my sister.",
        options: ["which", "won", "competition", "sister"],
        correct: 0
    },
    {
        q: "This exercise is {more easier} than the previous one.",
        options: ["more easier", "than", "previous", "one"],
        correct: 0
    },
    {
        q: "By next month, I {will have finish} this project.",
        options: ["will have finish", "this", "project", "next"],
        correct: 0
    },
    {
        q: "There {is} many students {in} the classroom.",
        options: ["is", "many", "in", "classroom"],
        correct: 0
    },
    {
        q: "Neither John nor his friends {is} coming today.",
        options: ["is", "coming", "today", "friends"],
        correct: 0
    },
    {
        q: "Everyone {have} finished {their} homework.",
        options: ["have", "their", "finished", "homework"],
        correct: 0
    },
    {
        q: "The news {are} very surprising today.",
        options: ["are", "very", "surprising", "today"],
        correct: 0
    },
    {
        q: "She {has been} living here {since} five years.",
        options: ["has been", "since", "living", "here"],
        correct: 1
    },
    {
        q: "I wish I {am} taller than my brother.",
        options: ["am", "taller", "than", "brother"],
        correct: 0
    }
],

    essay: [
    {
        q: "Jelaskan perbedaan antara kalimat Verbal dan kalimat Nominal! Berikan masing-masing satu contoh.",
        ref_answer: "Kalimat verbal menggunakan kata kerja utama sebagai predikat. Contoh: She studies English every day. Kalimat nominal menggunakan to be sebagai predikat dan diikuti noun, adjective, atau adverb. Contoh: She is diligent."
    },
    {
        q: "Sebutkan minimal 8 Part of Speech beserta masing-masing satu contoh katanya.",
        ref_answer: "Noun (book), Pronoun (she), Verb (study), Adjective (beautiful), Adverb (quickly), Preposition (in), Conjunction (and), Interjection (wow)."
    },
    {
        q: "Jelaskan fungsi Adjective dalam sebuah kalimat dan berikan dua contoh.",
        ref_answer: "Adjective berfungsi menjelaskan noun atau pronoun. Contoh: beautiful girl, expensive car."
    },
    {
        q: "Apa fungsi Adverb? Sebutkan minimal tiga jenis Adverb beserta contohnya.",
        ref_answer: "Adverb menjelaskan verb, adjective, atau adverb lain. Contoh: quickly (manner), yesterday (time), here (place)."
    },
    {
        q: "Buat satu Noun Phrase menggunakan urutan Adjective (LA-DA-N) yang benar.",
        ref_answer: "The beautiful big red wooden table."
    },
    {
        q: "Jelaskan rumus Simple Present Tense dan kapan digunakan.",
        ref_answer: "S + V1(s/es). Digunakan untuk fakta, kebiasaan, dan rutinitas."
    },
    {
        q: "Jelaskan perbedaan Simple Present dan Present Continuous.",
        ref_answer: "Simple Present untuk kebiasaan, Present Continuous untuk aktivitas yang sedang berlangsung."
    },
    {
        q: "Buat masing-masing satu contoh kalimat menggunakan Simple Past dan Past Continuous.",
        ref_answer: "Simple Past: I visited Bali last year. Past Continuous: I was studying when my friend called."
    },
    {
        q: "Apa yang dimaksud Present Perfect Tense? Kapan tense ini digunakan?",
        ref_answer: "Present Perfect digunakan untuk kejadian yang sudah terjadi tetapi masih berhubungan dengan masa sekarang."
    },
    {
        q: "Jelaskan perbedaan Present Perfect dan Simple Past.",
        ref_answer: "Present Perfect tidak menyebut waktu spesifik, sedangkan Simple Past menyebut waktu yang telah selesai."
    },
    {
        q: "Buat satu contoh kalimat Active Voice kemudian ubah menjadi Passive Voice.",
        ref_answer: "Active: John writes a letter. Passive: A letter is written by John."
    },
    {
        q: "Apa fungsi Modal Verb? Sebutkan lima modal beserta artinya.",
        ref_answer: "Can (bisa), Could (dapat), May (boleh), Must (harus), Should (sebaiknya)."
    },
    {
        q: "Jelaskan perbedaan Gerund dan Infinitive disertai contoh.",
        ref_answer: "Gerund menggunakan V-ing sebagai noun (Swimming is fun). Infinitive menggunakan to + V1 (I want to swim)."
    },
    {
        q: "Apa itu Conditional Sentence Type 1? Berikan satu contoh.",
        ref_answer: "If + Simple Present, Will + V1. Contoh: If it rains, I will stay home."
    },
    {
        q: "Jelaskan perbedaan Conditional Type 1, Type 2, dan Type 3.",
        ref_answer: "Type 1 untuk kemungkinan nyata, Type 2 untuk situasi tidak nyata sekarang, Type 3 untuk penyesalan di masa lalu."
    },
    {
        q: "Apa fungsi Relative Pronoun? Berikan contoh menggunakan who, which, dan that.",
        ref_answer: "Who untuk orang, which untuk benda, that dapat menggantikan keduanya."
    },
    {
        q: "Jelaskan perbedaan Countable dan Uncountable Noun beserta contoh.",
        ref_answer: "Countable dapat dihitung (book, apple), Uncountable tidak dapat dihitung (water, sugar)."
    },
    {
        q: "Apa perbedaan 'since' dan 'for' dalam Present Perfect?",
        ref_answer: "Since menunjukkan titik waktu (since 2020), for menunjukkan durasi (for three years)."
    },
    {
        q: "Jelaskan fungsi Comparative dan Superlative Degree serta berikan contoh.",
        ref_answer: "Comparative membandingkan dua benda (bigger), Superlative membandingkan lebih dari dua (biggest)."
    },
    {
        q: "Mengapa Subject-Verb Agreement penting dalam Bahasa Inggris? Berikan contoh benar dan salah.",
        ref_answer: "Verb harus sesuai dengan subject. Salah: She go. Benar: She goes."
    },
    {
        q: "Perbaiki kalimat berikut: 'She don't likes coffee every morning.'",
        ref_answer: "She doesn't like coffee every morning."
    },
    {
        q: "Perbaiki kalimat berikut: 'The homework were finished yesterday.'",
        ref_answer: "The homework was finished yesterday."
    },
    {
        q: "Buat sebuah paragraf pendek (minimal 5 kalimat) menggunakan minimal tiga jenis tense yang berbeda.",
        ref_answer: "Paragraf memuat Simple Present, Present Continuous, dan Simple Past secara benar."
    },
    {
        q: "Tuliskan lima kalimat yang masing-masing menggunakan tense yang berbeda.",
        ref_answer: "Misalnya menggunakan Simple Present, Present Continuous, Simple Past, Present Perfect, dan Simple Future."
    },
    {
        q: "Menurut Anda, materi grammar apa yang paling sulit dipelajari? Jelaskan alasannya dan berikan contoh.",
        ref_answer: "Jawaban bersifat opini, namun harus disertai alasan dan contoh grammar yang benar."
    }
]
};
