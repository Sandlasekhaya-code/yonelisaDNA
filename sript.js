const questions = [
    {
        question: "During which ONE of the following stages does replication of DNA occur?",
        options: ["Interphase", "Prophase", "Telophase I", "Telophase II"],
        answer: "Interphase"
    },
    {
        question: "When the first child of two parents without any visible genetic disorder was born, it was found to have a serious genetic disorder. The parents were told that a recessive gene caused the disorder. The chances of having another child with the same disorder is …",
        options: ["100%", "50%", "25%", "0%"],
        answer: "25%"
    },
    {
        question: "A nitrogenous base found only in RNA is ...",
        options: ["adenine", "uracil", "guanine", "thymine"],
        answer: "uracil"
    },
    {
        question: "If an analysis of DNA from cells in a human body showed that thymine made up 15% of the nucleotide bases, then the percentage composition of guanine making up the DNA would be …",
        options: ["15%", "70%", "35%", "85%"],
        answer: "35%"
    },
    {
        question: "Two complementary bases in a DNA strand are held together by … bonds.",
        options: ["strong nitrogen", "weak nitrogen", "strong hydrogen", "weak hydrogen"],
        answer: "weak hydrogen"
    },
    {
        question: "The shape of a DNA molecule before DNA replication is:",
        options: ["Double helix", "Single strand", "Circular", "Linear"],
        answer: "Double helix"
    },
    {
        question: "Unspecialised cells which are capable of giving rise to any other cells of the same organism are called:",
        options: ["Red blood cells", "Stem cells", "Muscle cells", "Nerve cells"],
        answer: "Stem cells"
    },
    {
        question: "The disease caused by uncontrolled division of cells is:",
        options: ["Diabetes", "Cancer", "Heart disease", "Osteoporosis"],
        answer: "Cancer"
    },
    {
        question: "The complete set of an organism's genes is called:",
        options: ["Chromosome", "Genome", "DNA strand", "Ribosome"],
        answer: "Genome"
    },
    {
        question: "The process of finding a desirable gene, isolating it, and then moving it into the cells of another organism is:",
        options: ["Genetic mapping", "Gene splicing", "Genetic engineering", "Cloning"],
        answer: "Genetic engineering"
    },
    {
        question: "An arrangement of DNA fragments that can be used to determine whether people are related is called:",
        options: ["Gene sequencing", "Genetic fingerprinting", "Genetic modification", "Karyotyping"],
        answer: "Genetic fingerprinting"
    },
    {
        question: "Type of cell division during which the chromosome number does not change is:",
        options: ["Mitosis", "Meiosis", "Cytokinesis", "Binary fission"],
        answer: "Mitosis"
    },
    {
        question: "The building blocks which form DNA and RNA are:",
        options: ["Proteins", "Nucleotides", "Lipids", "Enzymes"],
        answer: "Nucleotides"
    },
    {
        question: "An organism with a single set of chromosomes is:",
        options: ["Haploid", "Diploid", "Triploid", "Polyploid"],
        answer: "Haploid"
    },
    {
        question: "The number, shape, and arrangement of all chromosomes in the nucleus of a somatic cell is called:",
        options: ["Karyotype", "Phenotype", "Genotype", "Chromatid"],
        answer: "Karyotype"
    },
    {
        question: "An individual that has one dominant allele and one recessive allele for a particular characteristic is:",
        options: ["Homozygous", "Heterozygous", "Polygenic", "Codominant"],
        answer: "Heterozygous"
    },
    {
        question: "Sudden changes in the genetic makeup of an organism are called:",
        options: ["Contraception", "Mutation", "Fertilization", "Replication"],
        answer: "Mutation"
    },
    {
        question: "Structures that carry genetic material are:",
        options: ["Genes", "Chromosomes", "Nuclei", "Proteins"],
        answer: "Chromosomes"
    },
    {
        question: "The genotype of blood group AB is:",
        options: ["IA i", "IB i", "IA IB", "ii"],
        answer: "IA IB"
    },
    {
        question: "Which of the following best describes transcription?",
        options: ["The process of copying DNA into mRNA.", "The process of converting mRNA into a protein.", "The process of synthesizing DNA from RNA.", "The process of breaking down RNA into amino acids."],
        answer: "The process of copying DNA into mRNA."
    },
    {
        question: "Which of the following best describes translation?",
        options: ["The process of copying DNA into mRNA.", "The process of decoding mRNA to synthesize proteins.", "The process of forming mRNA in the nucleus.", "The process of replicating DNA into two strands."],
        answer: "The process of decoding mRNA to synthesize proteins."
    },
    {
        question: "Which of the following best captures the complexity of Mendel's Law of Segregation during meiosis?",
        options: ["Homologous chromosomes remain intact, with both alleles for a gene being passed to the same gamete, ensuring genetic consistency across generations.", "Alleles for a gene are separated during gamete formation, such that each gamete contains only one allele of a gene, and this occurs due to the separation of homologous chromosomes during Anaphase I of meiosis.", "The segregation of alleles is influenced by environmental factors, leading to non-random assortment of genes during meiosis.", "Alleles for different traits always segregate together in the same gamete, and recombination only occurs when crossing over between sister chromatids takes place."],
        answer: "Alleles for a gene are separated during gamete formation, such that each gamete contains only one allele of a gene, and this occurs due to the separation of homologous chromosomes during Anaphase I of meiosis."
    },
    {
        question: "In the context of the principle of codominance, which of the following situations demonstrates the expression of codominant alleles in a heterozygous organism?",
        options: ["A heterozygous flower has a phenotype that is an exact blend of the two parental colors, creating an entirely new intermediate color.", "A heterozygous individual expresses a single dominant allele, completely masking the effect of the other allele in the phenotype.", "Both alleles in a heterozygous individual are fully expressed, such as a flower with both red and white patches, resulting in a phenotype where both parental traits appear distinctly.", "Only one allele is partially expressed, and the other is silent, leading to an incomplete phenotype that shows reduced expression of both parental traits."],
        answer: "Both alleles in a heterozygous individual are fully expressed, such as a flower with both red and white patches, resulting in a phenotype where both parental traits appear distinctly."
    },
    {
        question: "The structure of DNA was determined by using X-ray pictures produced by …",
        options: ["Watson and Crick.", "Franklin and Wilkins.", "Watson and Franklin.", "Crick and Franklin."],
        answer: "Franklin and Wilkins."
    },
    {
        question: "The shape of the DNA molecule was discovered by ...",
        options: ["Franklin, using evidence obtained from Watson and Crick's work.", "Franklin, working independently of anyone else.", "Watson and Crick, working independently of anyone else.", "Watson and Crick, based on Franklin's X-ray diffraction patterns."],
        answer: "Watson and Crick, based on Franklin's X-ray diffraction patterns."
    },
    {
        question: "Which of the following best describes the process of crossing over during meiosis?",
        options: ["The exchange of genetic material between homologous chromosomes during prophase I, leading to genetic variation in gametes.", "The random assortment of chromosomes into gametes, ensuring that each gamete has a unique combination of chromosomes.", "The separation of sister chromatids during anaphase II, resulting in genetically identical daughter cells.", "The replication of DNA during interphase, ensuring that each chromosome consists of two identical sister chromatids."],
        answer: "The exchange of genetic material between homologous chromosomes during prophase I, leading to genetic variation in gametes."
    }
];

let currentQuestionIndex = 0;
let timer;
let score = 0;

document.getElementById('startButton').addEventListener('click', startQuiz);
document.getElementById('nextButton').addEventListener('click', nextQuestion);
document.getElementById('restartButton').addEventListener('click', restartQuiz);

function startQuiz() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    clearTimeout(timer);
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, index) => `
            <input type="radio" name="answer" value="${option}" id="option${index}">
            <label for="option${index}">${option}</label><br>
        `).join('')}
    `;

    timer = setTimeout(() => {
        alert("Time's up!");
        nextQuestion();
    }, 15000); // 15 seconds timer
}

function nextQuestion() {
    clearTimeout(timer);

    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
    }

    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').innerText = `Your score is ${score} out of ${questions.length}.`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('results').style.display = 'none';
    document.getElementById('welcome').style.display = 'block';
}
