let attep = 0;
let pass = '03463904471';
function takepass() {
  if (attep == 3) {
    window.location.href = './index.html'
  } else {
    let u = prompt("enter your password")
    if (u == pass) {
      alert("welcome")
      s();
    } else {
      attep = attep + 1;
      alert("wrong password ")
      takepass();
    }
  }


}

function s() {

  const quizData = [
    {
      question: "هڪ ملين برابر ٿيندو آهي؟",
      a: "ڏه لک",
      b: "هڪ لڪ",
      c: "پنجاه لک",
      d: "سو لک",
      correct: "a",
    },

    {
      question: "اوڻهتر هزار پنج سو کي انگن ۾ لکو؟",
      a: "69500",
      b: "695500",
      c: "569000",
      d: "6950000",
      correct: "a",
    },
    {
      question: "وڏي ۾ وڏو ست انگن وارو عدد ڪهڙو آهي؟",
      a: "111111",
      b: "888888",
      c: "9999999",
      d: "99999999",
      correct: "c",
    },
    {
      question: "ننڍي ۾  ننڍو پنج انگن وارو عدد ڪهڙو آهي؟",
      a: "100000",
      b: "10000",
      c: "99999",
      d: "11111",
      correct: "b",
    },
    // {
    //   question: "ملين واري طريقي کي ڇا ڇئبو آهي؟",
    //   a: "پاڪستاني",
    //   b: "عالمي",
    //   c: "ٻئي",
    //   d: "none of the above",
    //   correct: "b",
    // },
    {
      question: "ڏه ملين جو مطلب ڇا آهي؟",
      a: "هڪ لک",
      b: "ڏه لک",
      c: "هڪ ڪروڙ",
      d: "none of the above",
      correct: "c",
    },
    {
      question: "ننڍي ۾ ننڍو ست انگي عدد ۽ وڏي ۾ وڏو ست انگي عدد جو جواب ڇا ٿيندو؟",
      a: "10999999",
      b: "109999",
      c: "199999",
      d: "none of the above",
      correct: "a",
    },

    {
      question: "  ٽي سو چوونجاه کي ضرب ڪبو 25 سان ته جواب ڇا ايندو؟ ",
      a: "8300",
      b: "8100",
      c: "8200",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "مڪاني مله لهو 5 جو 45674 ۾",
      a: "ڏهاڪا",
      b: "ايڪا",
      c: "هزار",
      d: "none of the above",
      correct: "a",
    },
    {
      question: "ڪهڙو عدد پنهنجو پاڻ سان ۽ هر عدد سان پورو پورو ونڊجي سگهجي ٿو؟",
      a: "3",
      b: "2",
      c: "1",
      d: "none of the above",
      correct: "c",
    },
    // {
    //   question: "ڇا ٽي اڪي عدد آهي يا مفرد عدد آهي؟",
    //   a: "اڪي عدد",
    //   b: "مفرد عدد",
    //   d: "none of the above",
    //   correct: "a",
    // },
    {
      question: "ڀڄ اپت کي چئبو آهي؟",
      a: "ونڊ اپت",
      b: "ضرب اپت",
      c: "جوڙ اپت",
      d: "ڪو به نه",
      correct: "a",
    },
    {
      question: "ڪهڙو عدد 3 سان پورو پورو ونڊجي سگهجي ٿو؟",
      a: "67",
      b: "72",
      c: "547",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "ڇه ۽ ٻارنهن جو وڏو عام پورو ونڊيندڙ ڪهڙو آهي",
      a: "12",
      b: "6",
      c: "18",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "ڇه ۽ ٻارنهن جي ننڍي عام ڀڃ اپت ڪهڙي آهي؟ ",
      a: "12",
      b: "6",
      c: "8",
      d: "none of the above",
      correct: "a",
    },
    {
      question: "سورنهن ڀاڱي 8 جي صادي صورت ڪهڙي ٿيندي؟",
      a: "2",
      b: "4",
      c: "6",
      d: "none of the above",
      correct: "a",
    },
    {
      question: "پنجاه کي في سيڪڙي ۾ بدلائبو ته جواب ڇا ايندو؟",
      a: "50",
      b: "500",
      c: "5000",
      d: "25",
      correct: "c",
    },
    {
      question: "هيٽين ۾ جاميٽري جا اوزار ڪهڙا آهن",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "پلڪار جو ڪم ڇا آهي؟",
      a: "لائنون ڪڍڻ",
      b: "چورس ٺاهڻ",
      c: "گول ٺاهن",
      correct: "c",
    },
  ];




  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  const sec = document.getElementById('timer')
  const line = document.getElementById('line')
  const total = document.getElementById('total')
  let wrong_qustion = []


  let currentQuiz = 0
  let score = 0
  let time = 0;
  loadQuiz()
  setInterval(() => {
    if (time == 30) {
      currentQuiz = currentQuiz + 1;
      time = 0;
      score = score
      loadQuiz();
    }
    time = time + 1
    sec.innerHTML = time;
    let w = time * 100 / 30;
    console.log(w);
    line.style.width = `${w}%`
  }, 1000);

  function loadQuiz() {

    deselectAnswers()
    questionEl.innerText = ""
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText += currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }

  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }

  function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  submitBtn.addEventListener('click', () => {
    total.innerHTML = `${currentQuiz + 2} / 18`
    time = 0;
    submitBtn.classList.toggle("none")

    const answer = getSelected()
    console.log(answer);
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      } else {
        let asdf = quizData[currentQuiz].correct;

        let connrect = quizData[currentQuiz][asdf];
        let qustion = quizData[currentQuiz].question;
        wrong_qustion.push(`
          <li style="list-style:disk;align-self: flex-end;" dir="rtl">
           ${qustion}
          <p style="background-color: black; border: 2px solid white; border-radius: 10px;text-align: center; width: 200px;color:white;padding:5px;height:47px;box-sizing:border-box;">
            ${connrect}  
          </p>
          </li>
        `)
      }

      currentQuiz++

      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        t = quizData.length - score;
        quiz.innerHTML = `
        <div class = "quiz-header">
        <br>
         <h1>your score: ${score}</h1>
         <br>
         <h1>total wrong attempt : ${t}</h1>
          <ul id = "ul" style="align-self: flex-end;">

          </ul>
        </div>

           `
        setTimeout(() => {
          for (let index = 0; index < wrong_qustion.length; index++) {
            const deta = wrong_qustion[index];
            document.getElementById("ul").innerHTML += deta

          }
        }, 500);
      }
    }
  })
  function main() {
    submitBtn.classList.remove("none")
  }
  let input = document.getElementsByTagName("input")
  for (const iterator of input) {
    iterator.addEventListener("click", () => {
      main();
    })
  }



}
document.getElementById("mm").addEventListener("click", () => {
  // alert("azds")
  document.getElementById("startup").style.display = 'none'
  takepass();
})